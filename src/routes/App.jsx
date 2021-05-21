import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';

import Main from '../components/main';
import Tributo from '../components/busqueda-tributo';

const App = () => {

  const NotFound = () => <h1>NotFound</h1>
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/apps/totems" component={Main} />
          <Route exact path="/apps/totems/tributo" component={Tributo} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
