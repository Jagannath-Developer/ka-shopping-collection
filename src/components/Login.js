import React from "react";
import { NavLink } from "react-router-dom";
import lottieURL from "../assets/online-shopping_02.json";
import DisplayLottie from "./DisplayLottie";
export default function Login() {
  return (
    <div className="container">
      <div className="card m-3 pb-5">
        <div className="row">
          <div className="col-md-5 order-2 order-lg-1 p-4">
            <DisplayLottie lottieFile={lottieURL} className="size_img"  />
          </div>
          <div className=" col-md-5 p-4  order-1 order-lg-2">
            <form >
              <h2 className="text-center">Login</h2>
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
              <div className="mt-3">
                <NavLink to="/passwordforgot">Forgot password ?</NavLink>
              </div>
              <div className="mt-5">
                <button className="btn btn-outline-primary w-100">Login</button>
              </div>
              <div className="mt-3">
                <NavLink to="/register">Create a new Account ?</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
