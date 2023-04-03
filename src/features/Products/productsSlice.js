import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import http from './../../apiConfig';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async ({ token }, thunkAPI) => {
    try {
      const response = await http.get('/products');
      if (response.status === 200) {
        return [...response.data ];
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const productsSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, { payload }) => {
      console.log('payload', payload);
      state.isFetching = false;
      state.isSuccess = true;
      state.products = payload;
    },
    [getProducts.pending]: (state) => {
      state.isFetching = true;
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    },
  },
});

export const { clearState } = productsSlice.actions;

export const productsSelector = (state) => state.products;
