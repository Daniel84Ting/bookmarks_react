const mongoose = require('mongoose');

const bookmarksSchema = new mongoose.Schema({
  title: String,
  url: String,
});

const Bookmarks = mongoose.model('Bookmark', bookmarksSchema);

module.exports = Bookmarks;
