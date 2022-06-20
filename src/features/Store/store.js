// import { createStore } from 'redux';
// import reducer from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '/home/tjcg/Desktop/my-app/redux-app/src/components/Users/UserSlice.js';

export default configureStore({

  reducer: {
    users: userReducer
  }
});
