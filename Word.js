var Letter = require("./Letter");

var Word = function(letters) {
    // Split the string and create an array of Letters
    this.letters = letters.split('').map(item => new Letter(item));

    this.guessLetter = function(character) {
        // Check if the character exists in the word
        var result = false;
        this.letters.forEach(item => result = result | item.check(character));
        return result;
    }
}

Word.prototype.toString = function() {
    // Convert the letter array to a string
    return this.letters.map(item => item.toString()).join(' ');
}

module.exports = Word;