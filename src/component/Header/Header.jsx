import React from "react";
import MenuBar from "../MenuBar/MenuBar";

const Header = () => {
  return (
    <div className="container mx-auto ">
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-14  text-5xl font-bold text-black">
              I Grow By Helping People In Need
            </h1>

            <div>
              <input type="text" className="bg-white" />
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
