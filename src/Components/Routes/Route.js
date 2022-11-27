import { createBrowserRouter } from "react-router-dom";
import AddAProduct from "../AddAProduct/AddAProduct";
import AllBuyers from "../AllBuyers/AllBuyers";
import AllSeller from "../AllSeller/AllSeller";
import Blogs from "../Blogs/Blogs";
import BookCategory from "../BookCategory/BookCategory";
import BookCategory2 from "../BookCategory/BookCategory2";
import BookCategory3 from "../BookCategory/BookCategory3";
import DashboardLayout from "../DashBoard/DashboardLayout";

import Home from "../Home/Home";
import MyOrders from "../MyOrders.js/MyOrders";
import MyProducts from "../MyProducts/MyProducts";

import Root from "../Root/Root";

import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import SimplePage from "../SimplePage/SimplePage";
import PerCategoryPage from "../Trial/PerCategoryPage/PerCategoryPage";
import Wishlist from "../Wishlist/Wishlist";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
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
        path: "/category/:id",
        element: <PerCategoryPage></PerCategoryPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      // {
      //   path: "/category/action_and_adventure",
      //   element: <BookCategory></BookCategory>,
      //   loader: () =>
      //     fetch("http://localhost:5000/category/action_and_adventure"),
      // },
      // {
      //   path: "/category/classics",
      //   element: <BookCategory2></BookCategory2>,
      //   loader: () => fetch("http://localhost:5000/category/classics"),
      // },
      // {
      //   path: "/category/memoir",
      //   element: <BookCategory3></BookCategory3>,
      //   loader: () => fetch("http://localhost:5000/category/memoir"),
      // },

      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },

      // {
      //   path: "/myorders",
      //   element: <MyOrders></MyOrders>,
      // },

      {
        path: "/blogs",
        element: (
          <AdminRoute>
            <Blogs></Blogs>{" "}
          </AdminRoute>
        ),
      },
      // {
      //   path: "/blogs",
      //   element: <Blogs></Blogs>,
      // },
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
      {
        path: "/dashboard/allusers",
        element: <SimplePage></SimplePage>,
      },
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/allbuyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/dashboard/allsellers",
        element: <AllSeller></AllSeller>,
      },
      {
        path: "/dashboard/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/addaproduct",
        element: <AddAProduct></AddAProduct>,
      },
    ],
  },
]);

export default router;
