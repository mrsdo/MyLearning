/*
Ironhack Prep Work
Author: Martinique Dolce, me@martidolce.com
Date: November 6, 2019

Challenge:  Create a function that takes an integer as an argument and prints "Even"
for even numbers or "Odd" for odd numbers.

JavaScript Operators used...
Modulus operator (this thing: %)

 */

//Generate a random whole number from 0 - 20
let number = Math.floor((Math.random() * 20) + 1);

//test number
console.log("The random number is " + number);

//Function gets random 'number' and determines if it is odd or even
function even_or_odd_test(number) {
	
	if (number % 2 === 0) {
		console.log(number + " is and Even number");
	} else {
		console.log(number + " is and Odd number");
	}
	return number;
}

even_or_odd_test(number);
