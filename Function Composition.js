// QUESTION - PROBLEM IS DOWN 
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    // If the functions array is empty, return the identity function.
    if (functions.length === 0) {
        return function(x) {
            return x;
        };
    }

    // Return a function that takes an input x and applies each function in reverse order.
    return function(x) {
        // Start with the last function in the array and apply it to x.
        let result = functions[functions.length - 1](x);

        // Apply the remaining functions in reverse order.
        for (let i = functions.length - 2; i >= 0; i--) {
            result = functions[i](result);
        }

        return result;
    };
};

// Example usage:
const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // Outputs: 9 (2 * (4 + 1) = 9)


/*

Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.

 

Example 1:

Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65

Example 2:

Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000

Example 3:

Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function

*/


