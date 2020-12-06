import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Header/Navbar';
import Warning from './components/Header/Warning';

import Home from './components/Home/Home';
import Conscious from './components/Triage/Conscious';
import Breathing from './components/Triage/Breathing';
import Pulse from './components/Triage/Pulse';
import RescueBreathing from './components/Triage/RescueBreathing';
import Choking from './components/Triage/Choking';
import MentalHealth from './components/Triage/MentalHealth';

import Results from './components/Results/Results';
import MentalResults from './components/Results/MentalResults';

import Footer from './components/Footer/Footer';

function App() {
  return (
    <div id="App">
      <Navbar />
      <Warning />

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/step1" exact component={Conscious} />
          <Route path="/step2" exact component={Breathing} />
          <Route path="/step3" exact component={Pulse} />
          <Route path="/step4" exact component={RescueBreathing} />
          <Route path="/step5" exact component={Choking} />
          <Route path="/results" exact component={Results} />
          <Route path="/mental" exact component={MentalHealth} />
          <Route path="/mentalresults" exact component={MentalResults} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
