import React, { useEffect } from "react";
import MenuBar from "../MenuBar/MenuBar";

const Header = ({ setSearchText }) => {
  const handleClickSearch = () => {
    const searchTextInput = document.getElementById("searchText");
    const searchText = searchTextInput.value;
    setSearchText(searchText);
    console.log("abc", searchText);
  };

  return (
    <div className="container mx-auto ">
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/tPz3tK9/Rectangle-4281.pngs)",
        }}
      >
        <div className="hero-overlay bg-opacity-90 bg-gray-200"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-14  text-5xl font-bold text-black">
              I Grow By Helping People In Need
            </h1>

            <div>
              {/* <input type="text" className="bg-white" id="searchText" /> */}
              <input
                type="text"
                placeholder="Search here...."
                id="searchText"
                className="input input-bordered w-1/2 md:w-full  md:max-w-xs bg-white"
              />
              <button
                onClick={handleClickSearch}
                // className="btn btn-primary relative -left-2 rounded-r-lg"
                className="bg-[#FF444A] text-white text-base font-semibold px-2 md:px-5 py-3 rounded-r-lg relative -left-2"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
