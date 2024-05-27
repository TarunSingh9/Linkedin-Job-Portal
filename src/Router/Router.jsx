import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Dashboard from "../Pages/Dashboard";
import CompanyGrowth from "../Pages/CompanyGrowth";
import CompanyPerformance from "../Pages/CompanyPerformance";
import ServicesProvided from "../Pages/ServicesProvided";

import EmployeeGrowth from "../Pages/EmployeeGrowth";
import Usergrowth from "../Pages/Usergrowth";
import CompanyInformation from "../Pages/CompanyInformation";
import NewsFeed from "../Pages/NewsFeed";



const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        { path:"/", element:<Home/> },
        { 
           path:'/post-jobs',
           element :<CreateJob/>

        },
        
        { 
           path:'/my-job',
           element :<MyJobs/>

       },
       { 
           path:'/salary',
           element :<SalaryPage/>

       },
     
      { 
        path:'/Carrier-graph',
        element :<Dashboard/>

      },
      {
        path:'/Company-growth',
        element:<CompanyGrowth/>
      }, 
       {
        path:'/Company-Performance',
        element:<CompanyPerformance/>
      },
      {
        path:'/Services-Provided',
        element:<ServicesProvided/>
      },
      
      {
        path:'/Employee-Growth',
        element:<EmployeeGrowth/>
      },
     
      {
        path:'/user-growth',
        element:<Usergrowth/>
      },
       {
        path:'/Company-Information',
        element:<CompanyInformation/>
       },

       {
           path: "edit-job/:id",
           element: <UpdateJob/>,
           loader : ({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)
       },


       {
        path: "/login",
        element: <Login/>
      },
       {
         path: "/sign-up",
         element:<Signup/>
       },

       {
        path: "/News-feed",
        element:<NewsFeed/>
      },
      ]
    },
    
  
   
  ]);


export default router;  

function newFunction() {
  return '/comp-growth';
}
