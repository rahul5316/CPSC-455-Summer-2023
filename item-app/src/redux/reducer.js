import { ADD_ITEM, REMOVE_ITEM, SELECT_ITEM, SET_SEARCH_QUERY } from './actions';
import { CLEAR_ITEMS } from './actions';

const initialState = {
  items: [
    { id: 1, name: 'Item 1', description: 'This is item 1', price: 10, image: 'image-link-1' },
    { id: 2, name: 'Item 2', description: 'This is item 2', price: 20, image: 'image-link-2' },
    { id: 3, name: 'Item 3', description: 'This is item 3', price: 30, image: 'image-link-3' },
    // add more items as needed
  ],
  selectedItem: null,
  searchQuery: ''
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case REMOVE_ITEM:
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    case SELECT_ITEM:
      return { ...state, selectedItem: state.items.find(item => item.id === action.payload) };
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
      case CLEAR_ITEMS:
        return { ...state, items: [] };
  
    default:
      return state;
  }
};

export default reducer;
