import React from 'react';
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div className="row mt-5">
            <div className="col"></div>
            <div className="col-md-6 d-flex flex-column justify-content-center buttons-container">
                <Link to="/table" className="btn btn-outline-primary btn-block mb-3 font-weight-bold busqueda-button">Búsqueda por DNI/CUIT</Link>

                <Link to="/apps/totems/tributo" type="button" className="btn btn-outline-primary btn-block font-weight-bold busqueda-button">Búsqueda por TRIBUTO</Link>
            </div>
            <div className="col"></div>
        </div>
    );
};

export default Main;