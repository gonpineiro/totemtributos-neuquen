import { useEffect, useState } from 'react';
/* import './cuotas-a-pagar.scss'; */

import { getImponible } from './ctaCtoAxios';
import { Cargando, I } from '../shared';
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
