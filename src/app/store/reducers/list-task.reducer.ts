import { createReducer, on } from '@ngrx/store';
import { InitialStateListTask } from '../models';
import {
  getDataTask,
  setChangeSection,
  setDataTask,
} from '../actions/list-task.action';
import { uid } from 'uid';
import { saveDataStorage } from '../../shared/middleware/store-data.middleware';
import { Task } from '../../pages/new-task/models';

export const initialStateCartShop: InitialStateListTask = {
  dataTaskRef: [],
  dataTask: [],
  sectionSelected: 1, // 1. All, 2. To Do, 3. Done
};

export const listTaskReducer = createReducer(
  initialStateCartShop,
  on(getDataTask, (state, { data }) => {
    return {
      ...state,
      dataTaskRef: data,
      dataTask: data,
    };
  }),

  on(setDataTask, (state, { data }) => {
    const dataRef = { ...data, id: uid(), status: 1 };
    const newDataTask = [...state.dataTask, dataRef];

    saveDataStorage('tasks', newDataTask);

    return {
      ...state,
      dataTaskRef: newDataTask,
    };
  }),
  on(setChangeSection, (state, { id }) => {
    let dataRef: Task[] = [];

    if (id === 1) {
      dataRef = [...state.dataTaskRef];
    } else {
      dataRef = [...state.dataTaskRef].filter((item) => item.status === id);
    }

    return {
      ...state,
      dataTask: dataRef,
      sectionSelected: id,
    };
  })
);
