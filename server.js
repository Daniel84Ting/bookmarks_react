const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
require('dotenv').config();

/// Environment Variables ///
const mongoURI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

/// Controller ///
const bookmarksController = require('./controllers/bookmarks');

/// ... other imports ///
const path = require('path');

/// Connect to Mongo ///
mongoose.connect(mongoURI, { useNewUrlParser: true }, () =>
  console.log('MongoDB connection established'),
);

/// Error ///
db.on('error', (err) => console.log(err.message + 'is Mongod not running?'));
db.on('disconnected', () => console.log('mongo disconnected'));

/// Middleware ///
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/bookmarks', bookmarksController);
app.get('/', (req, res) => {
  res.status(404).json('Sorry, page not found');
});

// app.use('/bookmarks', (req, res) => {
//   res.send('try it work');
// });

app.listen(PORT, () => {
  console.log('app listening on port ', PORT);
});
