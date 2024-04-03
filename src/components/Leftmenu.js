import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Leftmenu(props) {
  const user = useSelector((store) => store.user);
  const [isDashboardOpen, setDashboardOpen] = useState(false);
  const [isUsersOpen, setUsersOpen] = useState(false);

  const toggleDashboard = () => {
    setDashboardOpen(!isDashboardOpen);
    setUsersOpen(false); // Close Users submenu if open
  };

  const toggleUsers = () => {
    setUsersOpen(!isUsersOpen);
    setDashboardOpen(false); // Close Dashboard submenu if open
  };

  return (
    <nav className="bg-gray-200 h-screen w-48 p-4 fixed top-0 left-0">
      <ul>
        <li className="mb-2 font-bold">Hi, {user?.name}</li>
        <li className={`mb-2 ${isDashboardOpen ? "open" : ""}`}>
          <button
            onClick={toggleDashboard}
            className="block text-gray-700 font-semibold"
          >
            Dashboard
          </button>
          <ul className="submenu">
            <li>
              <Link to="/dashboard">Submenu Item 1</Link>
            </li>
            <li>
              <Link to="/dashboard">Submenu Item 2</Link>
            </li>
            {/* Add more submenu items as needed */}
          </ul>
        </li>
        <li className={`mb-2 ${isUsersOpen ? "open" : ""}`}>
          <button
            onClick={toggleUsers}
            className="block text-gray-700 font-semibold"
          >
            Users
          </button>
          <ul className="submenu">
            <li>
              <Link to="/users">Submenu Item 1</Link>
            </li>
            <li>
              <Link to="/users">Submenu Item 2</Link>
            </li>
            {/* Add more submenu items as needed */}
          </ul>
        </li>
        {/* Add more menu items as needed */}
      </ul>
    </nav>
  );
}

export default Leftmenu;
