import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { selectedType } from './selected-type/selected-type';
import { questsData } from './quests-data/quests-data';
import { questFullData } from './quest-full-data/quest-full-data';


export const rootReducer = combineReducers({
  [NameSpace.SelectedType]: selectedType.reducer,
  [NameSpace.QuestsData]: questsData.reducer,
  [NameSpace.QuestFullData]: questFullData.reducer,
});
