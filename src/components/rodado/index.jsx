import React from 'react';
import { Link } from 'react-router-dom'

import './rodado.scss'

export const App = () => {
    return (
        <div className="row mt-4">
            <div className="col"></div>
            <div className="col-md-6 p-3 text-center background-main-div">
                <a href="#" type="button" className="btn btn-primary btn-labeled text-left mb-3" >
                    <span className="btn-label">
                        <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
                    </span>
                Rodados
                </a>
                <h2 className="text-primary mb-3 text-center">INGRESE SU PATENTE</h2>
                <label htmlFor="patente float-left">Patente</label>
                <input type="text" id="patente" className="form-control font-weight-bold text-center input-rodados" />
                <p>Autos: XXX999 / XX999XX<br />
                    Motos: 999XXX /X999XXX</p>
                <a href="tributos-rel-doc.html" type="button" className="btn btn-primary active mb-1 pull-left">
                    <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i> Volver
                    </a>
                <Link to={{ pathname: "/apps/totems/pagar/", state: { tipo: 'ROD' } }} className="btn btn-primary active mb-1 pull-right"><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> Siguiente</Link>


            </div>
            <div className="col"></div>
        </div>

    );
};

export default App;