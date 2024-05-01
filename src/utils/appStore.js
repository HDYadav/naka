import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userDataReducer from "./userDataSlice"
import commanReducer from "./commanSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    allUser: userDataReducer,
    commanSlice: commanReducer,
  },
});

export default appStore;