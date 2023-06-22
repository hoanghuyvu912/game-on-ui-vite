const { createSlice } = require("@reduxjs/toolkit");

const initialNotiState = {
  isShow: false,
  message: "",
};

const notiSlice = createSlice({
  name: "notification",
  initialState: initialNotiState,
  reducers: {
    showNoti(state, action) {
      state.isShow = true;
      state.message = action.payload.message;
    },
    closeNoti(state, action) {
      state.isShow = false;
      state.message = "";
    },
  },
});

export const notiActions = notiSlice.actions;

export default notiSlice;
