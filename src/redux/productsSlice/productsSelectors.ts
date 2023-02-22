// interface ISelectAllProducts {
//   products: SliceState;
// }

import { SliceState } from './productsState';
import { IProductItem } from 'types/types';
import { createSelector } from '@reduxjs/toolkit';

const selectAllProducts = (state: { products: SliceState }) =>
  state.products.products;

const selectAllDepartments = (state: { products: SliceState }) => {
  return state.products.products
    .flatMap(product => product.department)
    .filter((item, index, arr) => arr.indexOf(item) === index);
};

const selectNewArrives = createSelector([selectAllProducts], products => {
  const sortedArr = [...products].sort(
    (a: IProductItem, b: IProductItem) =>
      Date.parse(b.createdAt) - Date.parse(a.createdAt)
  );
  return sortedArr;
});

const selectByDepartment = (department: string) =>
  createSelector([selectAllProducts], products =>
    products.filter(product => product.department === department)
  );

export {
  selectAllProducts,
  selectNewArrives,
  selectByDepartment,
  selectAllDepartments,
};
