import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";

import Home from "../Home/Home";

import Root from "../Root/Root";

import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

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
]);

export default router;
