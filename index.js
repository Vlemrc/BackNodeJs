// OK

// init server express
const express = require('express');
const app = express();
const port = 3000;
const pkmRouter = require('./routes/pkmRouter');
const authRouter = require('./routes/authRouter');

// init server
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// listen server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lemrciervictor:okAyyUOOzleIDiAF@cluster0.zktbbuw.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected')) // if all is ok we will be here
    .catch(err => console.log(err + 'Could not connect to MongoDB ')); // we will not be here...

// use cors

const cors = require('cors');
app.use(cors());

// use body-parser

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//router 
app.use('/pkm', pkmRouter);
app.use('/auth', authRouter);