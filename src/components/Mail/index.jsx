import { useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

import { sendMailRecibo, sendMailSemestral } from './sendMail';
import { LinkBtn, Cargando } from '../shared';

import './mail.scss';

export const Mail = ({
    location: {
        state: { recibo, tipo, data },
    },
}) => {
    const [datos, setDatos] = useState(null);
    const [mail, setMail] = useState({});
    const checkMail = () => {
        const modalPrint = document.getElementById('modal-print');
        const isEmail = () => {
            // eslint-disable-next-line no-useless-escape
            const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(mail.mail);
        };
        if (!isEmail()) {
            alert('Ingrese un mail valido');
        } else {
            modalPrint.style.display = 'flex';
        }
    };

    const mailEquivocado = () => {
        const modalPrint = document.getElementById('modal-print');
        modalPrint.style.display = 'none';
    };

    const callSendMail = (tipo) => {
        setDatos('esperando');
        /* let mail = document.getElementById('mail').value; */
        if (tipo === 'recibo') {
            sendMailRecibo(mail.mail, recibo).then((response) => {
                setDatos(response);
            });
        }
        if (tipo === 'semestral') {
            sendMailSemestral(mail.mail, data.IMPONIBLE_ID, data.TR1E200_ID).then((response) => {
                setDatos(response);
            });
        }
    };

    const handleInputChange = (e) => {
        setMail({
            ...mail,
            [e.target.name]: e.target.value,
        });
    };

    const onChange = (input) => {
        setMail({
            ...mail,
            mail: input,
        });
    };

    // pregunta si estas seguro de enviar el mail, muestra gif cargando o mensaje mail enviado con exito
    const divCheckMail = (mail) => {
        if (datos == null) {
            return (
                <>
                    <div>
                        <h3 className="font-weight-bold text-primary">Su email es</h3>
                    </div>
                    <div>
                        <h4 className="font-weight-bold text-primary" id="sumail">
                            {mail.mail}
                        </h4>
                    </div>
                    <div>
                        <button onClick={() => callSendMail(tipo)} type="button" className="btn btn-info btn-si">
                            SI
                        </button>

                        <button onClick={mailEquivocado} type="button" className="btn btn-primary btn-no">
                            NO
                        </button>
                    </div>
                </>
            );
        } else if (datos === 'esperando') {
            return <Cargando />;
        } else if (datos != null && datos.error == null) {
            return (
                <>
                    <h3 className="font-weight-bold text-primary pb-3">¡Email enviado con éxito!</h3>
                    <LinkBtn
                        btnClass="btn btn-primary active"
                        iClass="fa fa-arrow-circle-o-left"
                        url="/apps/totems/"
                        desc="Volver al inicio"
                    />
                </>
            );
        }
    };

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 offset-md-3">
                    <div className="card background-main-div text-center">
                        <div className="card-header titulo-componente">
                            <span className="card-title font-weight-bold text-white">Enviar por email</span>
                        </div>
                        <div className="card-body">
                            <label className="pb-3" htmlFor="patente">
                                Ingrese su email
                            </label>
                            <input
                                type="text"
                                id="mail"
                                name="mail"
                                value={mail['mail'] ? mail['mail'] : ''}
                                className="form-control font-weight-bold"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="card-footer">
                            <div className="btn-wrapper text-center d-flex justify-content-between">
                                <LinkBtn btnClass="btn btn-primary" url="/apps/totems/" desc="VOLVER" />
                                <button type="button" id="enviar" onClick={checkMail} className="btn btn-success">
                                 ENVIAR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8 offset-md-2 pt-5">
                    <Keyboard
                        onChange={onChange}
                        layout={{
                            default: [
                                '.com .ar @ {bksp}',
                                '1 2 3 4 5 6 7 8 9 0',
                                'q w e r t y u i o p',
                                'a s d f g h j k l',
                                'z x c v b n m . - _',
                            ],
                        }}
                    />
                </div>
                <div className=" flex-column align-items-center justify-content-center confirmar-mail" id="modal-print">
                    {divCheckMail(mail)}
                </div>
            </div>
        </div>
    );
};

export default Mail;
