import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import {
  InitialStateCartShopComponent,
  InitialStateErrorMessage,
  InitialStateLoadinComponent,
  InitialStateProductsComponent,
} from '../models';

const selectLoadingComponent = (state: AppState) => state.loading;

export const selectLoading = createSelector(
  selectLoadingComponent,
  (state: InitialStateLoadinComponent) => state
);

// Error Message

const selectDataErrorMessage = (state: AppState) => state.errorMessagee;

export const selectErrorMessage = createSelector(
  selectDataErrorMessage,
  (state: InitialStateErrorMessage) => state
);

// Products

const selectProductsComponent = (state: AppState) => state.products;

export const selecProducts = createSelector(
  selectProductsComponent,
  (state: InitialStateProductsComponent) => state
);

// Cart Shop

const selectCartShopComponent = (state: AppState) => state.cartShop;

export const selectCartShop = createSelector(
  selectCartShopComponent,
  (state: InitialStateCartShopComponent) => state
);
