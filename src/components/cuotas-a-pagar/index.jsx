import React from 'react';
import './cuotas-a-pagar.scss';

export const App = ({ location: { state: { tipo, patente } } }) => {
    console.log(tipo);
    console.log(patente);

    return (
        <div className="row mt-4">
            <div className="col"></div>
            <div className="col-md-8 p-3 text-center background-main-div">
                <h2 className="text-primary mb-3 text-center">Seleccionar las cuotas que desea pagar</h2>
                <div className="col-md-12 linea"></div>
                <p className="titulo">Dominio : AC-740-US</p>
                <p className="subtitulo">Marca-Modelo-Año : VOLKSWAGEN - POLO COMFORTLINE 1.6 MSI 110 CV-2018</p>
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
                        <tr>
                            <td><input type="checkbox" className="form-check-input chksel" value="1" /></td>
                            <td>01/2021</td>
                            <td>28/01/2021</td>
                            <td>1200</td>
                            <td>47</td>
                            <td className="total">1247</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className="form-check-input chksel" value="1" /></td>
                            <td>02/2021</td>
                            <td>10/02/2021</td>
                            <td>1200</td>
                            <td>41</td>
                            <td className="total">1241</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className="form-check-input chksel" value="1" /></td>
                            <td>03/2021</td>
                            <td>09/03/2021</td>
                            <td>1200</td>
                            <td>35</td>
                            <td className="total">1235</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className="form-check-input chksel" value="1" /></td>
                            <td>04/2021</td>
                            <td>12/04/2021</td>
                            <td>1200</td>
                            <td>29</td>
                            <td className="total">1229</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className="form-check-input chksel" value="1" /></td>
                            <td>05/2021</td>
                            <td>11/05/2021</td>
                            <td>1200</td>
                            <td>21</td>
                            <td className="total">1221</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" className="form-check-input chksel" value="1" /></td>
                            <td>06/2021</td>
                            <td>10/06/2021</td>
                            <td>1200</td>
                            <td>12</td>
                            <td className="total">1212</td>
                        </tr>

                    </tbody>

                </table>
                <div className="row mb-4">
                    <div className="col"></div><div className="col-md-3 text-info font-weight-bold">Total a pagar $ <span id="totalpagar">0.00</span></div><div className="col-md-2 col-md-3 text-primary font-weight-bold"><a href="#">Generar QR</a></div>
                </div>

                <div className="row">
                    <div className="col"></div>
                    <div className="col-md-7">
                        <a href="rodados.html" type="button" className="btn btn-primary active mb-1 pull-left col-md-5" >
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
                        <a href="#" type="button" className="btn btn-danger active mb-1 pull-right col-md-5">
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