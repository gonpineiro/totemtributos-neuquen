import { useEffect, useState } from 'react';
import { recibo } from './reciboAxios';
import { I, LinkBtn, Cargando } from '../shared';

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
                  <I classname="fa fa-print" />
                  IMPRIMIR
                  </button>

                <LinkBtn
                  btnClass="btn btn-primary active m-3"
                  iClass="fa fa-arrow-circle-o-left"
                  url="/apps/totems/rodado"
                  desc="VOLVER"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
