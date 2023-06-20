var express = require('express');
var router = express.Router();

const initialState = {
  items: [
    { id: 1, name: 'capy1', description: 'This is item 1', price: 10, imageURL: 'https://farm4.static.flickr.com/3367/3658863090_6d8100ea2f.jpg?v=0' },
    { id: 2, name: 'capy2', description: 'This is item 2', price: 20, imageURL: 'https://i.pinimg.com/736x/c0/e4/3b/c0e43bf71079430377047daecaac3919--swimmers-worlds-largest.jpg' },
    { id: 3, name: 'capy3', description: 'This is item 3', price: 30, imageURL: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT565iw3g--MuK9rk0DvbL7l8mn0Fl50E-pO-927skg_Nl2xxemty4I_ErJGGMDLW_1js6PEZ0B15WAQg8' },
    // add more items as needed
  ],
  selectedItem: null,
  searchQuery: ''
};

router.get('/', (req, res, next) => {
  return res.send(initialState.items);
});

router.post('/', (req, res) => {
  const newItem = req.body;
  initialState.items.push(newItem);
  return res.send();
});

// DELETE request to delete an item by ID
router.delete('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = initialState.items.findIndex(item => item.id === itemId);
  if (itemIndex === -1) {
    return res.status(404).send('Item not found');
  }
  const deletedItem = initialState.items.splice(itemIndex, 1);
  return res.send(initialState.items);
});



//put

router.put('/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItemData = req.body;
  
  const itemIndex = initialState.items.findIndex(item => item.id === itemId);
  
  if (itemIndex === -1) {
    return res.status(404).send('Item not found');
  }
  
  // Update item
  initialState.items[itemIndex] = { ...initialState.items[itemIndex], ...updatedItemData };
  
  return res.send(initialState.items[itemIndex]);
});


module.exports = router;