import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { imponible } from './ctaCtoAxios';

import './cuotas-a-pagar.scss';

export const App = ({
    location: {
        state: { tipo, data },
    },
}) => {
    const [datos, setDatos] = useState(null);

    console.log(tipo);
    console.log(data);

    useEffect(() => {
        imponible(tipo, data).then((response) => {
            setDatos(response);
        });
    }, []);

    console.log(datos);

    if (datos == null) return 'Cargando';
    if (datos.error) return (
        <div className="row mt-4">
            <div className="col-md-6 offset-md-3 p-3 text-center background-main-div">
                <h2 className="text-primary mb-3 text-center">Error</h2>
                <p className="titulo text-center">{datos.error}</p>
            </div>
            <div className='col-md-6 offset-md-3 pt-3 text-center'>
                <Link to="/apps/totems" className="btn btn-primary active mb-1 pull-left">
                    <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
                    Volver
                </Link>
            </div>
        </div>
                
    );

    const Row = (id, estado_d) => (
        <tr>
            <td>
                <input type="checkbox" className="form-check-input chksel" value={id} />
            </td>
            <td>01/2021</td>
            <td>28/01/2021</td>
            <td>1200</td>
            <td>{estado_d}</td>
            <td className="total">1247</td>
        </tr>
    );

    return (
        <div className="row mt-4">
            <div className="col"></div>
            <div className="col-md-8 p-3 text-center background-main-div">
                <h2 className="text-primary mb-3 text-center">Seleccionar las cuotas que desea pagar</h2>
                <div className="col-md-12 linea"></div>
                <p className="titulo">Dominio : {datos.imp_identificacion}</p>
                <p className="subtitulo">Marca-Modelo-Año : {datos.imp_nombre}</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Pagar</th>
                            <th>Cuota</th>
                            <th>Vencimiento</th>
                            <th>Valor</th>
                            <th>Intereses</th>
                            <th>Importe Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.impuestos.map((key, elem) => (
                            <Row key={key} id={elem.tr1a102_id} estado_d={elem.estado_d} />
                        ))}
                    </tbody>
                </table>
                <div className="row mb-4">
                    <div className="col"></div>
                    <div className="col-md-3 text-info font-weight-bold">
                        Total a pagar $ <span id="totalpagar">0.00</span>
                    </div>
                    <div className="col-md-2 col-md-3 text-primary font-weight-bold">
                        <a href="qr.html">Generar QR</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col"></div>
                    <div className="col-md-7">
                        <a href="rodados.html" type="button" className="btn btn-primary active mb-1 pull-left col-md-5">
                            <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i> VOLVER
                        </a>
                        <a href="imprimir.html" type="button" className="btn btn-info active mb-1 pull-right col-md-5">
                            <i className="fa fa-print" aria-hidden="true"></i> IMPRIMIR
                        </a>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col-md-7 mt-3">
                        <a href="enviar.html" type="button" id="enviar" className="btn btn-md btn-success active mb-1 pull-left col-md-5">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i> ENVIAR POR MAIL
                        </a>
                        <a href="pagar.html" type="button" className="btn btn-danger active mb-1 pull-right col-md-5">
                            <i className="fa fa-calculator" aria-hidden="true"></i> PAGAR EN LINEA
                        </a>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <div className="col"></div>
        </div>
    );
};

export default App;
