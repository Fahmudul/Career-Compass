import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import DarkLightSwitch from "../../Component/DarkLightSwitch/DarkLightSwitch";
import { HiOutlineUserGroup } from "react-icons/hi";
// import DarkLightSwitch from "../../DarkLightSwitch/DarkLightSwitch";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // useEffect(() => {
  //   AOS.init({ duration: 400 });
  // }, []);

  const navLink = (
    <>
      <li>
        <NavLink to="/" className="mr-3  text-lg pb-1 px-2">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/allJobs" className="mr-3  text-lg pb-1 px-2">
          All Jobs
        </NavLink>
      </li>
      <li>
        <NavLink to="/appliedJobs" className="mr-3  text-lg pb-1 px-2">
          Applied Jobs
        </NavLink>
      </li>
      <li>
        <NavLink to="/addJobs" className="mr-3  text-lg pb-1 px-2">
          Add A Jobs
        </NavLink>
      </li>
      <li>
        <NavLink to="/myJobs" className="mr-3  text-lg pb-1 px-2">
          My Jobs
        </NavLink>
      </li>
      <li>
        <NavLink to="/blogs" className="mr-3  text-lg pb-1 px-2">
          Blogs
        </NavLink>
      </li>
    </>
  );
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        toast.success("Log out successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
    // console.log(user);
  };
  return (
    <div
      className=" mx-auto mb-5"
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="40"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="navbar  pt-5 px-0 flex justify-between">
        <div className="navbar-start  w-auto flex flex-1 lg:flex-none">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden px-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  rounded-box  z-20 bg-base-100 w-[300px]  p-3 "
            >
              <div className="mb-5 flex justify-center flex-col items-center">
                <img src={user?.photoURL} className="w-20 h-20 rounded-full " />
                <p className="text-xl mt-2">{user?.displayName}</p>
              </div>
              <ul>
                {navLink}
                {user ? (
                  <div className="flex gap-2 lg:space-x-5 items-center">
                    <button
                      onClick={handleSignOut}
                      className="btn btn-ghost  text-white text-lg"
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <div className="  lg:hidden">
                    <Link
                      to="/signin"
                      className="btn btn-ghost   text-white text-base mr-3"
                    >
                      Login
                    </Link>
                  </div>
                )}
              </ul>
            </div>
          </div>
          <a className="btn btn-ghost text-2xl flex items-center font-bold lg:w-auto md:w-full">
            <HiOutlineUserGroup className="w-9 h-9" />
            CareerCompass
          </a>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu-horizontal px-1 z-20">{navLink}</ul>
        </div>

        <div className="navbar-end w-auto">
          {user ? (
            <div className="flex gap-2 lg:space-x-5 items-center">
              <DarkLightSwitch></DarkLightSwitch>
              <img
                className="h-10 w-10 rounded-full hidden lg:block"
                title={user.displayName}
                src={user.photoURL}
              />
              <button
                onClick={handleSignOut}
                className="btn btn-ghost  text-[#8a8686]  text-lg hidden md:block lg:block"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className=" lg:flex items-center  ">
              <DarkLightSwitch></DarkLightSwitch>
              <Link
                to="/signin"
                className="btn btn-ghost   text-[#8a8686]  text-base mr-3  hidden md:hidden items-center lg:flex  ml-2"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
