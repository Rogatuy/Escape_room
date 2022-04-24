import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

const initialState = {
  selectedType: 'all_types'
};

export const selectedType = createSlice({
  name: NameSpace.SelectedType,
  initialState,
  reducers: {
    changeType: (state, action) => {
      state.selectedType = action.payload;
    },
  },
});

export const {changeType} = selectedType.actions;
