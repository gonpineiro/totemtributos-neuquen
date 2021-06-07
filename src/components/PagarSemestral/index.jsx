import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { I, LinkBtn, Cargando, Error, Recycle } from '../shared';
import printIframe from '../utils/printIframe';

import { ctaCorriente } from './ctaCorriente';

export const PagarSemestral = ({
    location: {
        state: {
            imponible: { tr02100_id },
        },
    },
}) => {
    const [emision, setEmision] = useState(null);

    useEffect(() => {
        ctaCorriente(tr02100_id).then((response) => {
            if (response !== -1) {
                const reader = new FileReader();
                reader.readAsDataURL(response.blob);
                reader.onload = () => {
                    setEmision({
                        pdf: reader.result,
                        data: response.data
                    });
                };
            } else {
                setEmision(response);
            }
        });
    }, [tr02100_id]);

    if (emision === null || undefined) return <Cargando />;

    if (emision === -1) return <Error msg={'Espere unos minutos e intente nuevamente por favor'} />;

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-8">
                    <iframe src={emision.pdf} height="580px" width="100%" id="pdf" title={' '}></iframe>
                </div>
                <div className="col-md-4">
                    <div className="card background-main-div text-center">
                        <div className="card-header titulo-componente text-center">
                            <span className="card-title font-weight-bold text-white">RECIBO</span>
                        </div>
                        <div className="card-body text-center">Se generó el recibo Nro , ¿Desea enviarlo por email o imprimirlo?</div>
                        <div className="card-body text-center">
                            <div className="d-inline-flex">
                                <Recycle /> <span>Para pagar online escanea el código QR</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="btn-wrapper">
                                <button onClick={() => printIframe('pdf')} type="button" className="btn btn-info active m-3">
                                    <I classname="fa fa-print" /> IMPRIMIR
                                </button>
                                <Link
                                    to={{
                                        pathname: '/apps/totems/mail/',
                                        state: { data: emision.data, tipo: 'semestral' }
                                    }}
                                    className="btn btn-primary mb-1 float-right"
                                >
                                    <I classname="fa fa-envelope-o" /> ENVIAR POR EMAIL
                                </Link>
                                <LinkBtn
                                    btnClass="btn btn-primary active m-3"
                                    iClass="fa fa-arrow-circle-o-left"
                                    url="/apps/totems/"
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

export default PagarSemestral;