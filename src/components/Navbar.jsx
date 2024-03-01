import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
return (
<div className="text-white navbar bg-base-100">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl">ATTENDANCE PORTAL</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </div>
      </div>
);
}

export default Navbar;