import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import DashboardLayout from "../DashBoard/DashboardLayout";

import Home from "../Home/Home";

import Root from "../Root/Root";

import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import SimplePage from "../SimplePage/SimplePage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },

      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>{" "}
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <SimplePage></SimplePage>,
      },
    ],
  },
]);

export default router;
