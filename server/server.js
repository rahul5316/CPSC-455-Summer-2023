const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require("dotenv").config()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Replace username, password, and dbname with your actual MongoDB credentials
const mongoDBConnectionString = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.r8nnfsp.mongodb.net/?retryWrites=true&w=majority';

// MongoDB connection
mongoose.connect(mongoDBConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageURL: String,
  manufacturer: String,
});

const Item = mongoose.model('Item', itemSchema);
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Rest of your endpoints...

app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find({});
    res.send(items);
  } catch (error) {
    console.error('Error retrieving items:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.post('/api/items', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.send(savedItem);
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.put('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  Item.findByIdAndUpdate(itemId, updatedItem, { new: true }, (err, item) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(item);
    }
  });
});

app.delete('/api/items/:id', async (req, res) => {
  try {
    const itemId = req.params.id;
    const deletedItem = await Item.findByIdAndRemove(itemId);
    res.send(deletedItem);
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('*', (req, res) => {
  res.sendFile('/Users/rahul/Desktop/CPSC-455-Summer-2023/client/index.html');
});

const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`Server is running on port ${port}`));

