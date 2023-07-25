import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, selectItem, updateItem } from '../redux/actions.js';

const ItemDetail = () => {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.selectedItem);

  // State for edited item
  const [updatedItem, setUpdatedItem] = useState({ ...selectedItem });

  const handleCloseDetail = () => {
    dispatch(selectItem(null));
  };

  const handleDeleteItem = () => {
    axios.delete(`http://localhost:5002/items/${selectedItem.id}`)
      .then(response => {
        console.log(`The item ${response.data[0].name} was deleted.`);
      })
      .catch(error => console.error(`There was an error deleting the item: ${error}`));
    handleCloseDetail();
  };

  const handleUpdateItem = () => {
    axios.put(`http://localhost:5002/items/${selectedItem.id}`, updatedItem)
      .then(response => {
        console.log(`The item was updated.`);
      })
      .catch(error => console.error(`There was an error updating the item: ${error}`));
    handleCloseDetail();
  };

  if (!selectedItem) return null;

  return (
    <div className="overlay">
      <div className="item-detail">
        <h2>Item Detail</h2>
        <form>
          <label>
            Name: 
            <input 
              type="text" 
              value={updatedItem.name} 
              onChange={(e) => setUpdatedItem({ ...updatedItem, name: e.target.value })} 
            />
          </label>
          <label>
            Description: 
            <input 
              type="text" 
              value={updatedItem.description} 
              onChange={(e) => setUpdatedItem({ ...updatedItem, description: e.target.value })} 
            />
          </label>
          <label>
            Price: 
            <input 
              type="text" 
              value={updatedItem.price} 
              onChange={(e) => setUpdatedItem({ ...updatedItem, price: e.target.value })} 
            />
          </label>
          <label>
            Image URL: 
            <input 
              type="text" 
              value={updatedItem.imageURL} 
              onChange={(e) => setUpdatedItem({ ...updatedItem, imageURL: e.target.value })} 
            />
          </label>
        </form>
        <button onClick={handleCloseDetail}>Close</button>
        <button onClick={handleDeleteItem}>Delete</button>
        <button onClick={handleUpdateItem}>Update</button>
      </div>
    </div>
  );
};

export default ItemDetail;
