import React from "react";

const Navbar = () => {
return (
<div className="text-white navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">ATTENDANCE PORTAL</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>About</a></li>
            <li><a>Contact Us</a></li>
          </ul>
        </div>
      </div>
);
}

export default Navbar;