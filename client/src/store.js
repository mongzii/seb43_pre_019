import { configureStore, createSlice } from '@reduxjs/toolkit';

const namewrite = createSlice({
  // state하나를 slice라고 부름.
  name: 'namewrite',
  initialState: 'moon',
});

const emailwrite = createSlice({
  // state하나를 slice라고 부름.
  name: 'emailwrite',
  initialState: 'abc@naver.com',
});

const passwordwrite = createSlice({
  // state하나를 slice라고 부름.
  name: 'passwordwrite',
  initialState: '12345',
});

const info = createSlice({
  // state하나를 slice라고 부름.
  name: 'info',
  initialState: [
    { idpart: 0, namepart: 'ddddd', emailpart: 'addd@gmail.com', pwpart: '1' },
    { idpart: 1, namepart: 'dd', emailpart: 'ad@gmail.com', pwpart: '1' },
  ],
});

export default configureStore({
  reducer: {
    namewrite: namewrite.reducer,
    emailwrite: emailwrite.reducer,
    passwordwrite: passwordwrite.reducer,
    info: info.reducer,
  },
});
