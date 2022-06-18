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

    // user was not delete.
    deleteUsers: (state, action) => {
      console.log(action.payload);
        state.users.filter(item => item.id !== action.payload);
        console.log(state.users);
    },
  },

});

export const { addUsers, deleteUsers } = UserSlice.actions;

export default UserSlice.reducer;

export const userData = (state) => state.users.users;