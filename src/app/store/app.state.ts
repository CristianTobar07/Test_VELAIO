import { ActionReducerMap } from '@ngrx/store';

import { InitialStateErrorMessage, InitialStateListTask } from './models';
import { listTaskReducer } from './reducers/list-task.reducer';
import { errorMessageRecuder } from './reducers/error-message.reducer';

export interface AppState {
  errorMessagee: InitialStateErrorMessage;
  list_task: InitialStateListTask;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  errorMessagee: errorMessageRecuder,
  list_task: listTaskReducer,
};
