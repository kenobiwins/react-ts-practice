import { createSlice } from '@reduxjs/toolkit';
import { filtersInitialState } from './filtersState';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
  },
});

// const productsFilterSlice = createSlice({
//   name: 'filters',
//   initialState: filterInitialState,
//   reducers: {
//     setStatusFilter: (state, action) => {
//       state.status = action.payload;
//     },
//   },
// });

// export default filtersSlice;

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
