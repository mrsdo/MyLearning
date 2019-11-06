/*// Hello! Below are some exercises and examples to help you become more accustomed to the concepts in the prep-work.

// As a quick demonstration, here is an array of numbers:
var testArr = [1, 2, 3, 4, 5]

// We can loop through the array to print each of the numbers on their own line. You'll format a loop to iterate over each item of the array, starting from the first element:

for (let i = 0; i < testArr.length; i++) {
    // An array item at a specific position is notated by the name of the array with [] next to it indicating its index. For example:
    console.log(testArr[i])
}*/

// Practice exercise:

// Now it's your turn! Create an array of 5 numbers, and find the sum of them by looping through them. The sum has been declared for you:

var practiceArr = [2, 4, 4, 9, 1];
var sum = 0; // keep this variable as 0, and add onto it when you loop


// Code goes here:

for (let i = 0; i < practiceArr.length; i++) {

    sum += practiceArr[i];
}

console.log('The sum is ' + sum + '');


//////////

// Create a function that takes an integer as an argument and prints "Even" for even numbers or "Odd" for odd numbers.

// Hint, you'll need to use the modulus operator (this thing: %)

//let number = even_or_odd(Math.floor((Math.random() * 10) + 1));


function even_or_odd(number) {

    //convert number to array
    for (let i = 0; i < practiceArr.length; i++) {
        let number = practiceArr[i];

        console.log('If selected randomly, the number is ' + number);
        // your code goes here
        if (number % 2 === 0) {
            console.log('Which is Even');
        } else {
            console.log('Which is Odd');
        }


    }
    return number;
}even_or_odd();