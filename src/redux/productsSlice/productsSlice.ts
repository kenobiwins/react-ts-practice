import { createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts } from 'services/shop.service';

interface SliceState{
    products: any[],
    isLoading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState:SliceState= {
    products: [],
    isLoading: 'idle',
} 


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{},
    extraReducers: builder => {builder.addCase(fetchAllProducts.fulfilled,(state)=>state)},
})

export const productsReducer = productsSlice.reducer;