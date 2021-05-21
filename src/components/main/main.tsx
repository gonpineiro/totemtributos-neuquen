import React from 'react';


export const Main = () => {
 return (
    <div className="row mt-5">
        <div className="col"></div>
        <div className="col-md-6 d-flex flex-column justify-content-center buttons-container">
            <a href="busqueda-dni.html" type="button" className="btn btn-outline-primary btn-block mb-3 font-weight-bold busqueda-button">Búsqueda por DNI/CUIT</a>
            <a href="#" type="button" className="btn btn-outline-primary btn-block font-weight-bold busqueda-button">Búsqueda por TRIBUTO</a>
        </div>
        <div className="col"></div>
    </div>
 );
};