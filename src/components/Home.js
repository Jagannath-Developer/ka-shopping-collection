import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1380&t=st=1668320797~exp=1668321397~hmac=d91a40a51290f4d2e683f17e8f469f0c58c54713be10549522b05fb9b99a05dd"
          className="card-img"
          alt="Background"
          height="500px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2">
              CHECK OUT ALL THE TRENDS
            </p>
            
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}
