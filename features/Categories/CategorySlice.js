import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  Categories: [],
};

export const CategorieSlice = createSlice({
  name: 'Categories',
  initialState,
  reducers: {
    CreateCategories: (state, action) => {
      state.Categories = action.payload;
    },
    selectCategorie: (state, action) => {
      let newList = state.Categories.map(category => {
        if (category.title == action.payload.title) {
          category.isActive = true;
        } else {
          category.isActive = false;
        }
        return category;
      });
      state.Categories = newList;
    },
  },
});

// Action creators are generated for each case reducer function
export const {CreateCategories, selectCategorie} = CategorieSlice.actions;

export default CategorieSlice.reducer;
