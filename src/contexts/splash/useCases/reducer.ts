import {
  PROGRESS_END,
  PROGRESS_START,
  ProgressActiontypes,
} from '@contexts/splash/useCases/actionsTypes';
import {ProgressState} from '@contexts/splash/configuration/state';

const initialState: ProgressState = {
  loading: false,
  progress: undefined,
};

export const reducerPorgress = (
  state = initialState,
  action: ProgressActiontypes,
): ProgressState => {
  switch (action.type) {
    case PROGRESS_START:
      return {loading: true, progress: action.payload};
    case PROGRESS_END:
      return {loading: false, progress: undefined};
    default:
      return state;
  }
};
