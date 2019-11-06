// Using a for-loop, create a variable named message that equals the concatenation of integers (0, 1, 2, ...) from 0 to 99 (included).


var i = 0, x = "";
while (i < 100) {
    x = x + i;
    i++;
}
console.log(x);