// Create a small array
var letters = ["a", "b", "c"];

// Create an empty array to hold what the user guesses
var UserGuess = []
// Create a variable that will be randomly assigned one of the three letters
var computerGuess = letters[Math.floor(Math.random() * letters.length )];
console.log(computerGuess); 
// Set a limit for the user guesses left and assign that to a variable. 
var guessLeft = 10
// Create counters for wins and losses and assign them the value of zero
var wins = 0;
var losses = 0;

// Create three functions to update guesses, update guesses left, and update guesses so far

  // In the update guesses left function create a code to grab the HTML element and setting it equal to the guesses left.
  // (i.e. guesses left will get displayed in HTML)
  

 
  // In the update guesses function we get a random letter-to-guess and assign it based on a random generator (only looking at a, b, or c)
  if (UserGuess == computerGuess ) {
      win++
      attempts -=
      UserGuess.push()
  }
  
 
  // In the update guesses-so-far function we take the guesses the user has tried -- then display it as letters separated by commas.

// Create a reset function will be called when we reset everything
// The reset Function should assign the values of the variables to their original values before the user started to play
// For example, the guesses left variable, the guessed letter empty array ...etc

// Call the functions that you created above

// Create a document.onkeydown function that will capture the keyboard clicks.
    document.onkeydown = function(event) {
   UserGuess= event.key;
   console.log(event);
}


  // This function should reduce the guesses by one

  // Set the event.key to Lowercase the letter and save it in a variable 
  var userChoice = event.toLowerCase();
  console.log(event);
  // Then push the guess to the guessedLetters array

  // Then its going to run the update functions


  // We create an if-statement to check if there's a match.


    // If there is then we win and we'll update the HTML to display the win.

    // Then we'll reset the game

  // If we are out of guesses...

    // Then we will loss and we'll update the HTML to display the loss.

    // Then we'll call the reset











    /*for (i= 0; i<10; i++) {
document.getElementById("g-left");
    if( UserGuess==letters) {
        wins++
        Guessleft--
        document.getElementById("g-left").innerHTML="GuessLeft";
        document.getElementById("wins").innerHTML="wins";
        console.log(Guessleft);
        console.log(wins);*/




      /* for ( i = 0; i < letters.length; i++)
        if (computerGuess && UserGuess == -1 ) {
        lettersGuessed.push(UserGuess); 
        guessLeft -= 1;
        document.getElementById("letters-g").innerHTML= lettersGuessed;
        document.getElementById("g-left").innerHTML = guessLeft; */