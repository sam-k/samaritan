import './Navbar.css';
import logo from '../../logo.svg';

function Navbar() {
  return (
    <nav id="navbar">
      <div id="navbar--logo">
        <img src={ logo } />
        <h1>Samaritan</h1>
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
