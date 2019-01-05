# joi-expo-push-token

#### [Expo Push Token][expo-docs-url] validation for Joi.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![License: MIT][license-image]][license-url]

## Installation

It can be installed from the
[npm registry](https://www.npmjs.com/):

```bash
$ npm install joi-expo-push-token
```

## Usage example

```js
const joi = Joi.extend(require('joi-expo-push-token'));

joi.string().expoPushToken().validate(maybeToken);
```

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/joi-expo-push-token.svg
[npm-url]: https://npmjs.org/package/joi-expo-push-token
[downloads-image]: https://img.shields.io/npm/dm/joi-expo-push-token.svg
[downloads-url]: https://npmjs.org/package/joi-expo-push-token
[expo-docs-url]: https://docs.expo.io/versions/latest/guides/push-notifications#1-save-the-users-expo-push-token
[coveralls-url]: https://coveralls.io/r/expressjs/express?branch=master
[travis-image]: https://travis-ci.org/dolsem/joi-expo-push-token.svg?branch=master
[travis-url]: https://travis-ci.org/dolsem/joi-expo-push-token
[coverage-image]: https://coveralls.io/repos/github/dolsem/joi-expo-push-token/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/dolsem/joi-expo-push-token?branch=master
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: https://opensource.org/licenses/MIT
