import {combineReducers} from '@reduxjs/toolkit';
import {AppState} from './appState';
import {reducerProgress} from '@contexts/splash/configuration/rootReducers';

export const rootReducers = combineReducers<AppState>({
  componentsState: reducerProgress,
});
