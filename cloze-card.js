// reqiure fs 
var fs = require("fs");

module.exports = ClozeFlashcard;

// constructor for CLozeFlashcard
function ClozeFlashcard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.clozeDeleted = this.text.replace(this.cloze, '---------');
    this.create = function() {
        // obeject to be appended 
        var data = {
            text: this.text,
            cloze: this.cloze,
            clozeDeleted: this.clozeDeleted,
            type: "cloze"

        };

        // add card to log.txt
        fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(error) {
            // if there's an error this will log it 
            if (error) {
                console.log(error);
            }

        });
    };

    // end of ClozeFlashcard function 
}