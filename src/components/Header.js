import React from 'react';
import { LOGOUT_URL } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { emptyUser } from "../utils/userDataSlice";
import useRequireAuth from "../utils/useRequireAuth"; 

const Header = () => {

  const Navigate = useNavigate();
  const user = useRequireAuth();  
  const dispatch = useDispatch(); 
  
  const handleSignOut = async () => {
  const Authtoken = user.token; 
     
     
  try {
    const response = await fetch(LOGOUT_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Authtoken}`,  
      },
    });

    if (!response.ok) {
      throw new Error("Logout failed");
    }
    //dispatch(resetUserData());

    dispatch(removeUser(null));  // remove the user data from redux store

    //dispatch(emptyUser(null));
    
  
    
     
    Navigate("/");
  } catch (error) {
    console.error("Logout failed:", error.message);
 
  }
};


  return (
    
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center ">
      <div className="text-lg font-bold">Admin Dashboard</div>
      <div>
       
        {user && (
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign out
          </button>
        )}
      </div>
    </header>
  );
}

export default Header