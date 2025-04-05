import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [thunk],
});

export default store;
