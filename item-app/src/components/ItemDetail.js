import React from 'react';
import { useSelector } from 'react-redux';

const ItemDetail = () => {
  const selectedItem = useSelector(state => state.selectedItem);
  
  if (!selectedItem) return null;

  return (
    <div>
      <h2>{selectedItem.name}</h2>
      <p>{selectedItem.description}</p>
      <p>${selectedItem.price}</p>
    </div>
  );
};

export default ItemDetail;
