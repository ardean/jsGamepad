import EventEmitter from "events";
import $ from "jquery";

const requestAnimationFrame = getRequestAnimationFrame();

class Gamepad extends EventEmitter {
  constructor() {
    super();

    this.gamepads = this.emptyGamepadList;
    this.activeButtons = {};
    this.activeAxes = {};

    $(window)
      .on("gamepadconnected webkitgamepadconnected mozgamepadconnected", () => {
        this.scanGamepads();
      })
      .on("gamepaddisconnected webkitgamepaddisconnected mozgamepaddisconnected", () => {
        this.scanGamepads();
      });
  }

  watch() {
    if (this.isWatching) return;
    this.isWatching = true;

    this.watchLoop();
  }

  watchLoop() {
    this.scanGamepads();

    if (this.isWatching) {
      requestAnimationFrame(() => this.watchLoop());
    }
  }

  unwatch() {
    if (!this.isWatching) return;
    this.isWatching = false;
  }

  scanGamepads() {
    const gamepads = this.getGamepads();
    Object.keys(gamepads).forEach((gamepadIndex) => {
      const gamepad = gamepads[gamepadIndex];
      if (gamepad) {
        if (!this.gamepads[gamepadIndex]) {
          this.gamepads = this.snapshotGamepadList(gamepads);
          this.emit("connected", gamepad);
        } else {
          this.scanButtons(gamepad);
          this.scanAxes(gamepad);
        }
      } else {
        if (this.gamepads[gamepadIndex]) {
          const disconnectedGamepad = this.gamepads[gamepadIndex];
          this.gamepads = this.snapshotGamepadList(gamepads);
          this.emit("disconnected", disconnectedGamepad);
        }
      }
    });
  }

  scanButtons(gamepad) {
    const activeButtons = this.activeButtons[gamepad.index] = this.activeButtons[gamepad.index] || {};
    gamepad.buttons.forEach((button, buttonIndex) => {
      button = this.snapshotButton(this.mapButton(button));

      const buttonBefore = activeButtons[buttonIndex];
      const e = { button, buttonIndex, gamepad };
      if (button.pressed && (!buttonBefore || !buttonBefore.pressed)) {
        this.emit("buttonPressed", e);
      }

      if (buttonBefore && button.value !== buttonBefore.value) {
        this.emit("buttonChanged", e);
      }

      if (!button.pressed && (buttonBefore && buttonBefore.pressed)) {
        this.emit("buttonReleased", e);
      }

      activeButtons[buttonIndex] = button;
    });
  }

  scanAxes(gamepad) {
    const activeAxes = this.activeAxes[gamepad.index] = this.activeAxes[gamepad.index] || {};
    gamepad.axes.forEach((axis, axisIndex) => {
      const axisBefore = activeAxes[axisIndex];
      const e = { axis, axisIndex, gamepad };

      if (axisBefore && axis !== axisBefore) {
        this.emit("axisChanged", e);
      }

      activeAxes[axisIndex] = axis;
    });
  }

  getGamepads() {
    if (navigator.getGamepads) {
      return navigator.getGamepads();
    } else if (navigator.webkitGetGamepads) {
      return navigator.webkitGetGamepads();
    } else {
      return this.emptyGamepadList;
    }
  }

  snapshotGamepadList(data) {
    const gamepadList = {};
    Object.keys(data).forEach((gamepadIndex) => {
      gamepadList[gamepadIndex] = data[gamepadIndex];
    });

    gamepadList.length = data.length;

    return gamepadList;
  }

  snapshotButton(button) {
    return {
      pressed: !!button.pressed,
      touched: !!button.touched,
      value: button.value
    };
  }

  mapButton(button) {
    if (typeof button === "object") return button;

    return {
      pressed: button === 1.0,
      touched: button !== 0.0,
      value: button
    };
  }

  get emptyGamepadList() {
    return {
      0: null,
      1: null,
      2: null,
      3: null,
      length: 4
    };
  }
}

function getRequestAnimationFrame() {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame;
  } else if (window.webkitRequestAnimationFrame) {
    return window.webkitRequestAnimationFrame;
  } else if (window.mozRequestAnimationFrame) {
    return window.mozRequestAnimationFrame;
  } else if (window.msRequestAnimationFrame) {
    return window.msRequestAnimationFrame;
  } else if (window.oRequestAnimationFrame) {
    return window.oRequestAnimationFrame;
  } else {
    return function (callback) {
      setTimeout(callback, 0);
    };
  }
}

const gamepad = new Gamepad();

export default gamepad;
export { gamepad };
