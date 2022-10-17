const fs = require('fs');
const path = require('path');

function newNotes(body, notesArray){
    const note = body;
    notesArray.ppush(note);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return note
};

module.exports = newNotes;