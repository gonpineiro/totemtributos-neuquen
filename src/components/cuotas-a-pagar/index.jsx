import { useEffect, useState } from 'react';
import './cuotas-a-pagar.scss';

import { imponible } from './ctaCtoAxios';
import { Row } from './Row';
import { Error } from './Error';
import { Link } from 'react-router-dom';

export const CuotasPagar = ({
    location: {
        state: { tipo, data },
    },
}) => {
    const [datos, setDatos] = useState(null);

    useEffect(() => {
        imponible(tipo, data).then((response) => {
            setDatos(response);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [impApagar, setImpApagar] = useState([]);
    const [sum, setSum] = useState();

    const handlerCheckboxChance = (event, total) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) setImpApagar([...impApagar, { value, total }]);

        if (!isChecked) {
            const array = impApagar;
            impApagar.splice(array.indexOf(value));
            setImpApagar(array);
        }

        //setImpApagar([...impApagar, impApagar.reduce((acc, curr) => acc + curr.total, 0)]);
        setSum(impApagar.reduce((acc, curr) => acc + curr.total, 0));
    };

    if (datos == null) return 'Cargando';

    if (datos.error) return <Error error={datos.error} />;
    
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
                            <th>#</th>
                            <th>Pagar</th>
                            <th>Cuota</th>
                            <th>Vencimiento</th>
                            <th>Valor</th>
                            <th>Intereses</th>
                            <th>Importe Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.impuestos.map((elem) => (
                            <Row
                                key={elem.tr1a102_id}
                                id={elem.tr1a102_id}
                                saldo={elem.saldo}
                                total={elem.actualizado}
                                reg_id={elem.reg_id}
                                fecha={elem.fecha}
                                handlerCheckboxChance={handlerCheckboxChance}
                            />
                        ))}
                    </tbody>
                </table>
                <div className="row mb-4">
                    <div className="col"></div>
                    <div className="col-md-3 text-info font-weight-bold">
                        Total a pagar $ <span id="totalpagar">{sum}</span>
                    </div>
                    {/* <div className="col-md-2 col-md-3 text-primary font-weight-bold">
                        <a href="qr.html">Generar QR</a>
                    </div> */}
                </div>

                <div className="row">
                    <div className="col"></div>
                    <div className="col-md-7">
                        <a href="rodados.html" type="button" className="btn btn-primary active mb-1 pull-left col-md-5">
                            <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i> VOLVER
                        </a>
                        <Link
                            to={{ pathname: '/apps/totems/recibo/', state: { impApagar, datos } }}
                            type="button"
                            className="btn btn-info active mb-1 pull-right col-md-5"
                        >
                            <i className="fa fa-print" aria-hidden="true"></i> IMPRIMIR
                        </Link>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col-md-7 mt-3">
                        <a href="enviar.html" type="button" id="enviar" className="btn btn-md btn-success active mb-1 pull-left col-md-5">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i> ENVIAR POR MAIL
                        </a>
                        {/* <a href="pagar.html" type="button" className="btn btn-danger active mb-1 pull-right col-md-5">
                            <i className="fa fa-calculator" aria-hidden="true"></i> PAGAR EN LINEA
                        </a> */}
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <div className="col"></div>
        </div>
    );
};

export default CuotasPagar;
