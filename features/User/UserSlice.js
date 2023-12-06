import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  User: {},
};

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.User = action.payload;
    },
    deleteUser: (state, action) => {
      state.User = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const {createUser, deleteUser} = UserSlice.actions;

export default UserSlice.reducer;
