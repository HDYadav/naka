import React from "react";
import LayoutHOC from "./LayoutHOC";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const isSidebarOpen = useSelector((store) => store.commanSlice.isSidebarOpen);
  return (
    <div className={`p-8 ${isSidebarOpen ? "w-[calc(100%-300px)] ml-[300px]" : "w-full"}`}>
      <h1>Welcome to Dashboard</h1>
    </div>
  );
};

export default LayoutHOC(Dashboard);
