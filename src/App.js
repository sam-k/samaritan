import './App.css';

import Disclaimer from './components/Header/Disclaimer';
import Navbar from './components/Header/Navbar';
import Warning from './components/Header/Warning';

function App() {
  return (
    <div className="App">
      <div id="App-header">
        <Navbar />
        <Warning />
      </div>
      <div id="triage">
        
      </div>
      <Disclaimer />
    </div>
  );
}

export default App;
