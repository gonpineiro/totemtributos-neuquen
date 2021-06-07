import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Cargando, Error, I } from '../shared';

import { getImponible } from './ctaCtoAxios';

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

    if (imponible.error) return <Error msg={'Debe ingrsar información'} />;

    if (imponible.estado_complementario === 'Caducado') return <Error msg={'Caducado'} />;

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col col-md-12">
                    <Link
                        to={{
                            pathname: '/apps/totems/pagar-mensual/',
                            state: { imponible, titles },
                        }}
                        className="btn btn-primary active"
                    >
                        <I classname="fa fa-arrow-circle-o-right" /> Mensual
                    </Link>
                    {tipo !== 'PPG' && (
                        <Link
                            to={{
                                pathname: '/apps/totems/pagar-semestral/',
                                state: { imponible },
                            }}
                            className="btn btn-primary active"
                        >
                            <I classname="fa fa-arrow-circle-o-right" /> Semestral
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CuotasPagar;
