import { createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state) => {
      state.counter++;
    },
    decrease: (state) => {
      state.counter--;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;