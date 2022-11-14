import React from "react";
import { NavLink } from "react-router-dom";
import lottieURL from "../assets/online-shopping_02.json";
import DisplayLottie from "./DisplayLottie";

export default function Register() {
  return (
    <div className="container">
      <div className="card m-3">
        <div className="row">
          <div className="col-md-5 order-lg-1 order-2">
            <DisplayLottie lottieFile={lottieURL} className="size_img" />
          </div>
          <div className="col-md-6 p-4 order-lg-2 order-1 ">
            <form>
              <h2 className="text-center">Register</h2>
              <div className="input-group mt-3">
                <span className="bi bi-envelope input-group-text"></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="input-group mt-3">
                <span className="bi bi-envelope input-group-text"></span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="input-group mt-3">
                <span className="bi bi-envelope input-group-text"></span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="mt-5">
                <button className="btn btn-outline-danger w-100">
                  Register
                </button>
              </div>
              <div className="mt-3">
                <NavLink to="/login">Already Have an Account ?</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
