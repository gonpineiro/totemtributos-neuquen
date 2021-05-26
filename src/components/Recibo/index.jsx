import { useEffect, useState } from 'react';
import { recibo } from './reciboAxios';

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

    if (pdf === null || undefined) return 'Cargando';
    return (
        <div className="row mt-4">
            <div className="col"></div>
            <div className="col-md-8 text-center">
                <div className="row">
                    <div className="col-md-7 text-white font-weight-bold d-flex align-items-center justify-content-center">
                        <div>RECIBO</div>
                        <iframe src={pdf} height="600px" width="100%" title={' '}></iframe>
                    </div>
                    <div className="col-md-5 pull-right d-flex align-items-center justify-content-center">
                        <div className="row">
                            <div className="col-md-12">
                                <button onClick={() => window.print()} type="button" className="btn btn-info active mb-5 btn-imprimir">
                                    <i className="fa fa-print" aria-hidden="true"></i> IMPRIMIR
                                </button>
                            </div>
                            <div className="col-md-12">
                                    <a href="cuotas-a-pagar.html" type="button" className="btn btn-primary active">
                                        <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i> VOLVER
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
                <div className="d-flex align-items-center justify-content-center" id="modal-print">
                    <i className="fa fa-print fa-5x text-primary" aria-hidden="true"></i>{' '}
                    <h3 className="ml-5 font-weight-bold text-primary">IMPRIMIENDO</h3>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center" id="modal-can-print">
                    <div>
                        <h3 className="font-weight-bold text-primary">Pudo imprimir?</h3>
                    </div>
                    <div>
                        <a href="index.html" type="button" className="btn btn-info active">
                            SI
                    </a>

                        <a href="index.html" type="button" className="btn btn-primary active" id="no-pudo-imprimir">
                            NO
                    </a>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center" id="modal-reimprimir">
                    <div>
                        <button onClick={() => window.print()} type="button" className="btn btn-info active btn-imprimir">
                            REIMPRIMIR
                    </button>
                    </div>
                </div>
            </div>
    );
};
