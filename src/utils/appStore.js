import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userDataReducer from "./userDataSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    allUser: userDataReducer,
  },
});

export default appStore;