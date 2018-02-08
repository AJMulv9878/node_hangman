function Letter(letter) {
    this.letter = letter;

    this.guessed = false;

    this.show = function() {
        if (this.guessed === true) {
            return this.letter;
        }
        else {
            return "_ ";
        }
    };

    this.guess = function(guessLetter) {
        if (this.letter === guessLetter) {
            this.guessed = true;
        }
        
        this.show();
    };
};

module.exports = Letter;