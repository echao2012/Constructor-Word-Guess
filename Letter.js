var Letter = function(value) {
    this.value = value;
    this.guessed = false;
    
    this.check = function(letterGuess) {
        if(letterGuess.toLowerCase() === this.value.toLowerCase()) {
            this.guessed = true;
            return true;
        } else {
            return false;
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