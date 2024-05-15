import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  // const { user, logOut } = useContext(AuthContext);
  // console.log("user from axios hook", user);
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error from interceptor", error);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("log out");
          // logOut();
          //   .then((window.location.href = "/signin"))
          //   .catch((error) => console.log(error));
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
