# jsGamepad
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![License][license-image]][license-url]

**W3C Gamepad API Simplified & Implementation fixes**

[Demo](https://ardean.github.io/jsGamepad/)

## Specification
[Gamepad API, W3C](https://w3c.github.io/gamepad/)

## Fixes

This lib fixes a bug in Chrome, where the `connected` event will be emitted instead of the `disconnected` event.

## Usage

I suggest you to use [jspm](http://jspm.io/) as your package manager.

```js
import gamepad from "jsgamepad";

gamepad.on("connected", (gamepad) => {
  console.log("connected " + gamepad.index);
}).on("disconnected", (gamepad) => {
  console.log("disconnected " + gamepad.index);
}).on("buttonPressed", ({ button, buttonIndex, gamepad }) => {
  console.log("pressed " + buttonIndex);
}).on("buttonReleased", ({ button, buttonIndex, gamepad }) => {
  console.log("released " + buttonIndex);
});

// start loop for buttons and axes detection
gamepad.watch();
```

### Directly in a browser

Please checkout the [index-dist.html](https://ardean.github.io/jsGamepad/index-dist.html) file for direct usage in a browser.

## TODO

- API

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/jsgamepad.svg
[npm-url]: https://npmjs.org/package/jsgamepad
[downloads-image]: https://img.shields.io/npm/dm/jsgamepad.svg
[downloads-url]: https://npmjs.org/package/jsgamepad
[license-image]: https://img.shields.io/npm/l/jsgamepad.svg
[license-url]: LICENSE
