**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(millis); // Resolving the promise after millis milliseconds
        }, millis);
    });
}
// Testing the sleep function
let t = Date.now();
sleep(100).then(() => {
    console.log(Date.now() - t); // Expected Output: Around 100 (may vary slightly depending on system load)
});
// Another test
let t2 = Date.now();
sleep(200).then(() => {
    console.log(Date.now() - t2); // Expected Output: Around 200 (may vary slightly depending on system load)
});



/*

Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

 

Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});

Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.


*/
