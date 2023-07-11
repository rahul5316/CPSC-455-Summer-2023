// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { selectItem } from '/Users/rahul/Desktop/CPSC-455-Summer-2023/client/item-app/src/redux/actions.js';

// const ItemList = () => {
//   const [items, setItems] = useState([]);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     axios.get('http://localhost:5001/items')
//       .then(response => {
//         setItems(response.data);
//       })
//       .catch(error => console.error(`There was an error retrieving the items: ${error}`));
//   }, []);

//   const handleDeleteItem = (id) => {
//     axios.delete(`http://localhost:5001/items/${id}`)
//       .then(response => {
//         setItems(items.filter(item => item.id !== id)); // Updates the state
//       })
//       .catch(error => console.error(`There was an error deleting the item: ${error}`));
//   };
//     console.log("hello"+ items)
//   return (
//     <div>
//       <h2>Item List</h2>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             <img src={item.imageURL} alt={item.name} />
//             <span>{item.name}</span>
//             <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ItemList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { selectItem } from '/Users/rahul/Desktop/CPSC-455-Summer-2023/client/item-app/src/redux/actions.js';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:5001/api/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => console.error(`There was an error retrieving the items: ${error}`));
  }, []);

  const handleDeleteItem = (id) => {
    axios.delete(`http://localhost:5001/api/items/${id}`)
      .then(response => {
        setItems(items.filter(item => item.id !== id)); // Updates the state
      })
      .catch(error => console.error(`There was an error deleting the item: ${error}`));

      axios.get('http://localhost:5001/api/items')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => console.error(`There was an error retrieving the items: ${error}`));
  };


  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {Array.isArray(items) && items.map((item) => (
          <li key={item.id}>
            <img src={item.imageURL} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p>Manufacturer: {item.manufacturer}</p>
            
            <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

