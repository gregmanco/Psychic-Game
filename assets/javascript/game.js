// Create a small array
var letters = ["a", "b", "c"];

// Create an empty array to hold what the user guesses
var userGuess = [];
// Create a variable that will be randomly assigned one of the three letters
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(computerGuess);
// Set a limit for the user guesses left and assign that to a variable. 
var guessLeft = 3;
// Create counters for wins and losses and assign them the value of zero
var wins = 0;
var losses = 0;



// Creates a function that will generate a random variable from the letters array
function updateGuess() {
  computerGuess = letters[Math.floor(Math.random() * letters.length)];
}

// In the update guesses-so-far function we take the guesses the user has tried -- then display it as letters separated by commas.


// Creates a function that will be called upon to start the game. Sets beginning game parameters.
 function start(){
 document.getElementById("wins").textContent = wins;
 document.getElementById("losses").textContent = losses;
 document.getElementById("guess-left").textContent = guessLeft;
 }
// Creates a function that will reset the game parameters so the game will continue after a win/loss.
function reset() {
  guessLeft = 3
  userGuess = [];
  console.log(guessLeft);
  document.getElementById("guess-left").textContent = guessLeft;
}

// Call the start function to begin the game.

 start();

// Create a document.onkeydown function that will capture the keyboard clicks.
document.onkeyup = function (event){ 
  var userChoice = event.key;
  console.log(event);


  // Set the event.key to Lowercase the letter and save it in a variable 
  userChoice = event.key.toLowerCase();
  console.log(userChoice);
  // Then push the guess to the guessedLetters array
  userGuess.push(userChoice);
  // Checks the user's guess vs the computers guess. Increases win by 1, decreases guesses left by 1, and calls for reset.
  if (userChoice === computerGuess) {
    wins++;
    guessLeft--;
    console.log(userGuess);
    document.getElementById("wins").textContent = wins;
    updateGuess();
    document.getElementById("user-guess").textContent = "";
    document.getElementById("guess-left").textContent = guessLeft;
    document.getElementById("user-guess").textContent = userChoice;
    console.log(computerGuess);
    reset();
//  If user guess isnt the same as the computer's guess and guesses left is not 0 it will decrease
// guesses left by -1
  } else if (userChoice != computerGuess && guessLeft != 0) {
    guessLeft--;
    document.getElementById("user-guess").textContent = "";
    document.getElementById("guess-left").textContent = guessLeft;
    // If user is out of guesses increase losses by +1 and call for reset.
  } else {
    losses++
    guessLeft--;
    document.getElementById("guess-left").textContent = guessLeft;
    document.getElementById("losses").textContent = losses;
    document.getElementById("user-guess").textContent = "";
    document.getElementById("user-guess").textContent = userChoice;
    updateGuess();

    reset();

  }


  // Created for loop to display the userGuess array.

  for (var i = 0; i < userGuess.length; i++) {
    document.getElementById("user-guess").textContent += userGuess[i] + ", ";
  }


 

}