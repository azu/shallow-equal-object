import * as assert from "assert";
import shallowEquals from "../src/shallow-equals-object";

describe("shallowEquals", () => {
    it("Test shallow comparision", () => {
        const base = { a: 1, b: 2 };
        assert.ok(shallowEquals(base, { a: 1, b: 2 }));
        assert.equal(shallowEquals(base, { a: 1, b: 3 }), false);
        assert.equal(shallowEquals(base, { a: 1, b: 2, c: 3 }), false);
        assert.equal(shallowEquals(base, { a: 1 }), false);
    });
    it("not support deep comparision", () => {
        const base = { a: { b: 2 } };
        assert.equal(shallowEquals(base, { a: { b: 2 } }), false);
    });
    it("null === null", () => {
        assert.ok(shallowEquals(null, null));
    });
    it("null !== {}", () => {
        assert.equal(shallowEquals(null, {}), false);
        assert.equal(shallowEquals({}, null), false);
    });
});
