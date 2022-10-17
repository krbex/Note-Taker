const router = require('express').Router();
const uniqid = require('uniqid');
const newNotes = require('../../functions');
const { notesArray } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notesArray;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notesArray.length.toString();
    const note = newNotes(req.body, notesArray);
    res.json(note);
});

module.exports = router;