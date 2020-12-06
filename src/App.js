import './App.css';
import Navbar from './components/Header/Navbar';
import Warning from './components/Header/Warning';
import Menu from './components/Triage/Menu';
import Triage from './components/Triage/Triage';
import Footer from './components/Footer/Footer';
import Disclaimer from './components/Footer/Disclaimer';

function App() {
  return (
    <div id="App">
      <div id="App-header">
        <Navbar />
        <Warning />
      </div>
      <div id="App-body">
        <Menu />
      </div>
      <div id="App-footer">
        <Footer />
        <Disclaimer />
      </div>
    </div>
  );
}

export default App;
