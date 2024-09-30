import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { InitialStateErrorMessage, InitialStateListTask } from '../models';

// const selectLoadingComponent = (state: AppState) => state.loading;

// export const selectLoading = createSelector(
//   selectLoadingComponent,
//   (state: InitialStateLoadinComponent) => state
// );

// Error Message

const selectDataErrorMessage = (state: AppState) => state.errorMessagee;

export const selectErrorMessage = createSelector(
  selectDataErrorMessage,
  (state: InitialStateErrorMessage) => state
);

// List tasks

const selectListTaskComponent = (state: AppState) => state.list_task;

export const selectListTask = createSelector(
  selectListTaskComponent,
  (state: InitialStateListTask) => state
);
