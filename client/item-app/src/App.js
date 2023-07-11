// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <ItemForm />
      <ItemList />
      <ItemDetail />
    </Provider>
  );
}

export default App;


