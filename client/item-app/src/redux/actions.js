export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SELECT_ITEM = 'SELECT_ITEM';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const CLEAR_ITEMS = 'CLEAR_ITEMS';
export const UPDATE_ITEM = 'UPDATE_ITEM';

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  payload: id
});

export const updateItem = item => ({
  type: UPDATE_ITEM,
  payload: item
});

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
