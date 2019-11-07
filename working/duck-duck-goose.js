/*
Duck Duck Goose
Duck Duck Goose is a classroom game meant for a large group of people. ☺️
You may remember this from kindergarten, but we’re going to change the rules a bit (a lot) here.
The first person would say “1”.
The second would say “2”.
All the way to the last person.
Sounds easy, right? Well, let’s make it a little harder.
If the person has a number that is a multiple of 3, they will say “Duck”.
If the person has a number that is a multiple of 5, they will say “Duck duck”.
If the person has a number that is a multiple of both 3 and 5, they will say “Duck duck goose!”.
If you say the wrong word, or the wrong number, you’re out!
Step 1
Print the numbers from 1 to 75, each number on its own line:
1
2
3
4
5
6
7
8
9
10
11
12
13
14
...

Step 2
If the number is a multiple of 3, print the word “Duck”. Otherwise, print the number:
1
2
Duck
4
5
Duck
7
8
Duck
10
11
Duck
13
14
...

Step 3
If the number is a multiple of 5, print the word “Duck duck”:
1
2
Duck
4
Duck duck
Duck
7
8
Duck
Duck duck
11
Duck
13
14
...

Step 4
If the number is a multiple of both 3 and 5, print “Duck duck goose!”:
1
2
Duck
4
Duck duck
Duck
7
8
Duck
Duck duck
11
Duck
13
14
Duck duck goose!
...
73
74
Duck duck goose!



*/

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

