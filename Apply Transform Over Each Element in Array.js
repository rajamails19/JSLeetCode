/*

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

 

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 

Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.

Example 3:

Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.

 

*/

/**
 * @param {number[]} arr - The input array.
 * @param {Function} fn - The mapping function to apply to each element.
 * @return {number[]} - The transformed array.
 */
var map = function(arr, fn) {
    // Initialize an empty array to store the transformed values
    const transformedArray = [];
    
    // Loop through each element of the input array
    for (let i = 0; i < arr.length; i++) {
        // Apply the mapping function to the current element and index
        const transformedValue = fn(arr[i], i);
        
        // Add the transformed value to the new array
        transformedArray.push(transformedValue);
    }
    
    // Return the transformed array
    return transformedArray;
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = map(numbers, (num, index) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
