import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Cargando, Error, LinkBtn } from "../shared";

import { getImponible } from "./ctaCtoAxios";

import Header from "../Layout/header.tsx";
import { YEAR_NOW } from "../utils/const";

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
  
    if (imponible.error) return <Error msg={'Por favor, verifique los datos ingresados.'} />;

    if (imponible.estado_complementario === 'Caducado') return <Error msg={'Caducado'} />;


  if (imponible.error) {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col col-md-12">
            <div className="col col-md-8 offset-md-2">
              <div className="card background-main-div text-center">
                <div className="card-body text-center">
                  Debe ingresar información
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
    <div>
      <Header />
      <div className="container">
        <div className="row mt-5">
          <div className="col col-md-12 text-center pt-5">
            <Link
              to={{
                pathname: "/apps/totems/pagar-mensual/",
                state: { imponible, titles },
              }}
              className="btn btn-form active text-uppercase m-4"
            >
              Emisión/ PAGO recibos año {YEAR_NOW} (mensual/ semestral)
            </Link>
          </div>
          <div className="col col-md-12 text-center">
            {" "}
            <Link
              to={{
                pathname: "/apps/totems/pagar-semestral/",
                state: { imponible },
              }}
              className="btn btn-form active text-uppercase m-4"
            >
              Reimprimir recibo 1er semestre {YEAR_NOW} (pdf)
            </Link>
          </div>
          <div className="col-12 text-center mt-5">
            <Link
              to="/apps/totems"
              className="btn btn-form active mb-1 text-center"
            >
              Volver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuotasPagar;
