import React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "../MenuBar/MenuBar";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div className="bg-white w-full h-[2000px]">
      <MenuBar></MenuBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
