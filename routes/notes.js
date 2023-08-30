const notes = require('express').Router()
const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helpers/fsUtils');

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})

notes.post('/', (req,res) => {
    console.log(req.body);

    const {user_name,comment} = req.body;

    if (req.body) {
        const newNote = {
            user_name,
            comment,
            id: uuidv4(),
        };

        const parsedData = readAndAppend(newNote, './db/db.json');
        res.json(parsedData)
    } else {
        res.send('Error in adding notes');
    }
    
})
module.exports = notes