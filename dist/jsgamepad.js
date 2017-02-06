!function(e){function t(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[v][e]}})}function r(e){var t;if(e&&e.__esModule){t={};for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.default=e}else{if("[object Module]"===Object.prototype.toString.call(e)||"undefined"!=typeof System&&System.isModule&&System.isModule(e))return e;t={default:e,__useDefault:!0}}return new o(t)}function o(e){Object.defineProperty(this,v,{value:e}),Object.keys(e).forEach(t,this)}function n(e){return"@node/"===e.substr(0,6)?c(e,r(m(e.substr(6))),{}):p[e]}function u(e){var t=n(e);if(!t)throw new Error('Module "'+e+'" expected, but not contained in build.');if(t.module)return t.module;var r=t.linkRecord;return d(t,r),a(t,r,[]),t.module}function d(e,t){if(!t.depLoads){t.declare&&i(e,t),t.depLoads=[];for(var r=0;r<t.deps.length;r++){var o=n(t.deps[r]);t.depLoads.push(o),o.linkRecord&&d(o,o.linkRecord);var u=t.setters&&t.setters[r];u&&(u(o.module||o.linkRecord.moduleObj),o.importerSetters.push(u))}return e}}function i(t,r){var o=r.moduleObj,n=t.importerSetters,u=!1,d=r.declare.call(e,function(e,t){if(!u){if("object"==typeof e)for(var r in e)"__useDefault"!==r&&(o[r]=e[r]);else o[e]=t;u=!0;for(var d=0;d<n.length;d++)n[d](o);return u=!1,t}},{id:t.key});"function"!=typeof d?(r.setters=d.setters,r.execute=d.execute):(r.setters=[],r.execute=d)}function l(e,t,r){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:r,setters:void 0,execute:void 0,moduleObj:{}}}}function f(e,t,r,o){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:void 0,execute:o,executingRequire:r,moduleObj:{default:{},__useDefault:!0},setters:void 0}}}function s(e,t,r){return function(o){for(var n=0;n<e.length;n++)if(e[n]===o){var u,d=t[n];return u=-1===r.indexOf(d)?a(d,d.linkRecord,r):d.linkRecord.moduleObj,u.__useDefault?u.default:u}}}function a(t,r,n){if(n.push(t),t.module)return t.module;var u;if(r.setters){for(var d=0;d<r.deps.length;d++){var i=r.depLoads[d],l=i.linkRecord;l&&-1===n.indexOf(i)&&(u=a(i,l,l.setters?n:[]))}r.execute.call(y)}else{var f={id:t.key},c=r.moduleObj;Object.defineProperty(f,"exports",{configurable:!0,set:function(e){c.default=e},get:function(){return c.default}});var p=s(r.deps,r.depLoads,n);if(!r.executingRequire)for(var d=0;d<r.deps.length;d++)p(r.deps[d]);var v=r.execute.call(e,p,c.default,f);if(void 0!==v?c.default=v:f.exports!==c.default&&(c.default=f.exports),c.default&&c.default.__esModule)for(var m in c.default)Object.hasOwnProperty.call(c.default,m)&&"default"!==m&&(c[m]=c.default[m])}var f=t.module=new o(r.moduleObj);if(!r.setters)for(var d=0;d<t.importerSetters.length;d++)t.importerSetters[d](f);return f}function c(e,t){return p[e]={key:e,module:t,importerSetters:[],linkRecord:void 0}}var p={},v="undefined"!=typeof Symbol?Symbol():"@@baseObject";o.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(o.prototype[Symbol.toStringTag]="Module");var m="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,y={};return Object.freeze&&Object.freeze(y),function(e,t,n,d){return function(i){i(function(i){var s={_nodeRequire:m,register:l,registerDynamic:f,registry:{get:function(e){return p[e].module},set:c},newModule:function(e){return new o(e)}};c("@empty",new o({}));for(var a=0;a<t.length;a++)c(t[a],r(arguments[a],{}));d(s);var v=u(e[0]);if(e.length>1)for(var a=1;a<e.length;a++)u(e[a]);return n?v.default:(v instanceof o&&Object.defineProperty(v,"__esModule",{value:!0}),v)})}}}("undefined"!=typeof self?self:global)

(["a"], ["c"], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic('b', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  function EventEmitter() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
  }
  module.exports = EventEmitter;

  // Backwards-compat with node 0.10.x
  EventEmitter.EventEmitter = EventEmitter;

  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined;

  // By default EventEmitters will print a warning if more than 10 listeners are
  // added to it. This is a useful default which helps finding memory leaks.
  EventEmitter.defaultMaxListeners = 10;

  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.
  EventEmitter.prototype.setMaxListeners = function (n) {
    if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
  };

  EventEmitter.prototype.emit = function (type) {
    var er, handler, len, args, i, listeners;

    if (!this._events) this._events = {};

    // If there is no 'error' event listener then throw.
    if (type === 'error') {
      if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
        er = arguments[1];
        if (er instanceof Error) {
          throw er; // Unhandled 'error' event
        }
        throw TypeError('Uncaught, unspecified "error" event.');
      }
    }

    handler = this._events[type];

    if (isUndefined(handler)) return false;

    if (isFunction(handler)) {
      switch (arguments.length) {
        // fast cases
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        // slower
        default:
          args = Array.prototype.slice.call(arguments, 1);
          handler.apply(this, args);
      }
    } else if (isObject(handler)) {
      args = Array.prototype.slice.call(arguments, 1);
      listeners = handler.slice();
      len = listeners.length;
      for (i = 0; i < len; i++) listeners[i].apply(this, args);
    }

    return true;
  };

  EventEmitter.prototype.addListener = function (type, listener) {
    var m;

    if (!isFunction(listener)) throw TypeError('listener must be a function');

    if (!this._events) this._events = {};

    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

    if (!this._events[type])
      // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;else if (isObject(this._events[type]))
      // If we've already got an array, just append.
      this._events[type].push(listener);else
      // Adding the second element, need to change to array.
      this._events[type] = [this._events[type], listener];

    // Check for listener leak
    if (isObject(this._events[type]) && !this._events[type].warned) {
      if (!isUndefined(this._maxListeners)) {
        m = this._maxListeners;
      } else {
        m = EventEmitter.defaultMaxListeners;
      }

      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
        if (typeof console.trace === 'function') {
          // not supported in IE 10
          console.trace();
        }
      }
    }

    return this;
  };

  EventEmitter.prototype.on = EventEmitter.prototype.addListener;

  EventEmitter.prototype.once = function (type, listener) {
    if (!isFunction(listener)) throw TypeError('listener must be a function');

    var fired = false;

    function g() {
      this.removeListener(type, g);

      if (!fired) {
        fired = true;
        listener.apply(this, arguments);
      }
    }

    g.listener = listener;
    this.on(type, g);

    return this;
  };

  // emits a 'removeListener' event iff the listener was removed
  EventEmitter.prototype.removeListener = function (type, listener) {
    var list, position, length, i;

    if (!isFunction(listener)) throw TypeError('listener must be a function');

    if (!this._events || !this._events[type]) return this;

    list = this._events[type];
    length = list.length;
    position = -1;

    if (list === listener || isFunction(list.listener) && list.listener === listener) {
      delete this._events[type];
      if (this._events.removeListener) this.emit('removeListener', type, listener);
    } else if (isObject(list)) {
      for (i = length; i-- > 0;) {
        if (list[i] === listener || list[i].listener && list[i].listener === listener) {
          position = i;
          break;
        }
      }

      if (position < 0) return this;

      if (list.length === 1) {
        list.length = 0;
        delete this._events[type];
      } else {
        list.splice(position, 1);
      }

      if (this._events.removeListener) this.emit('removeListener', type, listener);
    }

    return this;
  };

  EventEmitter.prototype.removeAllListeners = function (type) {
    var key, listeners;

    if (!this._events) return this;

    // not listening for removeListener, no need to emit
    if (!this._events.removeListener) {
      if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
      return this;
    }

    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
      for (key in this._events) {
        if (key === 'removeListener') continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners('removeListener');
      this._events = {};
      return this;
    }

    listeners = this._events[type];

    if (isFunction(listeners)) {
      this.removeListener(type, listeners);
    } else if (listeners) {
      // LIFO order
      while (listeners.length) this.removeListener(type, listeners[listeners.length - 1]);
    }
    delete this._events[type];

    return this;
  };

  EventEmitter.prototype.listeners = function (type) {
    var ret;
    if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
    return ret;
  };

  EventEmitter.prototype.listenerCount = function (type) {
    if (this._events) {
      var evlistener = this._events[type];

      if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
    }
    return 0;
  };

  EventEmitter.listenerCount = function (emitter, type) {
    return emitter.listenerCount(type);
  };

  function isFunction(arg) {
    return typeof arg === 'function';
  }

  function isNumber(arg) {
    return typeof arg === 'number';
  }

  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }

  function isUndefined(arg) {
    return arg === void 0;
  }
});
$__System.register('a', ['b', 'c'], function (_export, _context) {
  "use strict";

  var EventEmitter, $, _classCallCheck, _createClass, _possibleConstructorReturn, _inherits, requestAnimationFrame, Gamepad, gamepad;

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

  return {
    setters: [function (_b) {
      EventEmitter = _b.default;
    }, function (_c) {
      $ = _c.default;
    }],
    execute: function () {
      _classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _possibleConstructorReturn = function (self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      };

      _inherits = function (subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      };

      requestAnimationFrame = getRequestAnimationFrame();

      Gamepad = function (_EventEmitter) {
        _inherits(Gamepad, _EventEmitter);

        function Gamepad() {
          _classCallCheck(this, Gamepad);

          var _this = _possibleConstructorReturn(this, (Gamepad.__proto__ || Object.getPrototypeOf(Gamepad)).call(this));

          _this.gamepads = _this.emptyGamepadList;
          _this.activeButtons = {};
          _this.activeAxes = {};

          $(window).on("gamepadconnected webkitgamepadconnected mozgamepadconnected", function () {
            _this.scanGamepads();
          }).on("gamepaddisconnected webkitgamepaddisconnected mozgamepaddisconnected", function () {
            _this.scanGamepads();
          });
          return _this;
        }

        _createClass(Gamepad, [{
          key: "watch",
          value: function watch() {
            if (this.isWatching) return;
            this.isWatching = true;

            this.watchLoop();
          }
        }, {
          key: "watchLoop",
          value: function watchLoop() {
            var _this2 = this;

            this.scanGamepads();

            if (this.isWatching) {
              requestAnimationFrame(function () {
                return _this2.watchLoop();
              });
            }
          }
        }, {
          key: "unwatch",
          value: function unwatch() {
            if (!this.isWatching) return;
            this.isWatching = false;
          }
        }, {
          key: "scanGamepads",
          value: function scanGamepads() {
            var _this3 = this;

            var gamepads = this.getGamepads();
            Object.keys(gamepads).forEach(function (gamepadIndex) {
              var gamepad = gamepads[gamepadIndex];
              if (gamepad) {
                if (!_this3.gamepads[gamepadIndex]) {
                  _this3.gamepads = _this3.snapshotGamepadList(gamepads);
                  _this3.emit("connected", gamepad);
                } else {
                  _this3.scanButtons(gamepad);
                  _this3.scanAxes(gamepad);
                }
              } else {
                if (_this3.gamepads[gamepadIndex]) {
                  var disconnectedGamepad = _this3.gamepads[gamepadIndex];
                  _this3.gamepads = _this3.snapshotGamepadList(gamepads);
                  _this3.emit("disconnected", disconnectedGamepad);
                }
              }
            });
          }
        }, {
          key: "scanButtons",
          value: function scanButtons(gamepad) {
            var _this4 = this;

            var activeButtons = this.activeButtons[gamepad.index] = this.activeButtons[gamepad.index] || {};
            gamepad.buttons.forEach(function (button, buttonIndex) {
              button = _this4.snapshotButton(_this4.mapButton(button));

              var buttonBefore = activeButtons[buttonIndex];
              var e = { button: button, buttonIndex: buttonIndex, gamepad: gamepad };
              if (button.pressed && (!buttonBefore || !buttonBefore.pressed)) {
                _this4.emit("buttonPressed", e);
              }

              if (buttonBefore && button.value !== buttonBefore.value) {
                _this4.emit("buttonChanged", e);
              }

              if (!button.pressed && buttonBefore && buttonBefore.pressed) {
                _this4.emit("buttonReleased", e);
              }

              activeButtons[buttonIndex] = button;
            });
          }
        }, {
          key: "scanAxes",
          value: function scanAxes(gamepad) {
            var _this5 = this;

            var activeAxes = this.activeAxes[gamepad.index] = this.activeAxes[gamepad.index] || {};
            gamepad.axes.forEach(function (axis, axisIndex) {
              var axisBefore = activeAxes[axisIndex];
              var e = { axis: axis, axisIndex: axisIndex, gamepad: gamepad };

              if (axisBefore && axis !== axisBefore) {
                _this5.emit("axisChanged", e);
              }

              activeAxes[axisIndex] = axis;
            });
          }
        }, {
          key: "getGamepads",
          value: function getGamepads() {
            if (navigator.getGamepads) {
              return navigator.getGamepads();
            } else if (navigator.webkitGetGamepads) {
              return navigator.webkitGetGamepads();
            } else {
              return this.emptyGamepadList;
            }
          }
        }, {
          key: "snapshotGamepadList",
          value: function snapshotGamepadList(data) {
            var gamepadList = {};
            Object.keys(data).forEach(function (gamepadIndex) {
              gamepadList[gamepadIndex] = data[gamepadIndex];
            });

            gamepadList.length = data.length;

            return gamepadList;
          }
        }, {
          key: "snapshotButton",
          value: function snapshotButton(button) {
            return {
              pressed: !!button.pressed,
              touched: !!button.touched,
              value: button.value
            };
          }
        }, {
          key: "mapButton",
          value: function mapButton(button) {
            if (typeof button === "object") return button;

            return {
              pressed: button === 1.0,
              touched: button !== 0.0,
              value: button
            };
          }
        }, {
          key: "emptyGamepadList",
          get: function get() {
            return {
              0: null,
              1: null,
              2: null,
              3: null,
              length: 4
            };
          }
        }]);

        return Gamepad;
      }(EventEmitter);

      _export('gamepad', gamepad = new Gamepad());

      _export('gamepad', gamepad);

      _export('default', gamepad);
    }
  };
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define(["jquery"], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory(require("jquery"));
  else
    jsGamepad = factory($);
});
//# sourceMappingURL=jsgamepad.js.map