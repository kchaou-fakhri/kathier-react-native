import {combineReducers} from 'redux';
import {ComponentsState, ProgressState} from './state';
import {reducerPorgress} from '../useCases/reducer';

export const reducerProgress = combineReducers<ComponentsState>({
  porgressState: reducerPorgress,
});
