import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/actions';
import {clearItems } from '../redux/actions';

const ItemForm = () => {
  const [item, setItem] = useState({ name: '', description: '', price: '', image: '' });
  const dispatch = useDispatch();

  const handleChange = e => {
    // setItem({ ...item, [e.target.name]: e.target.value });
    if (e.target.name === 'price' && isNaN(e.target.value)) {
      alert('Price must be a numeric value');
      return;
    }

    setItem({ ...item, [e.target.name]: e.target.value });
  };
  const handleClear = () => {
    dispatch(clearItems());
  };
  

  const handleSubmit = e => {
    e.preventDefault();
    
    // Check if name and price are not empty
    if (item.name.trim() === '' || item.price.trim() === '') {
      alert('Name and price are required');
      return;
    }

    dispatch(addItem({ ...item, id: Date.now() }));
    setItem({ name: '', description: '', price: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name='name' value={item.name} onChange={handleChange} placeholder='Name' required />
      <input name='description' value={item.description} onChange={handleChange} placeholder='Description' />
      <input name='price' value={item.price} onChange={handleChange} placeholder='Price' required />
      <input name='image' value={item.image} onChange={handleChange} placeholder='Image' />
      <button type='submit'>Add Item</button>
      <button type='button' onClick={handleClear}>Clear Items</button>
      {/* <button type='reset' onClick={() => setItem({ name: '', description: '', price: '', image: '' })}>Clear</button> */}
    </form>
  );
};

export default ItemForm;
