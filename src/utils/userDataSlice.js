import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
      allUser: null,
      emptyUser:null,
  },
  reducers: {
    addAllUserData: (state, action) => {
      state.allUser = action.payload;
    },
    emptyAllUserData: (state, action) => {
      state.emptyUser = null;
    },
  },
});


export const { addAllUserData, emptyUser } = userDataSlice.actions;

export default userDataSlice.reducer;