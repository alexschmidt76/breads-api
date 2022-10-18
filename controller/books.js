const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res, next) => {
    db.Book.find()
        .then( books => res.status(200).json(books) )
        .catch( err => {
            console.log('err', err);
            res.status(404).json({ message: 'error404' });
          });
});

router.get('/:id', (req, res, next) => {
    db.Book.findById(req.params.id)
        .then( book => res.status(200).json(book) )
        .catch( err => {
            console.log('err', err);
            res.status(404).json({ message: 'error404' });
          });
});

router.post('/', (req, res, next) => {
    db.Book.create(req.body)
        .then( () => res.status(201).json({
                message: 'Book created successfully!'
        }))
        .catch( err => {
            console.log('err', err);
            res.status(404).json({ message: 'error404' });
          });
});

router.put('/:id', (req, res, next) => {
    db.Book.findByIdAndUpdate(req.params.id, req.body)
        .then( () => res.status(200).json({
            message: 'Book updated successfully!'
        }))
        .catch( err => {
            console.log('err', err);
            res.status(404).json({ message: 'error404' });
          });
});

router.delete('/:id', (req, res, next) => {
    db.Book.findByIdAndDelete(req.params.id)
    .then( () => res.status(200).json({
        message: 'Book deleted successfully!'
    }))
    .catch( err => {
        console.log('err', err);
        res.status(404).json({ message: 'error404' });
      });
})

module.exports = router;