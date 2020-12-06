import './Menu.css';
import logoMed from '../../logoMed.svg'
import logoMH from '../../logoMH.svg'

function Menu() {
  return (
    <div id="menu">
      <h1>Choose a Triage Option...</h1>
      <ul id="menu--options">
        <li className="menu--box">
          <h2>Medical Emergency</h2>
          <div className="menu--desc">
            <p>Triage an urgent, unknown situation and give immediate first aid.</p>
          </div>
          <img src={ logoMed } alt="Medical Emergency" />
        </li>
        <li className="menu--box">
          <h2>Mental Health Emergency</h2>
          <div className="menu--desc">
            <p>Help a person in immediate crisis, or deescalate the situation.</p>
          </div>
          <img src={ logoMH } alt="Mental Health Emergency" />
        </li>
        <li className="menu--box">
          <h2>Quick Access</h2>
          <div className="menu--desc">
            <p>Get immediate information about a known situation.</p>
            <ul>
              <li>Allergic reaction</li>
              <li>Choking</li>
              <li>Drowning</li>
              <li>Diabetic shock</li>
              <li>Stroke</li>
            </ul>
            <p>See more...</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
