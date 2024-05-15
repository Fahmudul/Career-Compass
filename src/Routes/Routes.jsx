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
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import UpdateJobInfo from "../Pages/MyJobs/UpdateJobInfo";
import ErrorElement from "../ErrorElement/ErrorElement";
import SummaryPage from "../Pages/AppliedJobs/SummaryPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/allJobsCategory`),
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
      },
      {
        path: "/appliedJobs",
        element: (
          // 
          <PrivateRoute>
            <AppliedJobs></AppliedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/appliedApplicants/:id",
        element: (
          <PrivateRoute>
            <SummaryPage></SummaryPage>
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <MyJobs></MyJobs>
          </PrivateRoute>
        ),
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
