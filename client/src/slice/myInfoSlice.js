import { createSlice } from '@reduxjs/toolkit';

const myInfoSlice = createSlice({
  name: 'myInfoSlice',
  initialState: {
    // image: null,
    displayName: null,
    title: null,
    question: null,
    myInfo: null,
  },
  reducers: {
    // setImg: (state, action) => {
    //   state.image = action.payload;
    // },
    setDisplayName: (state, action) => {
      state.displayName = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setQuestion: (state, action) => {
      state.aboutMe = action.payload;
    },
    setMyInfo: (state, action) => {
      state.myInfo = action.payload;
    },
  },
});

export default myInfoSlice;
export const { setDisplayName, setTitle, setQuestion, setMyInfo } = myInfoSlice.actions;
