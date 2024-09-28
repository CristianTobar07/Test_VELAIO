import { createAction, props } from '@ngrx/store';

export const getDataTask = createAction(
  '[Data GetDataTask] getDataTask',
  props<{ data: any[] }>()
);

