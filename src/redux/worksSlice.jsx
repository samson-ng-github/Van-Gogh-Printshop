import { createSlice } from '@reduxjs/toolkit';
import originalData from '../data/worksData.json';

const initialState = {
  originalData: originalData,
  worksData: originalData,
  searchFilter: null,
  searchKeyword: '',
  isWorkPanelOn: false,
  workOnFocus: originalData[0],
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
    updateKeyword: (state, action) => {
      const keyword = action.payload;
      state.searchKeyword = keyword;
    },
    searchWorks: (state) => {
      state.worksData = state.originalData.filter(
        (work) =>
          work.name
            .toLocaleLowerCase()
            .match(state.searchKeyword.toLocaleLowerCase()) ||
          work.date
            .toLocaleLowerCase()
            .match(state.searchKeyword.toLocaleLowerCase()) ||
          work.location
            .toLocaleLowerCase()
            .match(state.searchKeyword.toLocaleLowerCase())
      );
      if (state.searchFilter)
        state.worksData = state.worksData.filter((work) =>
          state.searchFilter.match(work.type)
        );
    },
    filterWorks: (state, action) => {
      const type = action.payload;
      if (type === state.searchFilter) {
        state.worksData = state.originalData.sort(() => Math.random() - 0.5);
        state.searchFilter = null;
      } else {
        state.worksData = state.originalData
          .filter((work) => work.type.match(type))
          .sort(() => Math.random() - 0.5);
        state.searchFilter = type;
      }
      if (state.searchKeyword !== '')
        state.worksData = state.worksData.filter(
          (work) =>
            work.name
              .toLocaleLowerCase()
              .match(state.searchKeyword.toLocaleLowerCase()) ||
            work.date
              .toLocaleLowerCase()
              .match(state.searchKeyword.toLocaleLowerCase()) ||
            work.location
              .toLocaleLowerCase()
              .match(state.searchKeyword.toLocaleLowerCase())
        );
    },
    clearSearch: (state) => {
      state.searchFilter = null;
      state.searchKeyword = '';
      state.worksData = state.originalData;
    },
  },
});

export default worksSlice.reducer;
export const {
  shuffleWorks,
  findWorkOnFocus,
  openWorkPanel,
  closeWorkPanel,
  updateKeyword,
  searchWorks,
  filterWorks,
  clearSearch,
} = worksSlice.actions;
