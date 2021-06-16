import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { I, LinkBtn, Cargando, Error, Recycle, Confirm } from '../shared';
import printIframe from '../utils/printIframe';

import { recibo } from './reciboAxios';
import './recibo.scss';
<<<<<<< HEAD
import { TIME_PRINT, TIME_PRINT_CONFIRM, TIME_RETURN } from '../utils/const';
=======
import { TIME_PRINT, TIME_PRINT_CONFIRM, TIME_RETURN_PRINT } from '../utils/const';
>>>>>>> timeout

export const Recibo = ({
    location: {
        state: { impApagar, tr02100_id },
    },
}) => {
    const history = useHistory();
    const [pdf, setPdf] = useState(null);
    const [print, setPrint] = useState(null);

    useEffect(() => {
        const timeOutReturn = setTimeout(() => history.push('/apps/totems'), TIME_RETURN_PRINT);
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
        return () => {
            clearTimeout(timeOutReturn);
        };
    }, [history, impApagar, tr02100_id]);

    const printModal = () => {
        printIframe('pdf');

        setTimeout(() => setPrint('imprimiendo'), TIME_PRINT);

        setTimeout(() => setPrint('confirmacion'), TIME_PRINT_CONFIRM);
    };

    if (print === 'imprimiendo') return <Cargando str={'Aguarde mientra se imprime su recibo'} />;

    if (print === 'confirmacion') return <Confirm msg={'¿Se logro imprimir?'} setPrint={setPrint} />;

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
                        <div className="card-body text-center recycle">
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
                                <LinkBtn btnClass="btn btn-primary active m-3" url="/apps/totems/" desc="SALIR" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
