import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'user',
  initialState: {
    memberSeq: 0,
    memberId: "",
    memberIntro: "",
    memberNm: "",
    memberSns: "",
    memberStatus: "",
    isLogin:false
  },

  reducers: {
        // login 성공 시
        loginUser: (state, action) => {
            // name, id에 API 값 받아오기
            state.memberSeq = action.payload.memberSeq;
            state.memberId = action.payload.memberId;
            state.memberIntro = action.payload.memberIntro;
            state.memberNm = action.payload.memberNm;
            state.memberSns = action.payload.memberSns;
            state.memberStatus = action.payload.memberStatus;
            state.isLogin = true;
            // state 변화를 알림
            return state;
        },
        // login 실패 시
        clearUser: (state) => {
            // name, id 값을 비워줌.
            state.memberSeq = 0;
            state.memberId = "";
            state.memberIntro = "";
            state.memberNm = "";
            state.memberSns = "";
            state.memberStatus = "";
            state.isLogin = false;
            // state 변화를 알림
            return state;
        }
  },
})

export const { loginUser, clearUser, loginHidden, loginDisplay } = loginSlice.actions;
export default loginSlice;