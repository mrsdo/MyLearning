/*
 * Ironhack Prep Work
 * Author: Martinique Dolce, me@martidolce.com
 * Date: November 12, 2019
 * Opposites Attract Javascript
 * Timmy & Sarah think they are in love, but around where they live,
 * they will only know once they pick a flower each. If one of the
 * flowers has an even number of petals and the other has an odd number
 * of petals it means they are in love.

@GOAL:  Write a function that will take the number of petals of each flower
* and return true if they are in love and false if they aren't.
*
 */
   //create a random roll similar RPS.
/*
 * Ironhack Prep Work
 * Author: Martinique Dolce, me@martidolce.com
 * Date: November 6, 2019
 * Rock, Paper, Scissors
 */

function TimPlay(a) {
    //vars
    let choiceArr = [2,3,4,5,6,7];
    a = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    console.log("");
    console.log("Timmy: " + a);
    return a;
}//myPlay();

function SarahPlay(b){
    let choiceArr = [2,3,4,5,6,7];;
    b = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    console.log("");
    console.log("Sarah: " + b);
    console.log("");
    return b;
}//myPlay2();

function whoWin(x,y){
    x = TimPlay();
    y = SarahPlay();

    //Tim Even Sarah Even
    if(x % 2 === 0 && y % 2 === 0) {

        console.log("No Love");
    }

    // Tim Even Sarah Odd
    else if(x % 2 === 0 && y / 2 > 1){

    console.log("No Love!!!");

    }
    //Tim Odd Sarah Even
    else if(x / 2 > 1 && y % 2 === 0){

        console.log("It's Love");
    }
    //Else Tim Odd Sarah Odd
    else if(x / 2 > 1 && y / 2 > 1){

        console.log("No Love");
    }

}whoWin();
