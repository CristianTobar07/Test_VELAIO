import { createAction, props } from '@ngrx/store';
import { FormTask, Task } from '../../pages/new-task/models';

export const getDataTask = createAction(
  '[Data GetDataTask] getDataTask',
  props<{ data: Task[] }>()
);


export const setDataTask = createAction(
  '[Data SetDataTask] setDataTask',
  props<{ data: FormTask }>()
);
