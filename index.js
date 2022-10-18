require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/books', require('./controller/books'));

app.get('/', (req, res, next) => {
    res.send('Hello World!');
});

app.get('*', (req, res, next) => {
    res.status(404).send('ERROR 404 PAGE NOT FOUND');
});

app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);
});