import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return(
    <nav  className="navbar">
      <div className="navbar_item">
        <a>Profile</a>
      </div>
      <div className="navbar_item active">
        <a>Messages</a>
      </div>
      <div className="navbar_item">
        <a>News</a>
      </div>
      <div className="navbar_item">
        <a>Music</a>
      </div>
      <div className="navbar_item">
        <a>Settings</a>
      </div>
    </nav>
  )
}

export default Navbar;
