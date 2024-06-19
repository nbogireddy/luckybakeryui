import React from 'react';
import './Header.css';
import { CgProfile } from "react-icons/cg";
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="navbar" style={{ paddingLeft: "250px" }}>
          <IoMenuSharp />

        </div>
      </div>
      <div className="header-right">
        <div className="profile-info">
          <CgProfile /> <br />
          <span className="profile-name">John Doe</span>
        </div>
      </div>
    </header>
  );
}

export default Header;