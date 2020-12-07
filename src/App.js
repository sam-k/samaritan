import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';

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

      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/step1" component={Conscious} />
          <Route path="/step2" component={Breathing} />
          <Route path="/step3" component={Pulse} />
          <Route path="/step4" component={RescueBreathing} />
          <Route path="/step5" component={Choking} />
          <Route path="/results" component={Results} />
          <Route path="/mental" component={MentalHealth} />
          <Route path="/mentalresults" component={MentalResults} />
        </Switch>
      </HashRouter>

      <Footer />
    </div>

  );
}

export default App;
