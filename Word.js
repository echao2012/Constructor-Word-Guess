var Letter = require("./Letter");

var Word = function(value) {
    this.value = value.split('').map(item => new Letter(item));

    this.guessLetter = function(character) {
        this.value.map(item => item.check(character));
    }
}

Word.prototype.toString = function() {
    return this.value.map(item => item.toString()).join(' ');
}

module.exports = Word;