let x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
    console.log(a * b);
    return a * b;
  // Function returns the product of a and b
}
let number = even_or_odd(Math.floor((Math.random() * 10) + 1));

function even_or_odd(number) {

    console.log(number);
    // your code goes here
    if (number % 2 === 0){
        console.log('Even');
    } else {
        console.log('Odd');
    }
    return number;

}