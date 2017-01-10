'use strict';

var number = Math.floor(Math.random() * 50) + 1;

function analyseGuess() {

  var guess = document.getElementById('guess').value;

  var tips = document.getElementById('tips');

  if (guess == number) {

    var correctGuess = document.createElement('li');
    var numberOfGuesses = document.getElementsByTagName('li').length;

    document.getElementById('submit').disabled = true;

    if (numberOfGuesses > 0) {
      correctGuess.appendChild(document.createTextNode("That's it! it was " + number + ". Not bad, that only took " + numberOfGuesses + " guesses."));

      tips.appendChild(correctGuess);
    } else {
      correctGuess.appendChild(document.createTextNode("Wow! you guessed " + number + " correctly the first time!"));
      tips.appendChild(correctGuess);
    }
  } else if (guess > 50) {
    var outofBounds = document.createElement('li');

    outofBounds.appendChild(document.createTextNode(guess + "? It's a number between 1 and 50!"));

    tips.appendChild(outofBounds);
  } else if (guess > number) {

    var tooHigh = document.createElement('li');

    tooHigh.appendChild(document.createTextNode("Nope, " + guess + "'s too high. Try Again!"));

    tips.appendChild(tooHigh);
  } else if (guess < number) {

    var tooLow = document.createElement('li');

    tooLow.appendChild(document.createTextNode("Nope, " + guess + "'s too low. Try Again!"));

    tips.appendChild(tooLow);
  }
}

function resetGame() {
  document.getElementById('submit').disabled = false;
  tips.innerHTML = "";
}