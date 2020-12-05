import './Warning.css';

function Warning() {
  return (
    <div id="warning">
      <i id="warning--logo" class="fas fa-exclamation-circle" />
      <p id="warning--text">If you suspect a medical emergency, <b>call 911 immediately</b> before proceeding with this page.</p>
    </div>
  );
}

export default Warning;
