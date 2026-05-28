const express = require('express');

const {
    createNote,
    getNotes,
    getSingleNote,
    updateNote,
    deleteNote
} = require('../controllers/notesController');

const validateNote = require('../middleware/validateNote');

const router = express.Router();


// Create Note
router.post('/', validateNote, createNote);


// Get All Notes
router.get('/', getNotes);


// Get Single Note
router.get('/:id', getSingleNote);


// Update Note
router.put('/:id', validateNote, updateNote);


// Delete Note
router.delete('/:id', deleteNote);

module.exports = router;