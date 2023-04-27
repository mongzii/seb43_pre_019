import { createSlice } from '@reduxjs/toolkit';

const answerSlice = createSlice({
  name: 'answerSlice',
  initialState: {
    content: null,
    comment: null,
  },
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    },
    setComment: (state, action) => {
      state.comment = action.payload;
    },
  },
});

export default answerSlice;
export const { setContent, setComment } = answerSlice.actions;
