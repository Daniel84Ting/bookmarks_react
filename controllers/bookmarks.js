const express = require('express');
const router = express.Router();
const Bookmark = require('../models/bookmarks');

router.post('/', (req, res) => {
  Bookmark.create(req.body, (err, createBookmark) => {
    res.json(createBookmark);
  });
});

router.get('/', (req, res) => {
  Bookmark.find({}, (err, foundBookmark) => {
    res.json(foundBookmark);
  });
});

router.put('/:id', (req, res) => {
  Bookmark.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedBookmark) => {
      res.json(updatedBookmark);
    },
  );
});

router.delete('/:id', (req, res) => {
  Bookmark.findByIdAndRemove(req.params.id, (err, deletedBookmark) => {
    res.json(deletedBookmark);
  });
});

module.exports = router;
