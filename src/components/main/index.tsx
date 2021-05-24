import React from 'react';
import { Link } from 'react-router-dom'

import TipoImp from './TipoImp'
import './main.scss';

const Main = () => {
    return (
        <div className="row mt-4">
            <div className="col"></div>
            <div className="col-md-6 p-3 background-main-div">
                <h2 className="text-primary mb-3 text-left">LOS TRIBUTOS RELACIONADOS A SU DNI / CUIT SON</h2>

                <div className="col-md-6 d-flex flex-column justify-content-center pull-left">

                    <TipoImp name={'Rodados +'} url={'/apps/totems/rodado'} />

                    <a href="comercio.html" type="button" className="btn btn-primary btn-labeled text-left mb-1">
                        <span className="btn-label"><i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i></span>Comercio
                    </a>
                    <a href="planes-pago.html" type="button" className="btn btn-primary btn-labeled text-left mb-1">
                        <span className="btn-label"><i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i></span>Planes de pago
                    </a>
                    <a href="venta-tierras-fiscales.html" type="button" className="btn btn-primary btn-labeled text-left mb-1">
                        <span className="btn-label"><i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i></span>Ventas de Tierras Fiscales
                    </a>
                </div>

                <div className="col-md-6 d-flex flex-column justify-content-center pull-left">
                    <TipoImp name={'Inmuebles +'} url={'/apps/totems/inmuebles'} />
                    <TipoImp name={'Cementerio +'} url={'/apps/totems/cementerio'} />
                    <TipoImp name={'Recupero Plan Federal +'} url={'/apps/totems/recupero-plan-federal'} />
                    <TipoImp name={'Residuos Patógenosl +'} url={'/apps/totems/cementerio'} />
                    <TipoImp name={'Natatorios + '} url={'/apps/totems/natatorio'} />

                </div>
                <Link to="/apps/totems" type="button" className="btn btn-primary active mb-1">
                    <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i> Volver
                </Link>
            </div>
            <div className="col"></div>
        </div>
    );
};

export default Main;