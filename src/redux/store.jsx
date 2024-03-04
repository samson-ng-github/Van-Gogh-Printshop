import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import searchPanelReducer from './searchPanelSlice';
import workPanelReducer from './workPanelSlice';

const store = configureStore({
  reducer: {
    cartPanel: cartReducer,
    searchPanel: searchPanelReducer,
    workPanel: workPanelReducer,
  },
});

export default store;
