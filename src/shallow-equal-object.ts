// MIT © 2017 azu
const hasOwn = Object.prototype.hasOwnProperty;
// Object.is ponyfill
export const is = (x: any, y: any): boolean => {
    if (x === y) {
        return x !== 0 || y !== 0 || 1 / x === 1 / y
    } else {
        return x !== x && y !== y
    }
};
/**
 * Return true, if `objA` is shallow equal to `objB`.
 * Pass Custom equality function to `customEqual`.
 * Default equality is `Object.is`
 *
 * `customEqual` function should return true if the `a` value is equal to `b` value.
 */
export const shallowEqual = (objA: any, objB: any, options?: {
    customEqual?: <T>(a: T, b: T) => boolean
}): boolean => {
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== "object" || objA === null ||
        typeof objB !== "object" || objB === null) {
        return false;
    }

    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    const isEqual = options && typeof options.customEqual === "function" ? options.customEqual : is;

    for (let i = 0; i < keysA.length; i++) {
        if (!hasOwn.call(objB, keysA[i]) || !isEqual(objA[keysA[i]], objB[keysA[i]])) {
            return false
        }
    }

    return true;
};
