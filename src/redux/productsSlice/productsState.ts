import { IProductItem } from 'types/types';

export interface SliceState {
  products: IProductItem[];
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
  isError: null | object;
}

export const initialProductsState: SliceState = {
  products: [],
  isLoading: 'idle',
  isError: null,
};
