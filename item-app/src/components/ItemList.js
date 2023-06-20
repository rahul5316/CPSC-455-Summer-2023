// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectItem, removeItem } from '../redux/actions';

// const ItemList = () => {
//   const items = useSelector(state => state.items);
//   const dispatch = useDispatch();

//   const handleSelect = id => {
//     dispatch(selectItem(id));
//   };

//   const handleRemove = id => {
//     dispatch(removeItem(id));
//   };

//   return (
//     <div className="container">
//       {items.map(item => (
//         <div key={item.id} className="item">
//           <h2 onClick={() => handleSelect(item.id)}>{item.name}</h2>
//           <img src={item.image} alt={item.name} onClick={() => handleSelect(item.id)} />
//           <button className="remove-button" onClick={() => handleRemove(item.id)}>Remove</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ItemList;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectItem, removeItem } from '../redux/actions';

const ItemList = () => {
  const items = useSelector(state => state.items);
  const searchQuery = useSelector(state => state.searchQuery);
  const dispatch = useDispatch();

  const handleSelect = id => {
    dispatch(selectItem(id));
  };

  const handleRemove = id => {
    dispatch(removeItem(id));
  };

  // Create a new array that contains only the items whose name includes the search query
  const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="container">
      {filteredItems.map(item => (
        <div key={item.id} className="item">
          <h2 onClick={() => handleSelect(item.id)}>{item.name}</h2>
          <img src={item.image} alt={item.name} onClick={() => handleSelect(item.id)} />
          <button className="remove-button" onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

