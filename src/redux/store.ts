import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './productsSlice/productsSlice';
import { filtersReducer } from './productsFilterSlice/productsFilterSlice';

const rootReducer = combineReducers({
  products: productsReducer,
  filters: filtersReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
