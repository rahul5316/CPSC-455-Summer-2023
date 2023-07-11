import axios from 'axios';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SELECT_ITEM = 'SELECT_ITEM';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const CLEAR_ITEMS = 'CLEAR_ITEMS';
export const UPDATE_ITEM = 'UPDATE_ITEM';


export const addItem = item => {
  return dispatch => {
    axios.post('/items', item)
      .then(res => {
        dispatch({
          type: ADD_ITEM,
          payload: res.data
        });
      })
      .catch(err => console.error(err));
  }
};


export const removeItem = id => {
  return dispatch => {
    axios.delete(`/items/${id}`)
      .then(res => {
        dispatch({
          type: REMOVE_ITEM,
          payload: id
        });
      })
      .catch(err => console.error(err));
  }
};


export const updateItem = item => {
  return dispatch => {
    axios.put(`/items/${item.id}`, item)
      .then(res => {
        dispatch({
          type: UPDATE_ITEM,
          payload: res.data
        });
      })
      .catch(err => console.error(err));
  }
};

export const selectItem = id => ({
  type: SELECT_ITEM,
  payload: id
});

export const setSearchQuery = query => ({
  type: SET_SEARCH_QUERY,
  payload: query
});

export const clearItems = () => ({
  type: CLEAR_ITEMS,
});
