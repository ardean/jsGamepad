import $ from "jquery";
import jsGamepad from "./src/index";

jsGamepad.on("connected", (gamepad) => {
  const $gamepad = $("<div />")
    .addClass("gamepad")
    .addClass("gamepad-" + gamepad.index);
  $("<h2 />")
    .text("Gamepad #" + gamepad.index + " " + gamepad.id + "")
    .appendTo($gamepad);
  $("<h3 />")
    .addClass("secondary")
    .text("Mapping: " + gamepad.mapping)
    .appendTo($gamepad);
  const $buttons = $("<div />")
    .addClass("gamepad-buttons")
    .appendTo($gamepad);

  gamepad.buttons.forEach((button, buttonIndex) => {
    const $gamepadButton = $("<div />")
      .addClass("gamepad-button")
      .addClass("gamepad-button-" + buttonIndex)
      .text(buttonIndex)
      .appendTo($buttons);

    $("<div />")
      .addClass("gamepad-button-value")
      .appendTo($gamepadButton);
  });

  const $axes = $("<div />")
    .addClass("gamepad-axes")
    .appendTo($gamepad);

  gamepad.axes.forEach((axis, axisIndex) => {
    const $gamepadAxis = $("<div />")
      .addClass("gamepad-axis")
      .addClass("gamepad-axis-" + axisIndex)
      .text(axisIndex)
      .appendTo($axes);

    $("<div />")
      .addClass("gamepad-axis-value")
      .appendTo($gamepadAxis);
  });

  $gamepad.appendTo(document.body);
}).on("disconnected", (gamepad) => {
  $(".gamepad-" + gamepad.index).remove();
}).on("buttonPressed", ({ button, buttonIndex, gamepad }) => {
  $(".gamepad-button-" + buttonIndex)
    .addClass("pressed");
}).on("buttonChanged", ({ button, buttonIndex, gamepad }) => {
  $(".gamepad-button-" + buttonIndex)
    .find(".gamepad-button-value")
    .text(button.value);
}).on("buttonReleased", ({ button, buttonIndex, gamepad }) => {
  $(".gamepad-button-" + buttonIndex)
    .removeClass("changed")
    .removeClass("pressed");
}).on("axisChanged", ({ axis, axisIndex, gamepad }) => {
  $(".gamepad-axis-" + axisIndex)
    .find(".gamepad-axis-value")
    .text(axis);
});

jsGamepad.watch();
