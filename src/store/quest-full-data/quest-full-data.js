import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

const initialState = {
  questFull: {
    id: 0,
    title: '',
    description: '',
    previewImg: '',
    coverImg: '',
    type: '',
    level: '',
    peopleCount: [],
    duration: 0
  },
  isDataLoaded: false,
};

export const questFullData = createSlice({
  name: NameSpace.QuestFullData,
  initialState,
  reducers: {
    loadQuestFull: (state, action) => {
      state.questFull = action.payload;
      state.isDataLoaded = true;
    },
    toggleLoaderQuestFull: (state, {payload}) => {
      state.isDataLoaded = payload;
    },
  },
});

export const {loadQuestFull} = questFullData.actions;
export const {toggleLoaderQuestFull} = questFullData.actions;
