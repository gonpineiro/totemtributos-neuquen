import { useState } from 'react';
import './mail.scss';

import { Link } from 'react-router-dom';

export const enviarMail = ({
    location: {
        state: { tipo, data },
    },
}) => {
     
    return (
        <div className="row mt-4">
            <div className="col"></div>
            <div className="col-md-6 p-3 text-center">
                <h2 className="text-primary mb-3 text-center">Enviar por mail</h2>
                <label htmlFor="patente">Ingrese su mail</label>
                <input type="text" id="mail" className="form-control font-weight-bold" />
                <div className="row">
                <div className="col-md-12">
                    <a href="#" type="button" id="enviar" className="btn btn-success active pull-right mb-3 mt-4 col-md-3">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i> Enviar
                    </a>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <Link
                        to={{ pathname: '/apps/totems/pagar/', state: { tipo: tipo, data: data} }}
                        className="btn btn-primary active pull-right col-md-3"
                    >
                        <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                        VOLVER
                    </Link>
                </div>
                </div>
                
            </div>
            <div className="col"></div>
            <div className="d-flex flex-column align-items-center justify-content-center confirmar-mail" id="modal-print" >
                <div>
                <h3 className="font-weight-bold text-primary">Su mail es</h3>
                </div>
                <div>
                <h4 className="font-weight-bold text-primary" id="sumail"></h4>
                </div>
                <div>
                <a href="index.html" type="button" className="btn btn-info active">
                    SI
                </a>
                
                <a href="#" type="button" className="btn btn-primary active" id="no-pudo-imprimir" >
                    NO
                </a>
                </div>
            </div>
        </div>
    );
};

export default enviarMail;
