import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../FireBaseConfig/FirebaseConfig";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import axios from "axios";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const axiosSecure = useAxiosSecure();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        console.log(currentuser);
        setUser(currentuser);
        setLoading(false);
        const loggedInUser = { email: currentuser.email };
        axiosSecure.post("/jwt", loggedInUser);
      } else {
        setUser(null);
        setLoading(false);
        axiosSecure.post("/logout").then((res) => console.log(res.data));
      }

      // Way 2

      // if (currentuser) {
      //   // console.log("user changed");
      //   console.log(currentuser);
      //   setUser(currentuser);
      //   setLoading(false);
      //   const loggedInUser = { email: currentuser.email };
      //   axios.post("http://localhost:5000/jwt", loggedInUser, {
      //     withCredentials: true,
      //   });
      // } else {
      //   setUser(null);
      //   setLoading(false);
      //   axios
      //     .post("http://localhost:5000/logout")
      //     .then((res) => console.log(res.data));
      // }
    });
    return () => {
      unSubscribe();
    };
  }, [user]);
  const authInfo = { user, signUp, logIn, logOut, loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
