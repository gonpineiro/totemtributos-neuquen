import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './index.scss';

import { I, LinkBtn, Cargando, Error, Recycle, Confirm } from '../shared';
import printIframe from '../utils/printIframe';

import { ctaCorriente } from './ctaCorriente';
import { TIME_PRINT, TIME_PRINT_CONFIRM, TIME_RETURN } from '../utils/const';

export const PagarSemestral = ({
    location: {
        state: {
            imponible: { tr02100_id },
        },
    },
}) => {
    const history = useHistory();
    const [emision, setEmision] = useState(null);
    const [print, setPrint] = useState(null);

    useEffect(() => {
        const timeOutReturn = setTimeout(() => history.push('/apps/totems'), TIME_RETURN);
        ctaCorriente(tr02100_id).then((response) => {
            if (response !== -1) {
                const reader = new FileReader();
                reader.readAsDataURL(response.blob);
                reader.onload = () => {
                    setEmision({
                        pdf: reader.result,
                        data: response.data,
                    });
                };
            } else {
                setEmision(response);
            }
        });
        return () => {
            clearTimeout(timeOutReturn);
        };
    }, [history, tr02100_id]);

    const printModal = () => {
        printIframe('pdf');

        setTimeout(() => setPrint('imprimiendo'), TIME_PRINT);

        setTimeout(() => setPrint('confirmacion'), TIME_PRINT_CONFIRM);
    };

    if (print === 'imprimiendo') return <Cargando str={'Aguarde mientra se imprime su recibo'} />;

    if (print === 'confirmacion') return <Confirm msg={'¿Se logro imprimir?'} setPrint={setPrint} />;

    if (emision === null || undefined) return <Cargando />;

    if (emision === -1) return <Error msg={'Espere unos minutos e intente nuevamente por favor'} />;

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-8">
                    <iframe src={emision.pdf} height="580px" width="100%" id="pdf" title={' '}></iframe>
                </div>
                <div className="col-md-4">
                    <div className="card background-main-div text-center">
                        <div className="card-header titulo-componente text-center">
                            <span className="card-title font-weight-bold text-white">RECIBO</span>
                        </div>
                        <div className="card-body text-center">Se generó su recibo semestral, ¿Desea enviarlo por email o imprimirlo?</div>
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
                                        state: { data: emision.data, tipo: 'semestral' },
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

export default PagarSemestral;
