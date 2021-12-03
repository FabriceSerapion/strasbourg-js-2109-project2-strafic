import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LignesEtPlans from './pages/Lignes-et-plans';
import Notfound from './pages/Notfound';
import ParkingRelais from './pages/Parking-relais';
import PointsDeVente from './pages/Points-de-vente';
import Velhop from './pages/Velhop';
import Veloparc from './pages/Veloparc';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/lignes-et-plans" exact component={LignesEtPlans} />
        <Route path="/points-de-vente" exact component={PointsDeVente} />
        <Route path="/parkings-relais" exact component={ParkingRelais} />
        <Route path="/veloparc" exact component={Veloparc} />
        <Route path="/velhop" exact component={Velhop} />
        <Route component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;
