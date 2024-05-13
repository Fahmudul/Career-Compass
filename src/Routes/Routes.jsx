import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Signin/Signin";
import SignUp from "../Pages/SignUp/SignUp";
import AllJobs from "../Pages/AllJobs/AllJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import AddAJobs from "../Pages/AddAJobs/AddAJobs";
import MyJobs from "../Pages/MyJobs/MyJobs";
import Blogs from "../Pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";
import SERVER_API_URL from "../api";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import UpdateJobInfo from "../Pages/MyJobs/UpdateJobInfo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorElements></ErrorElements>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`${SERVER_API_URL}/allJobsCategory`),
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
        // loader: () => fetch(`${SERVER_API_URL}/allJobsCategory`),
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/addJobs",
        element: (
          <PrivateRoute>
            <AddAJobs></AddAJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/myJobs",
        element: <MyJobs></MyJobs>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/jobDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>,
          </PrivateRoute>
        ),
      },
      {
        path: "/updateJobInfo/:id",
        element: (
          <PrivateRoute>
            <UpdateJobInfo></UpdateJobInfo>,
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
