import { useEffect, useState } from 'react';
import { recibo } from './reciboAxios';
import { Cargando } from "../cargando/Cargando";
import { Link } from "react-router-dom";


export const Recibo = ({
    location: {
        state: {
            impApagar,
            datos: { tr02100_id },
        },
    },
}) => {
    const [pdf, setPdf] = useState(null);

    useEffect(() => {
        recibo(tr02100_id, impApagar).then((response) => {
            const reader = new FileReader();
            reader.readAsDataURL(response);
            reader.onload = () => {
                setPdf(reader.result);
            };

        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (pdf === null || undefined) return <Cargando />;
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8">
            <iframe src={pdf} height="580px" width="100%" title={" "}></iframe>
          </div>
          <div className="col-md-4">
            <div className="card background-main-div text-center">
              <div className="card-header titulo-componente text-center">
                <span className="card-title font-weight-bold text-white">
                  RECIBO
                </span>
              </div>
              <div className="card-body text-center">
                  Algún texto más acá?
              </div>
              <div className="card-footer">
                <div className="btn-wrapper">
                  <button
                    onClick={() => window.print()}
                    type="button"
                    className="btn btn-info active m-3"
                  >
                    <i className="fa fa-print" aria-hidden="true"></i> IMPRIMIR
                  </button>
                  <a
                    href="cuotas-a-pagar.html"
                    type="button"
                    className="btn btn-primary active m-3"
                  >
                    <i
                      className="fa fa-arrow-circle-o-left"
                      aria-hidden="true"
                    ></i>{" "}
                    VOLVER
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*           <div
            className="d-flex align-items-center justify-content-center"
            id="modal-print"
          >
            <i
              className="fa fa-print fa-5x text-primary"
              aria-hidden="true"
            ></i>{" "}
            <h3 className="ml-5 font-weight-bold text-primary">IMPRIMIENDO</h3>
          </div>
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            id="modal-can-print"
          >
            <div>
              <h3 className="font-weight-bold text-primary">Pudo imprimir?</h3>
            </div>
            <div>
              <a
                href="index.html"
                type="button"
                className="btn btn-info active"
              >
                SI
              </a>

              <a
                href="index.html"
                type="button"
                className="btn btn-primary active"
                id="no-pudo-imprimir"
              >
                NO
              </a>
            </div>
          </div>
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            id="modal-reimprimir"
          >
            <div>
              <button
                onClick={() => window.print()}
                type="button"
                className="btn btn-info active btn-imprimir"
              >
                REIMPRIMIR
              </button>
            </div>
          </div>*/}
        </div>
      </div>
    );
};
