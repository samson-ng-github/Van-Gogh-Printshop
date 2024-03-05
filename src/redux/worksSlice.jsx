import { createSlice } from '@reduxjs/toolkit';
import worksData from '../data/worksData.json';

const initialState = {
  worksData: worksData,
  isWorkPanelOn: false,
  workOnFocus: worksData[0],
};

const worksSlice = createSlice({
  name: 'works',
  initialState,
  reducers: {
    shuffleWorks: (state) => {
      state.worksData.sort(() => Math.random() - 0.5);
    },
    findWorkOnFocus: (state, action) => {
      const id = action.payload;
      state.workOnFocus = state.worksData.find((work) => work.id === id);
    },
    openWorkPanel: (state) => {
      state.isWorkPanelOn = true;
    },
    closeWorkPanel: (state) => {
      state.isWorkPanelOn = false;
    },
  },
});

export default worksSlice.reducer;
export const { shuffleWorks, findWorkOnFocus, openWorkPanel, closeWorkPanel } =
  worksSlice.actions;
