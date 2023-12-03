import {Sowra} from '@modules/sowra';

export const LOAD_METADATA = 'LOAD_METADATA';
export const LOAD_METADATA_SUCCESS = 'LOAD_METADATA_SUCCESS';
export const LOAD_METADATA_FAILED = 'LOAD_METADATA_FAILED';

export interface LoadMetaDataAction {
  type: typeof LOAD_METADATA;
  payload: boolean;
}

export interface LoadMetaDataSuccessAction {
  type: typeof LOAD_METADATA_SUCCESS;
  payload: Sowra[];
}

export interface LoadMetaDataFailedAction {
  type: typeof LOAD_METADATA_FAILED;
  payload: string;
}

export type LoadMetaDataActionTypes =
  | LoadMetaDataAction
  | LoadMetaDataSuccessAction
  | LoadMetaDataFailedAction;
