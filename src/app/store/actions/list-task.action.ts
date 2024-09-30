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

export const setChangeSection = createAction(
  '[Data SetChangeSection] setChangeSection',
  props<{ id: number }>()
);

export const setChangeStatusTask = createAction(
  '[Data SetChangeStatusTask] setChangeStatusTask',
  props<{ idTask: string; statusTask: number }>()
);
