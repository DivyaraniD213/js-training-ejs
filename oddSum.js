/*.
Write a recursive function named oddSum that takes a positive odd integer n and 
returns the sum of odd integers from 1 to n. Start with a base case, 
and use temporary variables to debug your solution. 
You might find it helpful to print the value of n each time oddSum is invoked.
*/

function oddSum(x) {
    console.log(x);

    if (x <= 0) {
        return 0;
    }
    else {
        return (x + oddSum(x - 2));
    }
}

console.log(oddSum(5));
