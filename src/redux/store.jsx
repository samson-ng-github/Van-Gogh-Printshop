import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import searchPanelReducer from './searchPanelSlice';
import workPanelReducer from './worksSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    searchPanel: searchPanelReducer,
    works: workPanelReducer,
  },
});

export default store;
