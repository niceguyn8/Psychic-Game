// // user and computer choices
//
// var options ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s"];
//
// //user input/guess section
//
// document.onkeyup = function() {
//   var userguess = String.fromCharCode(event.keyCode).
//     toLowerCase();
// }
//
// console.log(userGuess);
//
//
// //computer selection/guess section
//
// var computerGuess = options[Math.floor(Math.random()*options
//   .length)]
//
//   console.log(computerGuess);




  // <!-- I need the user to make a choice
  // I need the computer to make a choice
  // Capture that choice
  // Compare that choice
  // and display the result in the browser -->




  // user and computer choices

  // var options ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s"];

  var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s"];

  //Score keeping variables

  var wins = 0;
  var losses = 0;
  var guessesLeft = 10;


  //user input/guess section
  document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.which).
    toLowerCase();


    console.log(userGuess);

  //computer selection/guess section
  var computerGuess = options[Math.floor(Math.random()*options
  .length)]

    console.log(computerGuess);

    }


  // How many guesses? 10 guesses! I'll need a for loop
  for (var i = 0; i < 10; i++) {
  console.log(i + 1);


  // Score Copmares attempt Using if else statements)
  // if (userGuess === computerGuess) {
  // wins++;
  //
  // } else {
  //   losses++;
  // }

  }
