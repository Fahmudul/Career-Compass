import { Outlet } from "react-router-dom";
import Navbar from "./Pages/SharedComponent/Navbar/Navbar";
import Footer from "./Pages/SharedComponent/Footer/Footer";
import "./Root.css";
const Root = () => {
  return (
    <div className="min-h-screen relative mx-auto background">
      <div className="w-[90%] mx-auto ">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
