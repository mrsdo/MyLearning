/*
 * Ironhack Prep Work
 * Author: Martinique Dolce, me@martidolce.com
 * Date: November 14, 2019
 * Sum of Positives

@GOAL:  You get an array of numbers, return the sum of all of the positives ones.
*       Example [1,-4,7,12] => 1 + 7 + 12 = 20
*/

const numbers = [-10, 20, 30, 50, -49]; // sums to 100
console.log("This is the entire array:", numbers);
console.log("These are all the positive numbers:", numbers.filter(myFilter));

//Find positive values only
function myFilter(value) {
    return value > 1
}

//Combine into one function
function mySums(numbers) {
    let negatives = [];
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negatives.push(numbers[i]);
        } else {
            sum += numbers[i];
        }
    }

    console.log("These are the negatives", negatives);

    return sum;
}

let sum_result = mySums(numbers);

//console.log("Result: ", sum_result);
console.log("Sum of the positive numbers: ", sum_result);