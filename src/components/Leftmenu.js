import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/commanSlice";
import { Link } from "react-router-dom";
import useSignOut from "../utils/hooks/useSignOut";
const Leftmenu = (props) => {
  const user = useSelector((store) => store.user);
  const isSidebarOpen = useSelector((store) => store.commanSlice.isSidebarOpen);
  const { handleSignOut } = useSignOut(user);
  const dispatch = useDispatch();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {isSidebarOpen && (
        <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center">
              <IoMdClose
                onClick={toggleSidebarHandler}
                className="mr-3 cursor-pointer"
              />{" "}
              Hi {user?.name}
              <h1 className="font-bold text-gray-200 text-[15px] ml-3"></h1>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>
          {/* <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
            <i className="bi bi-search text-sm"></i>
            <input
              type="text"
              placeholder="Search"
              className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
            />
          </div> */}
          <Link onClick={toggleSidebarHandler} to="/dashboard">
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <FaHome />
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Home
              </span>
            </div>
          </Link>
          {/* <div className="my-4 bg-gray-600 h-[1px]"></div> */}
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            onClick={toggleDropdown}
          >
            <FaUserCircle />
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Users
              </span>
              {isDropdownOpen ? <IoIosArrowForward /> : <IoIosArrowDown />}
            </div>
          </div>
          {isDropdownOpen && (
            <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold">
              <Link onClick={toggleSidebarHandler} to="/users">
                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                  Naukri.com
                </h1>
              </Link>
              <Link onClick={toggleSidebarHandler} to="/users">
                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                  Linkedin
                </h1>
              </Link>
              <Link onClick={toggleSidebarHandler} to="/users">
                <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                  Indeed
                </h1>
              </Link>
            </div>
          )}
          <Link onClick={toggleSidebarHandler} to="/admin/job_create">
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <FaUserPlus />
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Create Jobs
              </span>
            </div>
          </Link>
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            onClick={handleSignOut}
          >
            <RiLogoutCircleRLine />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Logout
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Leftmenu;
