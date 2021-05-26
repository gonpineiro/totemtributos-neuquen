import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';

import Main from '../components/Main';
import Tributo from '../components/busqueda-tributo';
import CuotasPagar from '../components/cuotas-a-pagar';
import Mail from '../components/Mail';

import { Rodado, Cementerio, Inmuebles, Natatorio, ResiduosPatogenos, RecuperoPlanFederal } from '../components/components';

import {Recibo} from '../components/Recibo'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/apps/totems" component={Main} />
                    <Route exact path="/apps/totems/rodado" component={Rodado} />
                    <Route exact path="/apps/totems/cementerio" component={Cementerio} />
                    <Route exact path="/apps/totems/inmuebles" component={Inmuebles} />
                    <Route exact path="/apps/totems/natatorio" component={Natatorio} />
                    <Route exact path="/apps/totems/residuos-patogenos" component={ResiduosPatogenos} />
                    <Route exact path="/apps/totems/recupero-plan-federal" component={RecuperoPlanFederal} />
                    <Route exact path="/apps/totems/tributo" component={Tributo} />
                    <Route exact path="/apps/totems/pagar/" component={CuotasPagar} />
                    <Route exact path="/apps/totems/recibo/" component={Recibo} />
                    <Route exact path="/apps/totems/mail/" component={Mail} />
                    <Route component={Main} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
