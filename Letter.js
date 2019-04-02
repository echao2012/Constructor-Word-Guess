var Letter = function(value) {
    this.value = value;

    // Show spaces
    if (value === " ") {
        this.guessed = true;
    } else {
        this.guessed = false;
    }
    
    this.check = function(letterGuess) {
        // Check if the guessed letter matches this letter
        if(letterGuess.toLowerCase() === this.value.toLowerCase()) {
            this.guessed = true;
            return true;
        } else {
            return false;
        }
    }
}

Letter.prototype.toString = function() {
    // Show letter if guessed, otherwise show an underscore
    if(this.guessed) {
        return this.value
    } else {
        return "_"
    }
}

module.exports = Letter;