import { ActionReducerMap } from '@ngrx/store';

import { InitialStateListTask } from './models';
import { listTaskReducer } from './reducers/list-task.reducer';

export interface AppState {
  list_task: InitialStateListTask;
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  list_task: listTaskReducer,
};
