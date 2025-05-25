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
        element:<AllEquipment></AllEquipment>

      },
      {
        path:'/add',
        element:<AddEquipment></AddEquipment>
      },
      {
        path:'/my',
        element:<MyEquipment></MyEquipment>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
