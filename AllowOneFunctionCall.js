/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;
    let result;

    return function(...args) {
        if (!called) {
            result = fn(...args);
            called = true;
            return result;
        } else {
            return undefined;
        }
    };
};

// Test Example 1
let fn1 = (a, b, c) => (a + b + c);
let onceFn1 = once(fn1);

console.log(onceFn1(1, 2, 3)); // 6
console.log(onceFn1(2, 3, 6)); // undefined

// Test Example 2
let fn2 = (a, b, c) => (a * b * c);
let onceFn2 = once(fn2);

console.log(onceFn2(5, 7, 4)); // 140
console.log(onceFn2(2, 3, 6)); // undefined
console.log(onceFn2(4, 6, 8)); // undefined


/*

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

    The first time the returned function is called, it should return the same result as fn.
    Every subsequent time it is called, it should return undefined.

 

Example 1:

Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called

Example 2:

Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
Output: [{"calls":1,"value":140}]
Explanation:
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called

 */

