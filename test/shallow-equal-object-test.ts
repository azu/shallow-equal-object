import * as assert from "assert";
import { shallowEqual } from "../src/shallow-equal-object";

describe("shallowEqual", () => {
    it("Test shallow comparision", () => {
        const base = { a: 1, b: 2 };
        assert.ok(shallowEqual(base, { a: 1, b: 2 }));
        assert.equal(shallowEqual(base, { a: 1, b: 3 }), false);
        assert.equal(shallowEqual(base, { a: 1, b: 2, c: 3 }), false);
        assert.equal(shallowEqual(base, { a: 1 }), false);
    });
    it("not support deep comparision", () => {
        const base = { a: { b: 2 } };
        assert.equal(shallowEqual(base, { a: { b: 2 } }), false);
    });
    it("null === null", () => {
        assert.ok(shallowEqual(null, null));
    });
    it("null !== {}", () => {
        assert.equal(shallowEqual(null, {}), false);
        assert.equal(shallowEqual({}, null), false);
    });
    it("can customize 3rd argument", () => {
        const base = { a: 1, b: 2 };
        assert.ok(
            shallowEqual(
                base,
                { a: 1, b: 2 },
                {
                    customEqual: (a, b) => {
                        return typeof a === "number" && typeof b === "number";
                    }
                }
            )
        );
        assert.equal(
            shallowEqual(
                { a: "string" },
                { a: "string" },
                {
                    customEqual: (a, b) => {
                        return typeof a === "number" && typeof b === "number";
                    }
                }
            ),
            false
        );
    });
    describe("debug", () => {
        let logCalls = [];
        const consoleMock = {
            group() {},
            groupEnd() {},
            log(...message) {
                logCalls.push(...message);
            }
        };
        beforeEach(() => {
            logCalls = [];
        });
        it("objectA is not object", () => {
            shallowEqual(
                null,
                {},
                {
                    debug: true,
                    console: consoleMock
                }
            );
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
            shallowEqual(
                {},
                { a: 1 },
                {
                    debug: true,
                    console: consoleMock
                }
            );
            assert.strictEqual(logCalls[0], "object key length is not same");
        });
        it("object value is not equal", () => {
            shallowEqual(
                { a: 1 },
                { a: 2 },
                {
                    debug: true,
                    console: consoleMock
                }
            );
            assert.strictEqual(logCalls[0], "key:a is not equals between A and B.");
        });
    });
});
