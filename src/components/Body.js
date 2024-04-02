import React from 'react'
import Login from './Login' 
import { RouterProvider, createBrowserRouter } from "react-router-dom"; 
import Dashboard from './Dashboard';
import Users from './Users';
 

const Body = () => { 

    const appRouter = createBrowserRouter([
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ]);


  return (
    <div className="bg-gray-100">
      <RouterProvider router={appRouter} />
    </div>
  );
    
}

export default Body