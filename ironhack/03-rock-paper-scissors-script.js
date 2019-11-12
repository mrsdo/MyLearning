function myPlay(a) {
    //vars
    let choiceArr = ['scissors', 'rock', 'paper'];
    a = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    console.log("");
    console.log("Your Play: " + a);
    return a;
}//myPlay();

function myPlay2(b){
    let choiceArr = ['scissors', 'rock', 'paper'];
    b = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    console.log("");
    console.log("Computer Play: " + b);
    console.log("");
    return b;
}//myPlay2();

function whoWin(x,y){
    x = myPlay();
    y = myPlay2();
    
        //Scissors
    if(x === 'scissors' && y === 'paper'){
        
        console.log("Scissors win");
        
    }else if(x === "scissors" && y === 'scissors'){
        
        console.log("It's a draw");
        
    }else if(x === "scissors" && y === "rock"){
        
        console.log("Rock Wins");
        
        //Paper
    } else if(x === 'paper' && y === 'scissors'){
        
        console.log("Paper loses");
    
    }else if(x === "paper" && y === 'paper'){
        
        console.log("It's a draw");
    
    }else if(x === "paper" && y === "rock") {
        
        console.log("Paper Wins");
    }
    //rock
    else if(x === 'rock' && y === 'scissors'){
    
    console.log("Rock Wins");
    
    }else if(x === "rock" && y === 'rock'){
    
    console.log("It's a draw");
    
    }else if(x === "rock" && y === "paper") {
    
    console.log("Paper Wins");
    }
    
}whoWin();
