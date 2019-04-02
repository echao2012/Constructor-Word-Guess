var chalk = require("chalk");
var inquirer = require("inquirer");
var Word = require("./Word");

var words = ["Jurassic Park",
             "Beauty and the Beast",
             "The Wizard of Oz",
             "Finding Nemo",
             "Forrest Gump",
             "Gone with the Wind"];
             
var currentWord, guesses, guessedLetters;

function playNewWord() {
    if(words.length > 0) {
        // Reset the guesses remaining and guessed letters
        guesses = 10;
        guessedLetters = [];

        // Choose a word randomly
        var iWord = Math.floor(Math.random() * words.length)
        currentWord = new Word(words[iWord]);

        // Remove the word from the array
        words.splice(iWord, 1);

        // Show the word (will be all underscores)
        console.log(chalk.yellow("\n" + currentWord + "\n"));

        // Start the game for this word
        playLetter();
    }
}

function playLetter() {
    if(guesses > 0 && !currentWord.letters.every(item => item.guessed)) {

        inquirer.prompt([
            {
                name: "letter",
                message: "Guess a letter:",
                validate: function(input) {
                    // Check if the input is a letter
                    if(input.length === 1 && input.match(/[a-z]/i)) {
                        // Check if the user has already entered this letter
                        if(guessedLetters.indexOf(input) >= 0) {
                            console.log(chalk.red("\n\nLetter already guessed. Please choose a new letter.\n"))
                            return false;
                        } else {
                            return true;
                        }
                    } else {
                        console.log(chalk.red("\n\nPlease enter a single letter.\n"));
                        return false;
                    }
                }
            }
        ]).then(function(response) {
            // Add the letter to the array of guessed letters
            guessedLetters.push(response.letter);

            if(!currentWord.guessLetter(response.letter)) {
                // The guess was incorrect
                guesses--;
                console.log(chalk.red("\nINCORRECT"));
                console.log("\nGuesses Remaining: " + guesses + "\n");
            } else {
                // The guess was correctS
                console.log(chalk.green("\nCORRECT\n"));
            }

            // Show the word
            console.log(chalk.yellow("\n" + currentWord + "\n"));

            // Guess the next letter
            playLetter();
        })
    } else {
        // This round/word is over
        if (guesses <= 0) {
            console.log(chalk.red("\nYOU LOSE!\n"));
        } else {
            console.log(chalk.green("\nYOU WIN!\n"));
        }
        
        if(words.length > 0) {
            console.log("\nNext word:");
        }

        // Move on to the next word
        playNewWord();
    }
}

// Start the game
playNewWord();