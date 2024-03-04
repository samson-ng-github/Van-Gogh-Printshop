import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isWorkPanelOn: false,
};

const workPanelSlice = createSlice({
  name: 'workPanel',
  initialState,
  reducers: {
    openWorkPanel: (state) => {
      state.isWorkPanelOn = true;
    },
    closeWorkPanel: (state) => {
      state.isWorkPanelOn = false;
    },
  },
});

export default workPanelSlice.reducer;
export const { openWorkPanel, closeWorkPanel } = workPanelSlice.actions;
