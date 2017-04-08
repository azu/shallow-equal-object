# shallow-equal-object [![Build Status](https://travis-ci.org/azu/shallow-equal-object.svg?branch=master)](https://travis-ci.org/azu/shallow-equal-object)

Shallow equal check object.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install shallow-equal-object

## Usage

```js
const { shallowEqual } = require("shallow-equal-object");
const base = { a: 1, b: 2 };
shallowEqual(base, { a: 1, b: 2 }); // => true
```

## Changelog

See [Releases page](https://github.com/azu/shallow-equal-object/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/shallow-equal-object/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
