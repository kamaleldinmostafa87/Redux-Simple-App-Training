import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import authReducer from './auth'

const store = configureStore({
  reducer: {counter: counterReducer,
    value:authReducer},
});

export default store;
