import React from 'react';
import './natatorio.scss';


export const App = () => {
    return (
        <div className="row mt-4">
            <div className="col"></div>
            <div className="col-md-6 p-3 text-center background-main-div">
                <a href="#" type="button" className="btn btn-primary btn-labeled text-left mb-3" >
                    <span className="btn-label">
                        <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
                    </span>
                Natatorios
                </a>
                <h2 className="text-primary mb-3 text-center">Ingrese su número</h2>
                <label className=" float-left" htmlFor="nomenclatura">Número</label>
                <input type="text" id="nomenclatura" className="form-control font-weight-bold text-center input-natatorio" />
                <p>9999999 / 99XX99999999999</p>
                <a href="tributos-rel-doc.html" type="button" className="btn btn-primary active mb-1 pull-left">
                    <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i> Volver
                </a>
                <a href="cuotas-a-pagar.html" type="button" className="btn btn-primary active mb-1 pull-right">
                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> Siguiente
                </a>
            </div>
            <div className="col"></div>
        </div>
    );
};

export default App;