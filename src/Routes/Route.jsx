import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage"
import Home from "../Pages/Home/Home"
import Login from "../Pages/UserDashBoard/Login";
import Register from "../Pages/UserDashBoard/Register";
import PrivateRoute from "./PrivateRoute";
import AllEquipment from "../Pages/AdminDashboard/AllEquipment";
import AddEquipment from "../Pages/AdminDashboard/AddEquipment";
import MyEquipment from "../Pages/MyEquipment";
import ViewDetails from "../Pages/ViewDetails";
import Update from "../Pages/AdminDashboard/Update";
import Blog from "../Pages/Blog"
import Cart from "../Pages/UserDashBoard/Cart";
import OrderPage from "../Pages/OrderPage";
import Payment from "../Pages/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all",
        element: (
          <PrivateRoute>
            <AllEquipment></AllEquipment>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/equipments"),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddEquipment></AddEquipment>
          </PrivateRoute>
        ),
      },
      {
        path: "/my",
        element: (
          <PrivateRoute>
            <MyEquipment></MyEquipment>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/equipments/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/equipments/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path:'/cart',
        element:<Cart></Cart>
      },
      {
        path:'orderPage',
        element:<OrderPage></OrderPage>
      },
      {
        path:'/payment',
        element:<Payment></Payment>
      }
    ],
  },
]);