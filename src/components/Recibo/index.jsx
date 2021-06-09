import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { I, LinkBtn, Cargando, Error, Recycle } from '../shared';
import printIframe from '../utils/printIframe';

import { recibo } from './reciboAxios';
import './recibo.scss';
export const Recibo = ({
    location: {
        state: { impApagar, tr02100_id },
    },
}) => {
    const [pdf, setPdf] = useState(null);
    const [print, setPrint] = useState(false);

    useEffect(() => {
        recibo(tr02100_id, impApagar).then((response) => {
            if (response !== -1) {
                const reader = new FileReader();
                reader.readAsDataURL(response.blob);
                reader.onload = () => {
                    setPdf({
                        pdf: reader.result,
                        recibo: response.recibo,
                    });
                };
            } else {
                setPdf(response);
            }
        });
    }, [impApagar, tr02100_id]);

    const printModal = () => {
        setPrint(true);
        setTimeout(() => {
            setPrint(false);
        }, 3000);
        setTimeout(() => {
            printIframe('pdf');
        }, 4000);
    };

    const ModalPrint = () => (
        <div className="container">
            <div>
                <h3 className="font-weight-bold text-primary">Su email es</h3>
            </div>
            <div>
                <h4 className="font-weight-bold text-primary" id="sumail"></h4>
            </div>
            <div>
                <button type="button" className="btn btn-info btn-si">
                    SI
                </button>

                <button onClick={''} type="button" className="btn btn-primary btn-no">
                    NO
                </button>
            </div>
        </div>
    );

    if (print) return <ModalPrint />;

    if (pdf === null || undefined) return <Cargando />;

    if (pdf === -1) return <Error msg={'Espere unos minutos e intente nuevamente por favor'} />;

    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col-md-8">
                    <iframe src={pdf.pdf} height="580px" width="100%" id="pdf" title={' '}></iframe>
                </div>
                <div className="col-md-4">
                    <div className="card background-main-div text-center">
                        <div className="card-header titulo-componente text-center">
                            <span className="card-title font-weight-bold text-white">RECIBO</span>
                        </div>
                        <div className="card-body text-center">
                            Se generó el recibo Nro {pdf.recibo}, ¿Desea enviarlo por email o imprimirlo?
                        </div>
                        <div className="card-body text-center">
                            <div className="d-inline-flex">
                                <Recycle /> <span>Para pagar online escanea el código QR</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="btn-wrapper">
                                <button onClick={() => printModal()} type="button" className="btn btn-info active m-3">
                                    <I classname="fa fa-print" /> IMPRIMIR
                                </button>
                                <Link
                                    to={{
                                        pathname: '/apps/totems/mail/',
                                        state: { recibo: pdf.recibo, tipo: 'recibo' },
                                    }}
                                    className="btn btn-success mb-1 float-right"
                                >
                                    <I classname="fa fa-envelope-o" /> ENVIAR POR EMAIL
                                </Link>
                                <LinkBtn btnClass="btn btn-primary active m-3" url="/apps/totems/" desc="VOLVER" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
