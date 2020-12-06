import { Component } from 'react';
import './Triage.css';

class Triage extends Component {
  render() {
    return (
      <div id="triage">
        <h1>Is the person conscious?</h1>
        <ul id="triage--options">
          <li><button>Yes</button></li>
          <li><button>No</button></li>
        </ul>
      </div>
    );
  }
}

export default Triage;
