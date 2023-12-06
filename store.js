import {configureStore} from '@reduxjs/toolkit';
import CartReducer from './features/Cart/CartSlice';
import ProductSlice from './features/Products/ProductSlice';
import CategorieSlice from './features/Categories/CategorySlice';
import UserSlice from './features/User/UserSlice';
export const store = configureStore({
  reducer: {
    cart: CartReducer,
    products: ProductSlice,
    categories: CategorieSlice,
    user: UserSlice,
  },
});
