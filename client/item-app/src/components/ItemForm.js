import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addItem, selectItem, updateItem } from '../redux/actions.js';

const ItemForm = () => {
  const selectedItem = useSelector((state) => state.selectedItem);

  const [itemId, setItemId] = useState(3);
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [manufacturer, setManafacturerValue] = useState('');

  const dispatch = useDispatch();

  // useEffect to set the form data when an item is selected for editing


  useEffect(() => {
    if (selectedItem) {
      setItemId(selectedItem.id);
      setItemName(selectedItem.name);
      setDescription(selectedItem.description);
      setPrice(selectedItem.price);
      setImageURL(selectedItem.imageURL);
      setManafacturerValue(selectedItem.manufacturer);
    }
  }, [selectedItem])

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new item object
    const newItem = {
      id: itemId,
      name: itemName,
      description,
      price,
      imageURL,
      manufacturer,
    };

    // check if there is a selected item, if there is, update, otherwise create new
    if (selectedItem) {
      axios.put(`https://four55-backend-assignment.onrender.com/items/${selectedItem.id}`, newItem)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => console.error(`There was an error updating the item: ${error}`));
      // dispatch(updateItem(newItem)); 
    } else {
      axios.post('https://four55-backend-assignment.onrender.com/api/items', newItem)
        .then(response => {
          console.log(response.data);
          setItemId(itemId + 1);
        })
        .catch(error => console.error(`There was an error posting the new item: ${error}`));
      //   dispatch(addItem(newItem)); // Dispatch the action to add the item to the store
      // setItemId(itemId + 1);

    }

    // Clear form inputs
    setItemName('');
    setDescription('');
    setPrice('');
    setImageURL('');
    setManafacturerValue('');
  };

  const handleClear = () => {
    setItemName('');
    setDescription('');
    setPrice('');
    setImageURL('');
    setManafacturerValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedItem ? 'Edit Item' : 'Add Item'}</h2>
      <label>
        Item Name:
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </label>
      <label>
        Manafacturer:
        <input
          type="text"
          value={manufacturer}
          onChange={(e) => setManafacturerValue(e.target.value)}
        />
      </label>
      <button type="submit">{selectedItem ? 'Update' : 'Add'}</button>
      <button type="button" onClick={handleClear}>Clear</button>
    </form>
  );
};

export default ItemForm;



