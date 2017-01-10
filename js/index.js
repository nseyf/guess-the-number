'use strict';

var number = Math.floor(Math.random() * 50) + 1;
var randomNumberArray = [];

randomNumberArray.push(number);

function analyseGuess(){

   var guess = document.getElementById('guess').value;

  var tips = document.getElementById('tips');

 if(guess == randomNumberArray.slice(-1)[0]){

   var correctGuess = document.createElement('li');
   var numberOfGuesses = document.getElementsByTagName('li').length;

  document.getElementById('submit').disabled = true;

 if(numberOfGuesses > 0){  correctGuess.appendChild(document.createTextNode("That's it! it was " + guess + ". Not bad, that only took " + numberOfGuesses + " guesses."));

   tips.appendChild(correctGuess);
                        } else {
                          correctGuess.appendChild(document.createTextNode("Wow! you guessed " + guess + " correctly the first time!"));
                          tips.appendChild(correctGuess);
                        }


 }  else if (guess > 50){
   var outofBounds = document.createElement('li');

   outofBounds.appendChild(document.createTextNode(guess + "? It's a number between 1 and 50!"));

   tips.appendChild(outofBounds);

} else if (guess > randomNumberArray.slice(-1)[0]) {

   var tooHigh = document.createElement('li');

   tooHigh.appendChild(document.createTextNode("Nope, " + guess + "'s too high. Try Again!"));

   tips.appendChild(tooHigh);

 } else if ( guess < randomNumberArray.slice(-1)[0]) {

   var tooLow = document.createElement('li');

tooLow.appendChild(document.createTextNode("Nope, " + guess + "'s too low. Try Again!"));

   tips.appendChild(tooLow);
 }
}

function resetGame(){

  randomNumberArray.push(Math.floor(Math.random() * 50) + 1);
  

  document.getElementById('submit').disabled = false;

  tips.innerHTML = "";
}
