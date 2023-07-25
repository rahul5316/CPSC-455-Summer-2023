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


