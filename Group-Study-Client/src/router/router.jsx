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
import Assignments from '../pages/Home/Assignments';
import UpdateAssignment from '../pages/Assignments/UpdateAssignment';
import AssignmentDetails from '../pages/AssignmentDetails/AssignmentDetails';
import AssignmentSubmission from '../pages/AssignmentSubmission/AssignmentSubmission';
import MyAssignments from '../pages/MyAssignment.jsx/MyAssignment';
import PendingAssignments from '../pages/PendingAssignments/PendingAssignments';
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
        path:'updateAssignment/:id',
        element:<PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
        loader: async ({ params }) => {
            return fetch(`http://localhost:5000/assignment/${params.id}`);
          },
      },
      {
        path:'/assignments/:id',
        element:<PrivateRoute><AssignmentDetails></AssignmentDetails></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/assignment/${params.id}`)

      },
      {
        path:'assignmentSubmission/:id',
        element:<PrivateRoute><AssignmentSubmission></AssignmentSubmission></PrivateRoute>

      },
      {
        path:'my-assignment-page',
        element:<PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>

      },
      {
        path:'pending-assignments',
        element:<PrivateRoute><PendingAssignments></PendingAssignments></PrivateRoute>

      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'signIn',
        element:<SignIn></SignIn>
      },
      {
         path:'assign',
         element:<Assignments></Assignments>
      },
      ]
    },
  ]);

export default router
