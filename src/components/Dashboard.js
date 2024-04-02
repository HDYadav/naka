import React from "react";
import LayoutHOC from "./LayoutHOC";

const Dashboard = () => {
  return <div className="p-8 ml-44">
  <h1>Welcome to Dashboard</h1>
  </div>;
};

export default LayoutHOC(Dashboard);
