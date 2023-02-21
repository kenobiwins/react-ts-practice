// https://63f507812213ed989c4f71e9.mockapi.io/ base url
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const shopApi = axios.create({
    baseURL:'https://63f507812213ed989c4f71e9.mockapi.io'
})
console.log(shopApi);

export const fetchAllProducts = createAsyncThunk('products/getAllProducts', async (_, thunkApi) => {
    try {
        const { data }:any = shopApi.get('/shop')
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})