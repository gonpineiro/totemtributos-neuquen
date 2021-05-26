import { useEffect, useState } from 'react';
import './cuotas-a-pagar.scss';

import { imponible } from './ctaCtoAxios';
import { Row } from './Row';
import { Error } from './Error';
import { Cargando } from "../cargando/Cargando";
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

    const handlerCheckboxChance = (event, total) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) setImpApagar([...impApagar, { value, total }]);

        if (!isChecked) {
            const array = [...impApagar];
            array.splice(array.indexOf(value));
            setImpApagar(array);
        }
    };

    const BtnPrint = () => {
        if (impApagar.length > 0) {
            return (
                <Link
                    to={{ pathname: '/apps/totems/recibo/', state: { impApagar, datos } }}
                    type="button"
                    className="btn btn-info active mb-1 pull-right col-md-5"
                >
                    <i className="fa fa-print" aria-hidden="true"></i> IMPRIMIR
                </Link>
            )
        }
    }

    if (datos == null) return 'Cargando';

    if (datos.error) return <Error error={datos.error} />;
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col col-md-10 offset-md-1">
            <div className="card background-main-div">
              <div className="card-header card-title">
                <h2 className="text-primary mb-3 text-center">
                  Seleccionar las cuotas que desea pagar
                </h2>{" "}
              </div>
            <p className="titulo text-center">Dominio : {datos.imp_identificacion}</p>
            <p className="subtitulo text-center">Marca-Modelo-Año : {datos.imp_nombre}</p>
              <div className="card-body">
                {" "}
                <div className="table-responsive alto-tabla">
                  <table className="table">
                    <thead>
                        <tr>
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
                </div>
              </div>
              <div className="card-footer">
                <div className="btn-wrapper text-center d-flex justify-content-between">
                  <a
                    href="rodados.html"
                    type="button"
                    className="btn btn-primary active mb-1 pull-left"
                  >
                    <i
                      className="fa fa-arrow-circle-o-left"
                      aria-hidden="true"
                    ></i>{" "}
                    VOLVER
                  </a>
                  <a
                    href="enviar.html"
                    type="button"
                    id="enviar"
                    className="btn btn-md btn-success active mb-1 pull-left"
                  >
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                    ENVIAR POR MAIL
                  </a>
                  {BtnPrint()}
                </div>
              </div>
            </div>
          </div>
{/*           <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 p-3 text-center background-main-div card">
            <h2 className="text-primary mb-3 text-center">
              Seleccionar las cuotas que desea pagar
            </h2>
            <p className="titulo">Dominio : {datos.imp_identificacion}</p>
            <p className="subtitulo">Marca-Modelo-Año : {datos.imp_nombre}</p>
            <div className="table-responsive alto-tabla">
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
            </div>

            <div className="row mb-4">
              <div className="col-md-3 text-info d-flex font-weight-bold">
                Total a pagar $ <span id="totalpagar">{sum}</span>
              </div>
               <div className="col-md-2 col-md-3 text-primary font-weight-bold">
                        <a href="qr.html">Generar QR</a>
                    </div> 
            </div>
            <div className="row">
              <div className="col-md-7">
                <a
                  href="rodados.html"
                  type="button"
                  className="btn btn-primary active mb-1 pull-left col-md-5"
                >
                  <i
                    className="fa fa-arrow-circle-o-left"
                    aria-hidden="true"
                  ></i>{" "}
                  VOLVER
                </a>
                <Link
                  to={{
                    pathname: "/apps/totems/recibo/",
                    state: { impApagar, datos },
                  }}
                  type="button"
                  className="btn btn-info active mb-1 pull-right col-md-5"
                >
                  <i className="fa fa-print" aria-hidden="true"></i> IMPRIMIR
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7 mt-3">
                <a
                  href="enviar.html"
                  type="button"
                  id="enviar"
                  className="btn btn-md btn-success active mb-1 pull-left col-md-5"
                >
                  <i className="fa fa-envelope-o" aria-hidden="true"></i> ENVIAR
                  POR MAIL
                </a>
                 <a href="pagar.html" type="button" className="btn btn-danger active mb-1 pull-right col-md-5">
                            <i className="fa fa-calculator" aria-hidden="true"></i> PAGAR EN LINEA
                        </a> 
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
};

export default CuotasPagar;
