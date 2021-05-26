import { useState } from 'react';
import { Link } from 'react-router-dom';
import Teclado from './Teclado';

import './styles.scss';

export const Form = ({ name, h2, label, inputName, tipo, nodesHtml }) => {
    const [datos, setDatos] = useState({});

    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="row mt-4">
            <div className="col"></div>
            <div className="col-md-6 p-3 text-center background-main-div">
                <a href="esto.html" type="button" className="btn btn-primary btn-labeled text-left mb-3">
                    <span className="btn-label">
                        <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
                    </span>
                    {name}
                </a>
                <h2 className="text-primary mb-3 text-center">{h2}</h2>
                <label htmlFor="patente float-left">{label}</label>
                <input
                    type="text"
                    onChange={handleInputChange}
                    name={inputName}
                    className="form-control font-weight-bold text-center input-rodados"
                />
                {nodesHtml[0]}
                <Link to="/apps/totems" className="btn btn-primary active mb-1 pull-left">
                    <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
                    Volver
                </Link>
                <Link
                    to={{ pathname: '/apps/totems/pagar/', state: { tipo: tipo, data: datos[inputName] } }}
                    className="btn btn-primary active mb-1 pull-right"
                >
                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    Siguiente
                </Link>
            </div>
            <div className="col"></div>
            <Teclado />
        </div>
    );
};

export default Form;
