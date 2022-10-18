const router = require('express').Router();
const db = require('../models');

// GET /books
router.get('/', (req, res, next) => {
    db.Book.find()
        .then( books => res.status(200).json(books) )
        .catch( err => res.status(404).json({ message: `Error 404: Page Not Found\nError Message:\n${err}` }) );
});

// GET /books/:id
router.get('/:id', (req, res, next) => {
    db.Book.findById(req.params.id)
        .then( book => res.status(200).json(book) )
        .catch( err => res.status(404).json({ message: `Error 404: Page Not Found\nError Message:\n${err}` }) );
});

// POST /books
router.post('/', (req, res, next) => {
    db.Book.create(req.body)
        .then( () => res.status(201).json({ message: 'Book created successfully!' }))
        .catch( err => res.status(400).json({ message: `Error 400: Bad Request\nError Message:\n${err}` }) );
});

// PUT /books/:id
router.put('/:id', (req, res, next) => {
    db.Book.findByIdAndUpdate(req.params.id, req.body)
        .then( () => res.status(200).json({ message: 'Book updated successfully!' }) )
        .catch( err => res.status(400).json({ message: `Error 400: Bad Request\nError Message:\n${err}` }) );
});

// DELETE /books/:id
router.delete('/:id', (req, res, next) => {
    db.Book.findByIdAndDelete(req.params.id)
    .then( () => res.status(200).json({ message: 'Book deleted successfully!' }) )
    .catch( err => res.status(400).json({ message: `Error 400: Bad Request\nError Message:\n${err}` }) );
});

module.exports = router;