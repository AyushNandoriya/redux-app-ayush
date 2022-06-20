import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "users",
  initialState: {
    users: [
      {
        id: 1,
        name: "Roy",
        password: "roy@12330",
      },
      {
        id: 2,
        name: "Raj",
        password: "Raj@45612",
      },
      {
        id: 3,
        name: "Yug",
        password: "Yug@98745",
      },
      {
        id: 4,
        name: "Joy",
        password: "joy@12345",
      },
    ],
  },

  reducers: {

    addUsers: (state, action) => {
      state.users.push(action.payload);
    },

    deleteUsers: (state, action) => {
      state.users = state.users.filter(items => items.id !== action.payload)
    },

    deleteAllUsers: (state, action) => {
      state.users.length = action.payload;
    },
  },

});

export const { addUsers, deleteUsers, deleteAllUsers } = UserSlice.actions;

export default UserSlice.reducer;

export const userData = (state) => state.users.users;