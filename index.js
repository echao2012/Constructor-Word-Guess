var inquirer = require("inquirer");
var Word = require("./Word");

var words = ["poodle", "chimpanzee", "dinosaur"];
var currentWord, guesses;

function playNewWord() {
    if(words.length > 0) {
        // Reset the guesses remaining
        guesses = 10;

        // Choose a word randomly
        var iWord = Math.floor(Math.random() * words.length)
        currentWord = new Word(words[iWord]);

        // Remove the word from the array
        words.splice(iWord, 1);

        // Start the game
        console.log("\n" + currentWord + "\n");
        playLetter();
    }
}

function playLetter() {
    if(guesses > 0 && !currentWord.letters.every(item => item.guessed)) {
        inquirer.prompt([
            {
                name: "letter",
                message: "Guess a letter:"
            }
        ]).then(function(response) {
            if(!currentWord.guessLetter(response.letter)) {
                guesses--;
                console.log("\nINCORRECT");
                console.log("\nGuesses Remaining: " + guesses);
            } else {
                console.log("\nCORRECT");
            }
            console.log("\n" + currentWord + "\n");

            playLetter();
        })
    } else if (guesses <= 0) {
        console.log("YOU LOSE!");
        playNewWord();
    } else {
        console.log("YOU WIN!");
        playNewWord();
    }

}

playNewWord();