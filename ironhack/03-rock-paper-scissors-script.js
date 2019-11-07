let choiceArr = ['scissors', 'rock', 'paper'];

let randomPick = Math.floor(Math.random() * choiceArr.length );

/*  Step 1. Create a function to pick a random play */
function myPlay() {
    console.log(choiceArr[randomPick]);

}myPlay();

/*Convert to document.getElement.html
var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}
*/

//Prints results to web page

function showMe() {
  let choiceArr = ['scissors', 'rock', 'paper'];
  let showMe = choiceArr.toString();
  let placeholder = document.getElementById('placeholder').innerHTML = showMe;
}




//Prints roll to the page  console.log(choiceArr[randomPick]);

/*function myPlay() {
  let placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = (String);
}*/

/*
var button = document.getElementById('button');

button.onclick = function() {
  let result = showMe.roll();
  myPlay(result);
};*/

/*let showMe = {


  choiceArr: 3,

  roll: function () {

    let myRoll = ['scissors', 'rock', 'paper'];

    let randomPick = Math.floor(Math.random() * myRoll.length) + 1;

    return randomPick;

  }

}*/







//Prints roll to the page  console.log(choiceArr[randomPick]);

/*function myPlay() {
  let placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = (String);
}*/

/*
var button = document.getElementById('button');

button.onclick = function() {
  let result = showMe.roll();
  myPlay(result);
};*/
