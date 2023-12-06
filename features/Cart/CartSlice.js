import {createSlice} from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState = {
  value: [],
};

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    AddProduct: (state, action) => {
      if (
        !(
          state.value.filter(e => e.productId === action.payload.productId)
            .length > 0
        )
      ) {
        state.value = [...state.value, action.payload];
      }
    },
    deleteProduct: (state, action) => {
      const newArray = state.value.filter(function (item) {
        return item.productId !== action.payload.productId;
      });
      state.value = newArray;
    },
    changeCount: (state, action) => {
      const newArray = state.value.map(prod => {
        if (prod.productId === action.payload.productId) {
          return {...prod, count: action.payload.count};
        }
        return prod;
      });
      state.value = newArray;
    },
  },
});

// Action creators are generated for each case reducer function
export const {AddProduct, deleteProduct, changeCount} = CartSlice.actions;

export default CartSlice.reducer;

// if (auth().currentUser) {
//   const newList = shoppingList.map(obj => {
//     if (obj.productId === item.productId) {
//       return {...obj, count: Number.parseInt(Count)};
//     }
//     return obj;
//   });
