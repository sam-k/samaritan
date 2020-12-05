import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav id="navbar">
      <div id="navbar--logo">
        <h1>(Project Name)</h1>
      </div>
      <ul id="navbar--links">
        <li className="navbar--link-item"><a href="/">Triage</a></li>
        <li className="navbar--link-item"><a href="/">About</a></li>
        <li className="navbar--link-item"><a href="/">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
