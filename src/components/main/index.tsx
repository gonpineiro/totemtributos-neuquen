import React from 'react';
import './main.scss';
const Main = () => {
    return (
        <div className="row mt-4">
            <div className="col"></div>
            <div className="col-md-6 p-3 background-main-div">
                <h2 className="text-primary mb-3 text-left">LOS TRIBUTOS RELACIONADOS A SU DNI / CUIT SON</h2>

                <div className="col-md-6 d-flex flex-column justify-content-center pull-left">
                    <a href="rodados.html" type="button" className="btn btn-primary btn-labeled text-left mb-1">
                        <span className="btn-label"><i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i></span>Rodados
                    </a>
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
                    <a href="inmuebles.html" type="button" className="btn btn-primary btn-labeled text-left mb-1">
                        <span className="btn-label"><i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i></span>Inmuebles
                    </a>
                    <a href="cementerio.html" type="button" className="btn btn-primary btn-labeled text-left mb-1">
                        <span className="btn-label"><i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i></span>Cementerio
                    </a>
                    <a href="recupero-plan-federal.html" type="button" className="btn btn-primary btn-labeled text-left mb-1">
                        <span className="btn-label"><i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i></span>Recupero Plan Federal
                    </a>
                    <a href="residuos-patogenos.html" type="button" className="btn btn-primary btn-labeled text-left mb-1">
                        <span className="btn-label"><i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i></span>Residuos Patógenos
                    </a>
                    <a href="natatorios.html" type="button" className="btn btn-primary btn-labeled text-left mb-1">
                        <span className="btn-label"><i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i></span>Natatorios
                    </a>

                </div>
                <a href="busqueda-dni.html" type="button" className="btn btn-primary active mb-1">
                    <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i> Volver
                </a>    
            </div>
            <div className="col"></div>
        </div>
    );
};

export default Main;