import React from 'react'
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/Register/Register';
import SignIn from '../pages/SignIn/SignIn';
import PrivateRoute from './PrivateRoute';
import Cassignments from '../pages/Assignments/Cassignments';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2 className="text-white bg-red-700">Route Not Found</h2>,
      children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'assignment',
        element:<PrivateRoute><Cassignments></Cassignments></PrivateRoute>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'signIn',
        element:<SignIn></SignIn>
      }
      ]
    },
  ]);

export default router
