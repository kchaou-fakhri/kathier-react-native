import {Sowra} from '@modules/sowra';
import {AppState} from '@reduxConfig/appState';

export const loadingMetaDataSelector = (appState: AppState): boolean => {
  return appState.splashState.loadMetaDataState.loading;
};

export const metaDataSelector = (appState: AppState): Sowra[] | undefined => {
  return appState.splashState.loadMetaDataState.items;
};

export const metaDataSelectorError = (
  appState: AppState,
): string | undefined => {
  return appState.splashState.loadMetaDataState.error;
};
