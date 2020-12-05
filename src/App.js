import './App.css';

import Navbar from './components/Header/Navbar';
import Warning from './components/Header/Warning';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Warning />
      </header>
    </div>
  );
}

export default App;
