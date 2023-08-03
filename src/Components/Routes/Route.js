import { createBrowserRouter } from "react-router-dom";
import AddAProduct from "../AddAProduct/AddAProduct";
import AllBuyers from "../AllBuyers/AllBuyers";
import AllSeller from "../AllSeller/AllSeller";
import Blogs from "../Blogs/Blogs";
import BookCategory from "../BookCategory/BookCategory";
import BookCategory2 from "../BookCategory/BookCategory2";
import BookCategory3 from "../BookCategory/BookCategory3";
import DashboardLayout from "../DashBoard/DashboardLayout";
import ErrorPage from "../Error/ErrorPage";

import Home from "../Home/Home";
import MyOrders from "../MyOrders.js/MyOrders";
import MyProducts from "../MyProducts/MyProducts";
import Payment from "../Payment/Payment";

import Root from "../Root/Root";

import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import SimplePage from "../SimplePage/SimplePage";
import PerCategoryPage from "../Trial/PerCategoryPage/PerCategoryPage";
import Wishlist from "../Wishlist/Wishlist";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

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
      {
        path: "/payment",
        element: <Payment></Payment>,
      },

      // {
      //   path: "/myorders",
      //   element: <MyOrders></MyOrders>,
      // },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      // {
      //   path: "/blogs",
      //   element: <Blogs></Blogs>,
      // },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
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
        element: (
          <BuyerRoute>
            <MyOrders></MyOrders>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoute>
            <AllSeller></AllSeller>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/wishlist",
        element: (
          <BuyerRoute>
            <Wishlist></Wishlist>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/addaproduct",
        element: (
          <SellerRoute>
            <AddAProduct></AddAProduct>
          </SellerRoute>
        ),
      },
    ],
  },
]);

export default router;
