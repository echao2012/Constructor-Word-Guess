var Letter = function(value) {
    this.value = value;
    this.guessed = false;
    
    this.check = function(letterGuess) {
        if(letterGuess === this.value) {
            this.guessed = true;
        }
    }
}

Letter.prototype.toString = function() {
    if(this.guessed) {
        return this.value
    } else {
        return "_"
    }
}

module.exports = Letter;