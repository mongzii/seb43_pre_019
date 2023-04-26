import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: {
    id: null,
    password: null,
    userInfo: null,
    isLogin: false,
    emailPass: null,
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setEmailForPass: (state, action) => {
      state.emailPass = action.payload;
    },
  },
});

export default loginSlice;
export const { setId, setPassword, setUserInfo, setIsLogin, setEmailPass } =
  loginSlice.actions;

//   const data = createSlice({
//     name: 'data',
//     initialState: [],
//     reducers: {
//       // 상태 변경하는 함수를 적는다. -> actions  .. addData(3) action = { payload : 3 }
//       // 액션 함수를 작성할 때는 첫번째 인자에 이전 상태가 들어간다. 두번째 인자에는 호출 시에 넘겨받은 값이 payload에 들어간다.
//       addData(state, action) {
//         // return 하는 값으로 상태가 변한다.
//         return [...state, action.payload]; // 이전상태를 풀어주고, 호출할 때 입력으로 받은 걸 마지막에 추가
//       },
//       deleteData(state, action) {
//         return state.filter(a => a.id !== action.payload);
//       },
//     },
//   });
