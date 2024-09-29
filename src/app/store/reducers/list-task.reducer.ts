import { createReducer, on } from '@ngrx/store';
import { InitialStateListTask } from '../models';
import { getDataTask, setDataTask } from '../actions/list-task.action';
import { uid } from 'uid';
import { saveDataStorage } from '../../shared/middleware/store-data.middleware';

export const initialStateCartShop: InitialStateListTask = {
  dataTask: [],
};

export const listTaskReducer = createReducer(
  initialStateCartShop,
  on(getDataTask, (state, { data }) => {
    return {
      ...state,
      dataTask: data,
    };
  }),

  on(setDataTask, (state, { data }) => {
    const dataRef = { ...data, id: uid() };
    const newDataTask = [...state.dataTask, dataRef];

    saveDataStorage('tasks', newDataTask);

    return {
      ...state,
      dataTask: newDataTask,
    };
  })
);
