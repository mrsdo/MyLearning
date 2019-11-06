
//Step 1
//Print the numbers from 1 to 75, each number on its own line:

var i = 0;
while (i < 75) {
    i++;
    /********/
//Step 2
//If the number is a multiple of 3, print the word “Duck”.
// Otherwise, print the number:
    if(i % 3 === 0){
        console.log("Duck");
    }
//Step 3
//If the number is a multiple of 5, print the word “Duck duck”.
// Otherwise, print the number:
    if(i % 5 === 0){
        console.log("Duck duck");
    }
//Step 4
//If the number is a multiple of 3 and 5, print the word “Duck duck goose!”.
// Otherwise, print the number:
    if(i % 3 === 0 || i % 5 === 0){
        console.log("Duck duck goose!");
    }
    else () {
        console.log(i);
    }
}

