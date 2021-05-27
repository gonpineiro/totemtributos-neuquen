import React from 'react';
import { Link } from 'react-router-dom'

import TipoImp from './TipoImp'
import './main.scss';

const Main = () => {
    return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col col-md-10 offset-md-1">
                        <div className="card background-main-div">
                            <div className="card-header titulo-componente text-white text-center"><span>LOS TRIBUTOS RELACIONADOS A SU DNI / CUIT SON</span></div>
                            <div className="card-body">
                                <div className="row pb-3">
                                    <div className="col d-flex flex-column justify-content-center">
                                        <TipoImp name={'Rodados'} url={'/apps/totems/rodado'} />
                                        {/* <TipoImp name={'Inmuebles'} url={'/apps/totems/inmuebles'} />
                                        <a href="comercio.html" type="button" className="btn btn-primary btn-labeled text-left mb-1">
                                            <span className="btn-label"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>Comercio
                                        </a>
                                        <a href="planes-pago.html" type="button" className="btn btn-primary btn-labeled text-left mb-1">
                                            <span className="btn-label"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>Planes de pago
                                        </a>
                                        <a href="venta-tierras-fiscales.html" type="button" className="btn btn-primary btn-labeled text-left mb-1">
                                            <span className="btn-label"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></span>Ventas de Tierras Fiscales
                                        </a> */}
                                    </div>
                                    <div className="col d-flex flex-column justify-content-center">
                                        {/* <TipoImp name={'Cementerio'} url={'/apps/totems/cementerio'} />
                                        <TipoImp name={'Recupero Plan Federal'} url={'/apps/totems/recupero-plan-federal'} />
                                        <TipoImp name={'Residuos Patógenos'} url={'/apps/totems/cementerio'} />
                                        <TipoImp name={'Natatorios '} url={'/apps/totems/natatorio'} /> */}

                                    </div>
                                </div>
                            </div>
                            {/* <div className="card-footer">
                                <div className="btn-wrapper text-center d-flex justify-content-between">
                                    <Link to="/apps/totems" type="button" className="btn btn-primary active">
                                        <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i> Volver
                                    </Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Main;