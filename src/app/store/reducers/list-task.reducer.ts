import { createReducer, on } from '@ngrx/store';
import { InitialStateListTask } from '../models';
import { getDataTask } from '../actions/list-task';
export const initialStateCartShop: InitialStateListTask = {
  loading: false,
};

export const listTaskReducer = createReducer(
  initialStateCartShop,

  on(getDataTask, (state, { data }) => {
    return {
      ...state,
      productsCartShop: data,
    };
  }),
);
