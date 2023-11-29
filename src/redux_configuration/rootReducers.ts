import {combineReducers} from '@reduxjs/toolkit';
import {AppState} from './appState';
import {reducerProgress} from '@comman/progress/configuration/rootReducers';

export const rootReducers = combineReducers<AppState>({
  componentsState: reducerProgress,
});
