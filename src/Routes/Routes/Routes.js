import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Categories from "../../Pages/Home/Categories/Categories";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Home/Products/Products";

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
        path: "/products/:id",
        element: <Products></Products>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
      },

      // {
      //   path: "/blog",
      //   element: <Blog></Blog>,
      // },
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
  //     {
  //       path: "*",
  //       element: (
  //         <h1 className="text-center text-4xl text-blue-500">404 page not found</h1>
  //       ),
  //     },
]);
