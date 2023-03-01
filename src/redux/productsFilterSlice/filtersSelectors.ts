import { createSelector } from '@reduxjs/toolkit';
import { FilterInitialState } from './filtersState';
import { selectAllProducts } from 'redux/productsSlice/productsSelectors';

const selectFilterStatus = (state: { filters: FilterInitialState }) =>
  state.filters.status;

const selectVisibleProducts = createSelector(
  [selectAllProducts, selectFilterStatus],
  (products, statusFilter) => {
    if (statusFilter === 'all') {
      return products;
    } else {
      return products.filter(product => product.department === statusFilter);
    }
  }
);

export { selectFilterStatus, selectVisibleProducts };
