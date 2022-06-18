// import { createStore } from 'redux';
// import reducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Users/UserSlice';

export default configureStore({

  reducer: {
    users: userReducer
  }
});
