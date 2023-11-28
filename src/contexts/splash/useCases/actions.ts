import {Progress} from '@modules/progress';
import {
  PROGRESS_END,
  PROGRESS_START,
  ProgressEndAction,
  ProgressStartAction,
} from './actionsTypes';

export const progressStart = (progress: Progress): ProgressStartAction => ({
  type: PROGRESS_START,
  payload: progress,
});

export const progressEnd = (): ProgressEndAction => ({
  type: PROGRESS_END,
});
