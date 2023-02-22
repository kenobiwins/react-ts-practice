import shopApi from 'services/shop.service';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { IProductItem } from 'types/types';

// type GetProductsResponse = {
//   data: IProductItem[];
// };
// <GetProductsResponse>
export const fetchAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (_, thunkApi) => {
    try {
      const { data } = await shopApi.get('/shop');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
