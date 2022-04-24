import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';


const initialState = {
  quests: [],
  isDataLoaded: false,
};

export const questsData = createSlice({
  name: NameSpace.QuestsData,
  initialState,
  reducers: {
    loadQuests: (state, action) => {
      state.quests = action.payload;
      state.isDataLoaded = true;
    },
  },
});

export const {loadQuests} = questsData.actions;
