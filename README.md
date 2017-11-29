# shallow-equal-object [![Build Status](https://travis-ci.org/azu/shallow-equal-object.svg?branch=master)](https://travis-ci.org/azu/shallow-equal-object)

Shallow equality check for objects.

## Feature

- Custom equal function
- Debug mode
    - Why it is not equal?

## Install

Install with [npm](https://www.npmjs.com/):

    npm install shallow-equal-object

## Usage

```js
const { shallowEqual } = require("shallow-equal-object");
shallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 }); // => true
shallowEqual({ a: 1, b: 2 }, { a: 1, b: 42 }); // => false
shallowEqual({ a: 1, b: 2 }, { }); // => false
```

### Options

You can pass option object as 3rd arguments. 

#### `customEqual: (a:any, b:any) => boolean`

```ts
assert.ok(shallowEqual(base, { a: 1, b: 2 }, {
    customEqual: (a, b) => {
        return typeof a === "number" && typeof b === "number";
    }
}));
assert.equal(shallowEqual({ a: "string" }, { a: "string" }, {
    customEqual: (a, b) => {
        return typeof a === "number" && typeof b === "number";
    }
}), false);
```

#### `debug: boolean`

Enable debug mode if `{ debug: true }`

Debug mode show helpful log that why that result is `false`.

```ts
it("objectA is not object", () => {
    shallowEqual(null, {}, {
        debug: true,
        console: consoleMock
    });
    assert.strictEqual(logCalls[0], "objectA is not object.");
});
it("objectB is not object", () => {
    shallowEqual({}, null, {
        debug: true,
        console: consoleMock
    });
    assert.strictEqual(logCalls[0], "objectB is not object.");
});
it("object key length is not same", () => {
    shallowEqual({}, { a: 1 }, {
        debug: true,
        console: consoleMock
    });
    assert.strictEqual(logCalls[0], "object key length is not same");
});
it("object value is not equal", () => {
    shallowEqual({ a: 1 }, { a: 2 }, {
        debug: true,
        console: consoleMock
    });
    assert.strictEqual(logCalls[0], "key:a is not equals between A and B.");
});
```

You can pass `console` object to `{ debug: true, console: ConsoleAPI }`

## Related

- [shallow-equal-props](https://github.com/azu/shallow-equal-props "azu/shallow-equal-props"): shallow equals for React's props

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
