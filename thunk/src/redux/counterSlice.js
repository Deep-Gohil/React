import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 },
    decrement: state => { state.value -= 1 },
    set: (state, action) => { state.value = action.payload }
  }
});

export const fetchValue = () => async dispatch => {
  const fakeAPI = () => Promise.resolve(5);
  const data = await fakeAPI();
  dispatch(set(data));
};

export const { increment, decrement, set } = counterSlice.actions;
export default counterSlice.reducer;
