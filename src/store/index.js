import { rootReducer } from './root-reducer';
import {configureStore} from '@reduxjs/toolkit';
import {createApi} from '../services/api';

export const api = createApi();

export const store = configureStore({
  reducer: rootReducer,
});
