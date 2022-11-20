const notes = require("express").Router();
const {
  readFromFile,
  writeToFile,
  readAndAppend,
} = require("../helpers/fsUtils");
const uuid = require("uniqid");
const fs = require("fs");

notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

notes.post("/", (req, res) => {
  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json(newNote);
  } else {
    res.errored("Error adding new note");
  }
});

notes.delete("/:id", (req, res) => {
  const { id } = req.params;
  const savedData = fs.readFileSync("./db/db.json");
  const savedNotes = JSON.parse(savedData);
  const filteredData = savedNotes.filter((data) => data.id !== req.params.id);

  writeToFile("./db/db.json", filteredData);
  res.json(filteredData);
});

module.exports = notes;
