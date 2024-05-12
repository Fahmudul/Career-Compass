import axios from "axios";
import SERVER_API_URL from "../api";

const axiosSecure = axios.create({
  baseURL: SERVER_API_URL,
  // withCredentials:true
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
