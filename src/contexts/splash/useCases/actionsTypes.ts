import {Progress} from '@modules/progress';

const PROGRESS_START = 'PROGRESS_START';

const PROGRESS_END = 'PROGRESS_END';

export interface ProgressStartAction {
  type: typeof PROGRESS_START;
  payload: Progress;
}

export interface ProgressEndAction {
  type: typeof PROGRESS_END;
}

export {PROGRESS_END, PROGRESS_START};

export type ProgressActiontypes = ProgressStartAction | ProgressEndAction;
