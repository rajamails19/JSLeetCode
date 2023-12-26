/*

Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

    arr[i] - number from the arr
    i - index of arr[i]

filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

 

Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10

Example 2:

Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0

Example 3:

Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out


*/

/**
 * @param {number[]} arr - The input array.
 * @param {Function} fn - The filtering function to apply to each element.
 * @return {number[]} - The filtered array.
 */
var filter = function(arr, fn) {
    // Initialize an empty array to store the filtered values
    const filteredArr = [];
    
    // Loop through each element of the input array
    for (let i = 0; i < arr.length; i++) {
        // Apply the filtering function to the current element and index
        const isTruthy = fn(arr[i], i);
        
        // If the function returns a truthy value, add the element to the filtered array
        if (isTruthy) {
            filteredArr.push(arr[i]);
        }
    }
    
    // Return the filtered array
    return filteredArr;
};

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = filter(numbers, (num, index) => num % 2 === 0 || index === 0);
console.log(filteredNumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
