import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAllProducts } from './products.operations';
import { SliceState, initialProductsState } from './productsState';

const handlePending = (state: SliceState): void => {
  state.isLoading = 'pending';
  state.isError = null;
};

const handleReject = (state: SliceState, { payload }: any) => {
  state.isLoading = 'failed';
  state.isError = payload;
};

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, { payload }) => {
        state.isLoading = 'succeeded';
        state.isError = null;
        state.products = payload;
      })
      .addMatcher(isAnyOf(fetchAllProducts.pending), handlePending)
      .addMatcher(isAnyOf(fetchAllProducts.rejected), handleReject);
  },
});

export const productsReducer = productsSlice.reducer;
