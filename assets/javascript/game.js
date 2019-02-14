var letters = ["a", "b", "c"];
var guessesLeft = 10;
var guesses = 0;
var cpuLetter = "";

var wins = 0;
var losses = 0;

function newLetter() {
  cpuLetter = letters[Math.floor(Math.random() * letters.length)];
}

document.addEventListener("DOMContentLoaded", function(e) {
  document.getElementById("wins").textContent = wins;
  document.getElementById("losses").textContent = losses;
  document.getElementById("guesses-left").textContent = guessesLeft;
  document.getElementById("guesses").textContent = guesses;
  newLetter();

  document.onkeyup = function(event) {
    var userGuess = event.key;

    if (userGuess === cpuLetter) {
      wins++;
      document.getElementById("wins").textContent = wins;
      guessesLeft = 10;
      document.getElementById("guesses-left").textContent = guessesLeft;
      guesses = 0;
      document.getElementById("guesses").textContent = guesses;
      newLetter();
    } else if (userGuess !== cpuLetter && guessesLeft !== 0) {
      guessesLeft--;
      document.getElementById("guesses-left").textContent = guessesLeft;
      guesses++;
      document.getElementById("guesses").textContent = guesses;
    } else if (userGuess !== cpuLetter && guessesLeft === 0) {
      losses++;
      document.getElementById("losses").textContent = losses;
      guessesLeft = 10;
      document.getElementById("guesses-left").textContent = guessesLeft;
      guesses = 0;
      document.getElementById("guesses").textContent = guesses;
      newLetter();
    }
  };
});
