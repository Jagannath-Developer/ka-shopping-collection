import React from "react";
import lottieURL from "../assets/shopping_lottify.json";
import DisplayLottie from "./DisplayLottie";

export default function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center mt-5 d-flex flex-column justify-content-center">
          <h2 className="text-center fw-bold text-primary">ABOUT US</h2>
          <h4 className="">
            "Happy shopping here ,best shopping site for best deals"
          </h4>
        </div>
        <div className="col-md-6">
          <DisplayLottie lottieFile={lottieURL} className="size_img" />
        </div>
      </div>
    </div>
  );
}
