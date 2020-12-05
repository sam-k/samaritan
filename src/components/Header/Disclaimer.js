import { Component } from 'react';
import './Disclaimer.css';

function closeModal(divId) {
  var div = document.getElementById(divId);
  if (div) {
      div.style.display = "none";
  }
}

class Disclaimer extends Component {
  render() {
    return (
      <div id="disclaimer">
        <div id="disclaimer--window">
          <h1>Disclaimer</h1>
          <p>Samaritan does not provide medical advice or diagnosis. Use of the web application does not create a physician–patient relationship. You are solely responsible for your decision to obtain treatment from a medical professional. This application was designed for educational purposes and not for the purpose of rendering medical device. The information presented through the application is not intended to replace the counsel of a medical professional. It is important to see your doctor before making any decision about your health or the health of your family.</p>
          <button className="disclaimer--button" onClick={ () => closeModal("disclaimer") }>Accept</button>
        </div>
      </div>
    );
  }
}

export default Disclaimer;
