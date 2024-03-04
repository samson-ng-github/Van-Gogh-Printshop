import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSearchPanelOn: false,
};

const searchPanelSlice = createSlice({
  name: 'searchPanel',
  initialState,
  reducers: {
    openSearchPanel: (state) => {
      state.isSearchPanelOn = true;
    },
    closeSearchPanel: (state) => {
      state.isSearchPanelOn = false;
    },
  },
});

export default searchPanelSlice.reducer;
export const { openSearchPanel, closeSearchPanel } = searchPanelSlice.actions;
