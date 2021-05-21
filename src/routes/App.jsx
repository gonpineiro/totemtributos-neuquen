import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';

import Main from '../components/Main';
import Tributo from '../components/busqueda-tributo';
import Cementerio from '../components/cementerio';
import Rodado from '../components/rodado';
import CuotaPagar from '../components/cuotas-a-pagar';

const App = () => {

  const NotFound = () => <h1>NotFound</h1>
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/apps/totems" component={Main} />
          <Route exact path="/apps/totems/tributo" component={Tributo} />
          <Route exact path="/apps/totems/cementerio" component={Cementerio} />
          <Route exact path="/apps/totems/rodado" component={Rodado} />
          <Route exact path="/apps/totems/pagar/" component={CuotaPagar} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
