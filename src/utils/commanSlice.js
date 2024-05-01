import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isSidebarOpen: true
}
const commanSlice = createSlice({
  name: "commanSlice",
  initialState: initialState,

  reducers: {
    toggleSidebar: (state, action) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
  },
});

export const { toggleSidebar } = commanSlice.actions;

export default commanSlice.reducer;
