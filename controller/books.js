const router = require('express').Router();
const db = require('../models');

// GET /books/seed
router.get('/seed', (req, res) => {
    db.Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }));
});

// GET /books
router.get('/', (req, res, next) => {
    db.Book.find()
        .then( books => res.status(200).json(books) )
        .catch( err => res.status(404).json({ message: `Error 404: Not Found, Error Message: ${err}` }) );
});

// GET /books/:id
router.get('/:id', (req, res, next) => {
    db.Book.findById(req.params.id)
        .then( book => res.status(200).json(book) )
        .catch( err => res.status(404).json({ message: `Error 404: Not Found, Error Message: ${err}` }) );
});

// POST /books
router.post('/', (req, res, next) => {
    db.Book.create(req.body)
        .then( () => res.status(201).json({ message: 'Book created successfully!' }))
        .catch( err => res.status(400).json({ message: `Error 400: Bad Request, Error Message: ${err}` }) );
});

// PUT /books/:id
router.put('/:id', (req, res, next) => {
    db.Book.findByIdAndUpdate(req.params.id, req.body)
        .then( () => res.status(200).json({ message: 'Book updated successfully!' }) )
        .catch( err => res.status(400).json({ message: `Error 400: Bad Request, Error Message: ${err}` }) );
});

// DELETE /books/:id
router.delete('/:id', (req, res, next) => {
    db.Book.findByIdAndDelete(req.params.id)
    .then( () => res.status(200).json({ message: 'Book deleted successfully!' }) )
    .catch( err => res.status(400).json({ message: `Error 400: Bad Request, Error Message: ${err}` }) );
});

module.exports = router;