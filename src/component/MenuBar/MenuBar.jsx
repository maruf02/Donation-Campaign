import React from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";

const MenuBar = () => {
  return (
    <div className="bg-white container mx-auto  ">
      {/* this is for logo */}
      <section className="mx-10 pb-5 md:pb-0 flex flex-col md:flex-row justify-between">
        <div>
          <img src="../Logo.png" alt="" />
        </div>
        <div className="flex gap-4 mt-6 list-none text-black text-lg font-normal ">
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
      </section>
    </div>
  );
};

export default MenuBar;
