import React from "react";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
    <div className="bg-white container mx-auto flex justify-between ">
      {/* this is for logo */}
      <div>
        <img src="src/assets/Logo.png" alt="" />
      </div>
      <div className="flex gap-4 mt-6 list-none ">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Donation">Donation</NavLink>
        </li>
        <li>
          <NavLink to="/Statistics">Statistics</NavLink>
        </li>
      </div>
    </div>
  );
};

export default MenuBar;
