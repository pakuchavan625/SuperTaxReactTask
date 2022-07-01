import React from "react";
import "../styles/login.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-primary">
        <div className="container">
          <a className="navbar-brand" href="https://dwatatech.com/">
            <img src="../Assets/doctor.png" alt="" width="50" height="50" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
