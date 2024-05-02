import React from "react";
import { useDispatch } from "react-redux";
import useRequireAuth from "../utils/hooks/useRequireAuth";
import { RxHamburgerMenu } from "react-icons/rx";
import { toggleSidebar } from "../utils/commanSlice";
import useSignOut from "../utils/hooks/useSignOut";
import { RiLogoutCircleRLine } from "react-icons/ri";
const Header = () => {
  const user = useRequireAuth();
  const dispatch = useDispatch();

  const { handleSignOut } = useSignOut(user);

  // const handleSignOut = async () => {
  //   const Authtoken = user.token;

  //   try {
  //     const response = await fetch(LOGOUT_URL, {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${Authtoken}`,
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error("Logout failed");
  //     }
  //     //dispatch(resetUserData());

  //     dispatch(removeUser(null)); // remove the user data from redux store

  //     //dispatch(emptyUser(null));

  //     Navigate("/");
  //   } catch (error) {
  //     console.error("Logout failed:", error.message);
  //   }
  // };

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar())
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center ">
      <div className="text-lg font-bold flex gap-2 items-center cursor-pointer" onClick={toggleSidebarHandler}>
        Admin Dashboard <RxHamburgerMenu />
      </div>
      <div>
        {user && (
          <button onClick={handleSignOut} className="font-bold text-white flex items-center gap-2">
            <RiLogoutCircleRLine /> Sign out
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
