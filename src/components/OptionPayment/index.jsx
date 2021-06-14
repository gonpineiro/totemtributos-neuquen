import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Cargando, Error } from '../shared';

import { getImponible } from './ctaCtoAxios';

import { YEAR_NOW } from '../utils/const';
import "./optionpayment.scss";

export const CuotasPagar = ({
    location: {
        state: { tipo, data, titles },
    },
}) => {
  const history = useHistory();
    const [imponible, setImponible] = useState(null);

    useEffect(() => {
      const timeOutReturn = setTimeout(() => history.push('/apps/totems'), 110000);
        getImponible(tipo, data).then((response) => {
            setImponible(response);
        });
        return () => {
            clearTimeout(timeOutReturn);
        };
    }, [data, history, tipo]);

    if (imponible === null) return <Cargando />;

    if (imponible.error) return <Error msg={'Por favor, verifique los datos ingresados.'} />;

    if (imponible.estado_complementario === 'Caducado') return <Error msg={'Caducado'} />;
    return (
      <div className="container">
        <div className="row mt-5">
          <h2 className="text-center pt-3">Seleccione una opción</h2>
          <div className="col col-md-12 text-center">
            <Link
              to={{
                pathname: "/apps/totems/pagar-mensual/",
                state: { imponible, titles, tipo },
              }}
              className="btn btn-form active text-uppercase m-4"
            >
              Generar recibos mensuales {YEAR_NOW}
            </Link>
          </div>
          <div className="col col-md-12 text-center">
            {tipo !== "PPG" && (
              <Link
                to={{
                  pathname: "/apps/totems/pagar-semestral/",
                  state: { imponible },
                }}
                className="btn btn-form active text-uppercase m-4"
              >
                Generar recibo semestral
              </Link>
            )}
          </div>
          <div className="col-12 text-center mt-5">
            <Link
              to="/apps/totems"
              className="btn btn-form active mb-1 text-center"
            >
              SALIR
            </Link>
          </div>
        </div>
      </div>
    );
};

export default CuotasPagar;
