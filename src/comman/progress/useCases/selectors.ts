import {Progress} from '@modules/progress';
import {AppState} from '@reduxConfig/appState';

export const progressLoadingState = (appState: AppState): boolean =>
  appState.componentsState.porgressState.loading;

export const progressState = (appState: AppState): Progress | undefined =>
  appState.componentsState.porgressState.progress;
