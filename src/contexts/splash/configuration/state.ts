import {Progress} from '@modules/progress';

export interface ComponentsState {
  porgressState: ProgressState;
}

export interface ProgressState {
  loading: boolean;
  progress: Progress | undefined;
}
