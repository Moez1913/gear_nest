import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login.jsx';
import Route from './Routes/Route.jsx';
import Register from './Pages/Register.jsx';
import AddEquipment from './Pages/AddEquipment.jsx';
import AllEquipment from './Pages/AllEquipment.jsx';
import MyEquipment from './Pages/MyEquipment.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import PrivateRoute from './private/PrivateRoute.jsx';
import ViewDetails from './Pages/ViewDetails.jsx';
import Update from './Pages/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Route></Route>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/all',
        element:<PrivateRoute><AllEquipment></AllEquipment></PrivateRoute>,
        loader: () => fetch(' http://localhost:5000/equipments')

      },
      {
        path:'/add',
        element:<PrivateRoute><AddEquipment></AddEquipment></PrivateRoute>
      },
      {
        path:'/my',
        element:<PrivateRoute><MyEquipment></MyEquipment></PrivateRoute>
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
         loader: ({params}) => fetch(`http://localhost:5000/equipments/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/equipments/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>,
)
