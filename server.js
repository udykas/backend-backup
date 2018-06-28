const express = require('express');
const helmet = require('helmet');
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();

const noteRouter = require('./notes/noteRouter');
const feport = 3000;
const beport = process.env.PORT || 5000;
const server = express()

server.use(helmet());
server.use(cors({ origin: `https://objective-curie-6dd14b.netlify.com/` }));
server.use(express.json());

server.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.use('/api/notes', noteRouter);

//Mongoose
mongoose.Promise = global.Promise;

mongoose
    .connect('mongodb://Alex:alex93@ds121321.mlab.com:21321/lamdanotesdbalexd')
    .then(mongo => {
        console.log('\n... API Connected to LambdaNotes DB ...\n')
    })
    .catch(err => {
        console.log('\n*** ERROR Connecting to Database ***\n', err);
    })

server.listen(beport, () => {
    console.log(`\n=== API up on port: ${beport} ===\n`)
})