import { ADD_ITEM, REMOVE_ITEM, SELECT_ITEM, SET_SEARCH_QUERY, UPDATE_ITEM } from './actions';
import { CLEAR_ITEMS } from './actions';
const reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case REMOVE_ITEM:
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    case SELECT_ITEM:
      return { ...state, selectedItem: state.items.find(item => item.id === action.payload) };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map(item => item.id === action.payload.id ? action.payload : item),
        selectedItem: action.payload.id === state.selectedItem.id ? action.payload : state.selectedItem
      };
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case CLEAR_ITEMS:
      return { ...state, items: [] };
    default:
      return state;
  }
};

export default reducer;
