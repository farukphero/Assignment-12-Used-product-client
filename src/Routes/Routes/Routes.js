import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import Categories from "../../Pages/Home/Categories/Categories";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Home/Products/Products";
import LogIn from "../../Pages/LogIn/LogIn";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myproducts",
        element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>,
      },
      {
        path: "/allsellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/allbuyers",
        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/reportedItems",
        element: <ReportedItems></ReportedItems>,
      },
      {
        path: "/products/:id",
        element: <PrivateRoute><Products></Products></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
      },

      // {
      //   path: "/blog",
      //   element: <Blog></Blog>,
      // },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      // {
      //   path: "/myreview",
      //   element: (
      //     <PrivateRoute>
      //       <MyReview></MyReview>
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/addservices",
      //   element: (
      //     <PrivateRoute>
      //       <AddServices></AddServices>
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
  // {
  //   path: "/signin",
  //   element: <SignIn></SignIn>,
  // },
  // {
  //   path: "/signup",
  //   element: <SignUp></SignUp>,
  // },
  // {
  //   path: "/showreview",
  //   element: <ShowReview></ShowReview>,
  // },
  //     {
  //       path: "servicedetails/:id",
  //       element: <ServiceDetails></ServiceDetails>,
  //       loader: ({ params }) =>
  //         fetch(`https://fly-plane-web-server.vercel.app/services/${params.id}`),
  //     },
      {
        path: "*",
        element: (
            <ErrorPage></ErrorPage>
        ),
      },
]);
