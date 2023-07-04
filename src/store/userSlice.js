import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    removeUser: (state, action) => {
      // for delete particular one user we can use any method from below
      // state.pop(action.payload);
      state.splice(action.payload, 1);
    },
    removeAllusers: (state, action) => {
      return [];
    }
  }
});

export const { addUser, removeUser, removeAllusers } = userSlice.actions;

export default userSlice.reducer;
