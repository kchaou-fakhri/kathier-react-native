import {Sowra} from '@modules/sowra';

export interface SplashState {
  loadMetaDataState: LoadMetaDataState;
}

export interface LoadMetaDataState {
  loading: boolean;
  items: Sowra[] | undefined;
  error: string | undefined;
}
