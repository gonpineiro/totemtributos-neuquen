import { useEffect, useState } from 'react';
/* import './cuotas-a-pagar.scss'; */

import { getImponible } from './ctaCtoAxios';
import { Cargando, I, LinkBtn } from '../shared';
import { Link } from 'react-router-dom';

export const CuotasPagar = ({
    location: {
        state: { tipo, data, titles },
    },
}) => {
    const [imponible, setImponible] = useState(null);
    useEffect(() => {
        getImponible(tipo, data).then((response) => {
            setImponible(response);
        });
    }, [data, tipo]);

    if (imponible === null) return <Cargando />;

    if (imponible.error) {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col col-md-12">
                        <div className="col col-md-8 offset-md-2">
                            <div className="card background-main-div text-center">
                                <div className="card-body text-center">
                                    Debe ingrsar información
                                </div>
                                <div className="card-footer">
                                    <div className="btn-wrapper d-flex justify-content-between">
                                        <LinkBtn
                                            btnClass="btn btn-primary active"
                                            iClass="fa fa-arrow-circle-o-left"
                                            url="/apps/totems"
                                            desc="Volver"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col col-md-12">
                    <Link
                        to={{
                            pathname: '/apps/totems/pagar/',
                            state: { tipo: 'mensual', imponible, titles },
                        }}
                        className="btn btn-primary active"
                    >
                        <I classname="fa fa-arrow-circle-o-right" /> Mensual
                    </Link>
                    <Link
                        to={{
                            pathname: '/apps/totems/opciones-pago/',
                            state: { tipo: 'semestral', imponible, titles },
                        }}
                        className="btn btn-primary active"
                    >
                        <I classname="fa fa-arrow-circle-o-right" /> Semestral
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CuotasPagar;
