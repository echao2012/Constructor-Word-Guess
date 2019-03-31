var Letter = require("./Letter");

var Word = function(letters) {
    this.letters = letters.split('').map(item => new Letter(item));

    this.guessLetter = function(character) {
        var result = false;
        this.letters.forEach(item => result = result | item.check(character));
        return result;
    }
}

Word.prototype.toString = function() {
    return this.letters.map(item => item.toString()).join(' ');
}

module.exports = Word;