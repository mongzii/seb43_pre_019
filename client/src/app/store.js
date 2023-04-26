import { configureStore, createSlice } from '@reduxjs/toolkit';

import loginSlice from '../slice/loginSlice';
import signupSlice from '../slice/signupSlice';
import questionSlice from '../slice/questionSlice';
import answerSlice from '../slice/answerSlice';
import myInfoSlice from '../slice/myInfoSlice';

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    signUp: signupSlice.reducer,
    question: questionSlice.reducer,
    answer: answerSlice.reducer,
    myInfo: myInfoSlice.reducer,
  },
});

export default store;
