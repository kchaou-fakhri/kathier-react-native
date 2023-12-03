import {combineReducers} from 'redux';
import {SplashState} from './state';
import {reducerLoadMetaData} from '../useCases/reducer';

export const reducerSplash = combineReducers<SplashState>({
  loadMetaDataState: reducerLoadMetaData,
});
