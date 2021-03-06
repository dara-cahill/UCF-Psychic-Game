
var randomLetter, wins, losses, guessesLeft, guessesSoFar;
    
    wins=0;
    losses=0;

function init (){
    guessesLeft=10;
    guessesSoFar=[];
    console.log ("Initializing Game", wins, losses,guessesLeft,guessesSoFar)
    updateWinValueOnUI(wins);
    updateLossesValueOnUI(losses);
    updateGuessesLeftValueOnUI(guessesLeft);
    updateguessesSoFarValueOnUI(guessesSoFar);
    randomLetter = pickRandomLetter();

}

function pickRandomLetter(){
    
    randomLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var randomNumber = Math.floor(Math.random() * randomLetter.length -1);
    console.log(randomLetter[randomNumber]);
    return randomLetter[randomNumber];
}

document.onkeyup = function (event){
    console.log(event.key)
    
    if (event.key === randomLetter){
        wins++; 
        init();
    } else if (guessesSoFar.length<10){
        guessesLeft= 10 - guessesSoFar.push (event.key);
        console.log (guessesLeft,guessesSoFar)
        updateGuessesLeftValueOnUI(guessesLeft)
        updateguessesSoFarValueOnUI(guessesSoFar)
    } else {
        losses++;
        init();
    }

}

function updateWinValueOnUI (newWinValue){
    document.getElementById("w").innerHTML = newWinValue;
}

function updateLossesValueOnUI (newLossesValue){
    document.getElementById("l").innerHTML = newLossesValue;
}

function updateGuessesLeftValueOnUI (newGuessesLeftValue){
    document.getElementById("gL").innerHTML = newGuessesLeftValue;
}

function updateguessesSoFarValueOnUI (newguessesSoFarValue){
    document.getElementById("gSF").innerHTML = newguessesSoFarValue;
}
init();

