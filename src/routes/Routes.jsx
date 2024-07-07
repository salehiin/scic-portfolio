import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import Home from "../pages/Home";
import Hire from "../pages/Hire";



export const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children:[
        {
          index: true,
          element: <Home></Home>
        },
        {
          path: '/hire',
          element: <Hire></Hire>
        },
      ]
    }
  ])