import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook-reducer.js';

const store = configureStore({
  reducer: phonebookReducer,
  // работает только в режиме разбработки
  // devTools: process.env.NODE_ENV === 'development',
});

export default store;
