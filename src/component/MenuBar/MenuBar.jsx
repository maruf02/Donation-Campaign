import React from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";

const MenuBar = () => {
  return (
    <div className="bg-white container mx-auto flex justify-between ">
      {/* this is for logo */}
      <div>
        <img src="../Logo.png" alt="" />
      </div>
      <div className="flex gap-4 mt-6 list-none ">
        <li>
          <NavLink to="/" className="activeNavLink ">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Donation" className="activeNavLink ">
            Donation
          </NavLink>
        </li>
        <li>
          <NavLink to="/Statistics" className="activeNavLink ">
            Statistics
          </NavLink>
        </li>
      </div>
    </div>
  );
};

export default MenuBar;
