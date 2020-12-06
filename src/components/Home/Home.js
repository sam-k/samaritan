import './Home.css';
import logoMed from '../../logoMed.svg';
import logoMH from '../../logoMH.svg';

function Home() {
  return (
    <div id="home">
      <h1>Choose a Triage Option...</h1>
      <ul id="home--options">
        <a className="home--box home--box-link" href="/step1">
          <li>
            <h2>Medical Emergency</h2>
            <div className="home--desc">
              <p>Triage an urgent, unknown situation and give immediate first aid.</p>
            </div>
            <img src={logoMed} alt="Medical Emergency" />
          </li>
        </a>

        <a className="home--box home--box-link" href="/step2">
          <li>
            <h2>Mental Health Emergency</h2>
            <div className="home--desc">
              <p>Help a person in immediate crisis, or deescalate the situation.</p>
            </div>
            <img src={logoMH} alt="Mental Health Emergency" />
          </li>
        </a>

        <div className="home--box">
          <li>
            <h2>Quick Access</h2>
            <div className="home--desc">
              <p>Get immediate information about a known situation.</p>
              <ul>
                <li>
                  <a href="/">Allergic reaction</a>
                </li>
                <li>
                  <a href="/">Choking</a>
                </li>
                <li>
                  <a href="/">Drowning</a>
                </li>
                <li>
                  <a href="/">Diabetic shock</a>
                </li>
                <li>
                  <a href="/">Stroke</a>
                </li>
              </ul>
              {/* <p>See more...</p> */}
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Home;
