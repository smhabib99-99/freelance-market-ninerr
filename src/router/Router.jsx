import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import MyBids from "../pages/MyBids/MyBids";
import MyPostedJobs from "../sharedPages/MyPostedJobs/MyPostedJobs";
import BidsRequest from "../sharedPages/BidsRequest/BidsRequest";
import JobDetail from "../pages/JobDetail/JobDetail";
import AddJobs from "../pages/AddJobs/AddJobs";
import UpdateJobs from "../sharedPages/MyPostedJobs/UpdateJobs";


const router = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
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
                path:'/jobs',
                element:<PrivateRoute><AddJobs></AddJobs></PrivateRoute>
            },
            {
                path:'/myBids',
                element:<PrivateRoute><MyBids></MyBids></PrivateRoute>
            },
            {
                path:'/myPostedJobs',
                element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
                loader: ()=>fetch('http://localhost:5000/jobs')
            },
            {
                path:'/bidsRequest',
                element:<PrivateRoute><BidsRequest></BidsRequest></PrivateRoute>
            },
            {
                path:'/jobDetail',
                element:<PrivateRoute><JobDetail></JobDetail></PrivateRoute>
            },
            {
                path:'/update',
                element:<UpdateJobs></UpdateJobs>
            }
        ]

    }
])

export default router;