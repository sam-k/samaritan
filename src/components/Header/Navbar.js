import './Navbar.css';

import logo from '../../logos/logo.svg';

function Navbar() {
  return (
    <nav id="navbar">
      <div id="navbar--logo">
        <a href="/">
          <img src={logo} alt="Samaritan" />
        </a>
        <h1><a href="/">Samaritan</a></h1>
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
