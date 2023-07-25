

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// Define the schema for items
var itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  img: String,
  SKU: String,
  manufacturer: String,
});

// Compile the schema into a model
var Item = mongoose.model('Item', itemSchema);

// Get all items
router.get('/', function(req, res, next) {
  Item.find({}, function(err, items) {
    if (err) return res.status(500).send(err);
    res.send(items);
  });
});

// Add a new item
router.post('/', function(req, res, next) {
  var item = new Item(req.body);
  item.save(function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Delete an item
router.delete('/:id', function(req, res, next) {
  Item.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// Update an item
router.put('/:id', function(req, res, next) {
  Item.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
