import React, { useContext, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { FaEye, FaEyeSlash, FaGithub, FaLock, FaUser } from "react-icons/fa";
import { MdEmail, MdInsertPhoto } from "react-icons/md";
import { Link } from "react-router-dom";
// import "../../../src/Utility.css";

import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import auth from "../../FireBaseConfig/FirebaseConfig";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const { signUp, GoogleSignIn } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const provider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const handleSignUp = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const photo = data.get("photo");
    const name = data.get("name");
    setError("");
    setPhotoUrl(photo);
    if (password.length < 6) {
      toast.error("Password need to be at-least 6 characters");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must need to contain an Uppercase letter ");
      return;
    }
    if (!/^(?=.*[a-z]).+$/.test(password)) {
      toast.error("Password must need to contain an LowerCase letter ");
      return;
    }
    signUp(email, password)
      .then((result) => {
        const userData = { email, name };

        updateProfile(result.user, {
          photoURL: photo,
          displayName: name,
        });
        fetch("https://art-craft-store-server-lac.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast.success("Successfully created your account");
              setTimeout(function () {
                location.reload();
                window.location.href = "/";
              }, 2000);
            }
          });
      })
      .catch((error) => {
        const errorMessages = error.message;
        const errorCode = errorMessages.split("(")[1].split(")")[0];
        const errorCodeWithoutAuth = errorCode.replace(/^auth\//, "");
        const formattedErrorCode = errorCodeWithoutAuth.replace(/-/g, " ");
        setError(formattedErrorCode);
        toast.error(formattedErrorCode);
      });
  };

  const handleShowPassword = () => {
    setShow(!show);
  };
  return (
    <div className="hero min-h-screen bg-custom-background">
      <Helmet>
        <meta charSet="utf-8" />
        <title>CareerCompass | Register</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div
        className="card shrink-0 w-full max-w-sm shadow-2xl bg-[#979696] "
        style={{ height: "600px", display: "block" }}
      >
        <h1 className=" text-center text-xl font-bold mt-4 text-white">
          Create your Account!
        </h1>

        <form className="card-body" onSubmit={handleSignUp}>
          <div className="form-control relative">
            <FaUser className="w-5 h-5 absolute  top-2 " />

            <label className="label ml-5">
              <span className="label-text text-base font-bold">Name</span>
            </label>
            <input
              type="name"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <MdInsertPhoto className="w-5 h-5 absolute top-2" />

            <label className="label ml-5">
              <span className="label-text text-base font-bold">Photo Url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <MdEmail className="w-5 h-5 absolute  top-[9px]" />
            <label className="label">
              <span className="label-text text-base font-bold ml-5">Email</span>
            </label>

            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <FaLock className="w-5 h-5 absolute  top-2 " />

            <label className="label ml-5">
              <span className="label-text text-base font-bold">Password</span>
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <span onClick={handleShowPassword}>
              {show ? (
                <FaEyeSlash className="absolute right-[17px] w-6 h-6 top-[52px]" />
              ) : (
                <FaEye className="absolute right-[17px] w-6 h-6 top-[52px]" />
              )}
            </span>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gray-800 border-none text-white">
              Sign Up
            </button>
          </div>

          <p className="mt-3 mb-3 text-center ">
            Already Have an account{" "}
            <Link className="underline  text-blue-800" to="/signin">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
