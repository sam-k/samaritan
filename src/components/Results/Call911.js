import React from 'react';
import './Results.css';

function Call911() {
  return (
    <div className="results">
      <div className="results--result">
        <i class="fas fa-bullhorn" />
        <h2>Call 911.</h2>
      </div>

      <div className="results--divider" />

      <p>Elevate the patient’s head and bring the victim to fresh air, if possible.</p>
      <p>Monitor the victim’s condition until emergency personnel arrive.</p>
    </div>
  );
}

export default Call911;
