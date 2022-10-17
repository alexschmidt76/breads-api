require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.use('/books', require('./controller/books'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('*', (req, res) => {
    res.status(404).send('ERROR 404 PAGE NOT FOUND');
});

app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);
});