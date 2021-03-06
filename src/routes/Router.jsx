import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';

import Main from '../components/Main';
import PagarMensual from '../components/PagarMensual';
import PagarSemestral from '../components/PagarSemestral';
import Mail from '../components/Mail';
import OptionPayment from '../components/OptionPayment';

import {
    Rodado,
    Cementerio,
    Inmuebles,
    Comercio,
    PlanPago,
    Natatorio,
    ResiduosPatogenos,
    RecuperoPlanFederal,
} from '../components/components';

import { Recibo } from '../components/Recibo';

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/apps/totems" component={Main} />
                    <Route exact path="/apps/totems/rodado" component={Rodado} />
                    <Route exact path="/apps/totems/cementerio" component={Cementerio} />
                    <Route exact path="/apps/totems/inmuebles" component={Inmuebles} />
                    <Route exact path="/apps/totems/comercio" component={Comercio} />
                    <Route exact path="/apps/totems/plan-de-pago" component={PlanPago} />
                    <Route exact path="/apps/totems/natatorio" component={Natatorio} />
                    <Route exact path="/apps/totems/residuos-patogenos" component={ResiduosPatogenos} />
                    <Route exact path="/apps/totems/recupero-plan-federal" component={RecuperoPlanFederal} />
                    <Route exact path="/apps/totems/pagar-mensual/" component={PagarMensual} />
                    <Route exact path="/apps/totems/pagar-semestral/" component={PagarSemestral} />
                    <Route exact path="/apps/totems/opciones-pago/" component={OptionPayment} />
                    <Route exact path="/apps/totems/recibo/" component={Recibo} />
                    <Route exact path="/apps/totems/mail/" component={Mail} />
                    <Route component={Main} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
