import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'; 
import { LOGIN_URL } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';  
import useRedirectIfLoggedIn from '../utils/useRedirectIfLoggedIn';

const Login = () => {
  const user = useRedirectIfLoggedIn();
  const dispatch = useDispatch();  
  const Navigate = useNavigate(); 
    
    const email = useRef(null);
    const password = useRef(null);

    const [errorMessage, setErrorMessage] = useState(null);


  const handleButtomClick = async () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);
    if (message) return; // if validation failed return error

    const formData = {
      email: email.current.value,
      password: password.current.value,
    };

    try {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();  

      dispatch(addUser(data?.data));
      Navigate("/dashboard");
      
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };
 


  return (
    <div>
    
      <div className="absolute">
        <img  src="" alt="" ></img>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-3 ">
          Sign in 
        </h1>
      
        <input
          type="text"
          ref={email}
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <p className='text-red-700'>{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtomClick} > Sign in </button>
        <h1 className="p-4 cursor-pointer" >
          
        </h1>
      </form>
    </div>
  );
}

export default Login