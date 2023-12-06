import {createSlice} from '@reduxjs/toolkit';
import {act} from 'react-test-renderer';

const initialState = {
  Products: [],
};

export const ProductSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    CreateProducts: (state, action) => {
      state.Products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {CreateProducts} = ProductSlice.actions;

export default ProductSlice.reducer;
