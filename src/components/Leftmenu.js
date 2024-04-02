import React from 'react' 
import { useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Leftmenu(props) {

  const Navigate = useNavigate();
    const user = useSelector(store => store.user);
  return (
    <nav className="bg-gray-200 h-screen w-48 p-4 fixed top-0 left-0">
      <ul>
        <li className="mb-2 font-bold">Hi, {user?.name}</li>
        <li className="mb-2">
          <Link to="/dashboard" className="block text-gray-700 font-semibold">
            Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/users" className="block text-gray-700 font-semibold">
            Users
          </Link>
        </li>
        <li className="mb-2">
          <a href="#" className="block text-gray-700 font-semibold">
            Settings
          </a>
        </li>
        <li>
          <a href="#" className="block text-gray-700 font-semibold">
            Reports
          </a>
        </li>
      </ul>
    </nav>
  );
}

Leftmenu.propTypes = {}

export default Leftmenu
