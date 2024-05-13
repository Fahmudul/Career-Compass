import React from "react";
import "./ErrorElement.css";
import { Link } from "react-router-dom";
const ErrorElement = () => {
  return (
    <div>
      <section className="page_404 h-[100vh] flex items-center">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center ">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>
                <div className="contant_box_404">
                  <h3 className="h2 text-xl">Look like you're lost</h3>
                  <p className="text-xl">
                    the page you are looking for not avaible!
                  </p>
                  <Link
                    to="/"
                    className="mt-5 link_404 btn bg-[#39ac31] text-white text-base"
                  >
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorElement;
