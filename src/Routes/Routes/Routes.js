import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";

 const router = createBrowserRouter([
   {
     path: "/",
     element: <Main></Main>,
     children: [
       {
         path: "/",
         element: <Home></Home>,
       },
       {
         path: "/login",
         element: <Login></Login>,
       },
       {
         path: "/signup",
         element: <Signup></Signup>,
       },
       {
         path: "/appointment",
         element: <Appointment></Appointment>,
       },
     ],
   },
   {
    path: '/dashboard',
    element: <Dashboard></Dashboard>
   }
 ]);

export default router;