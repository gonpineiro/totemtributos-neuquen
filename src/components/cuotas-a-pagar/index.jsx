import { useEffect, useState } from "react";
import "./cuotas-a-pagar.scss";

import { imponible } from "./ctaCtoAxios";
import { Row } from "./Row";
import { Error } from "../shared/Error";
import { Link } from "react-router-dom";

import { I, LinkBtn, Cargando } from "../shared";
import { YEAR_NOW } from "../utils/const";

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
          to={{ pathname: "/apps/totems/recibo/", state: { impApagar, datos } }}
          type="button"
          className="btn btn-info active"
        >
          <i className="fa fa-print" aria-hidden="true"></i> GENERAR RECIBO
        </Link>
      );
    } else {
      return (
        <Link type="button" className="btn bg-info disabled ">
          <i className="fa fa-print" aria-hidden="true"></i> GENERAR RECIBO
        </Link>
      );
    }
  };
  if (datos == null) return <Cargando />;

  if (datos === -1)
    return <Error msg={"Espere unos minutos e intente nuevamente por favor"} />;

  if (datos.error) return <Error msg={datos.error} />;

  if (datos.impuestos.length === 0)
    return (
      <Error
        msg={
          "El tributo no registra items a pagar en el periodo " + YEAR_NOW + "."
        }
      />
    );

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col col-md-12">
          <div className="card background-main-div">
            <div className="card-header titulo-componente text-center">
              <span className="card-title font-weight-bold text-white text-uppercase">
                Seleccionar las cuotas que desea pagar
              </span>
            </div>
            <p className="titulo">Dominio : {datos.imp_identificacion}</p>
            <p className="subtitulo">Marca-Modelo-Año : {datos.imp_nombre}</p>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="col-2 text-center">Pagar</th>
                      <th className="col-2 text-center">Cuota</th>
                      <th className="col-2 text-center">Vencimiento</th>
                      <th className="col-2 text-center">Valor</th>
                      <th className="col-2 text-center">Intereses</th>
                      <th className="col-2 text-center">
                        <span className="">Importe Total</span>
                      </th>
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
            <div
              className="card-footer container"
              style={{ backgroundColor: "#F0F9FC", borderTop: "none" }}
            >
              <div className="col-2 offset-10">
                <h5 className="text-center" style={{ marginRight: "15px" }}>
                  Total: ${" "}
                  {impApagar
                    .reduce((acc, curr) => acc + curr.total, 0)
                    .toFixed(2)}
                </h5>
              </div>
            </div>
            <div className="card-footer">
              <div className="btn-wrapper text-center d-flex justify-content-between">
                <LinkBtn
                  btnClass="btn btn-primary active"
                  iClass="fa fa-arrow-circle-o-left"
                  url="/apps/totems/rodado"
                  desc="Volver"
                />
                {BtnPrint()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuotasPagar;
