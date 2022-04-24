import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../store';
import {store} from '../store';
import {APIRoute} from '../const';
import { errorHandle } from '../services/error-handle';
import { loadQuests } from './quests-data/quests-data';
import { loadQuestFull } from './quest-full-data/quest-full-data';
import { toggleLoaderQuestFull } from './quest-full-data/quest-full-data';

export const fetchQuestsAction = createAsyncThunk(
  'data/fetchQuests',
  async () => {
    try {
      const {data} = await api.get(APIRoute.Quests);
      store.dispatch(loadQuests(data));
    } catch(error) {
      errorHandle(error);
    }
  },
);

export const fetchFullQuestAction = createAsyncThunk(
  'data/fetchFullQuest',
  async (id) => {
    try {
      const {data} = await api.get(`${APIRoute.Quests}/${id}`);
      store.dispatch(loadQuestFull(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(toggleLoaderQuestFull(true));
    }
  },
);
