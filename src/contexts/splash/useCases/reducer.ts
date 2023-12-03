import {
  LOAD_METADATA,
  LOAD_METADATA_FAILED,
  LOAD_METADATA_SUCCESS,
  LoadMetaDataActionTypes,
} from '@contexts/splash/useCases/actions';
import {LoadMetaDataState} from '@contexts/splash/configuration/state';

const initialState: LoadMetaDataState = {
  loading: false,
  items: undefined,
  error: undefined,
};
export const reducerLoadMetaData = (
  state = initialState,
  action: LoadMetaDataActionTypes,
): LoadMetaDataState => {
  switch (action.type) {
    case LOAD_METADATA:
      return {loading: true, items: undefined, error: undefined};

    case LOAD_METADATA_SUCCESS:
      return {loading: false, items: action.payload, error: undefined};

    case LOAD_METADATA_FAILED:
      return {loading: false, items: undefined, error: action.payload};

    default:
      return state;
  }
};
