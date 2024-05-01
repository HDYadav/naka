import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



// const checkTokenExpiry = (token) => {
//   if (!token) return true; // If token doesn't exist, consider it expired
//   const tokenData = JSON.parse(atob(token.split(".")[1]));
//   const currentTime = Date.now() / 1000;
//   return tokenData.exp < currentTime; // Check if token has expired
// };




const useRequireAuth = () => {
  const user = useSelector((state) => state.user);
  const Navigate = useNavigate(); 


  useEffect(() => {

    //   const tokenExpired = checkTokenExpiry(user.token);

    // console.log(tokenExpired);
    
    if (!user) {
      Navigate("/");
    }
  }, [user, Navigate]);

  return user;
};

export default useRequireAuth;
