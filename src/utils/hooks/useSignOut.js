import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../userSlice";
import { emptyUser } from "../userDataSlice";
import { LOGOUT_URL } from "../constants";
import useRequireAuth from "./useRequireAuth";

const useSignOut = () => {
  const user = useRequireAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    const authToken = user.token;

    try {
      const response = await fetch(LOGOUT_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      dispatch(removeUser(null));
      dispatch(emptyUser(null));

      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return { handleSignOut };
};

export default useSignOut;
