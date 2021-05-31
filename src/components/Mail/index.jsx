import { useState } from "react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

import { sendMail } from './sendMail';
import { LinkBtn, Cargando } from '../shared';

import './mail.scss';

export const Mail = ({
    location: {
        state: {
            recibo,
        },
    },
}) => {
    const [datos, setDatos] = useState(null);
    const [mail, setMail] = useState({});

    const checkMail = () => {
        const modalPrint = document.getElementById("modal-print");
        const isEmail = () => {
            // eslint-disable-next-line no-useless-escape
            const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(mail.mail);
        }
        if (!isEmail()) {
            alert('Ingrese un mail valido');
        } else {
            modalPrint.style.display = 'flex';
        }
    };

    const mailEquivocado = () => {
        const modalPrint = document.getElementById("modal-print");
        modalPrint.style.display = 'none';
    };

    const callSendMail = () => {
        setDatos('esperando');
        /* let mail = document.getElementById('mail').value; */
        sendMail(mail.mail, recibo).then((response) => {
            setDatos(response);
        });
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
                        <h3 className="font-weight-bold text-primary">Su mail es</h3>
                    </div>
                    <div>
                        <h4 className="font-weight-bold text-primary" id="sumail">{mail.mail}</h4>
                    </div>
                    <div>
                        <button onClick={callSendMail} type="button" className="btn btn-info btn-si">
                            SI
                        </button>

                        <button onClick={mailEquivocado} type="button" className="btn btn-primary btn-no">
                            NO
                        </button>
                    </div>
                </>
            )
        } else if (datos === 'esperando') {
            return <Cargando />
        } else if (datos != null && datos.error == null) {
            return (
                <>
                    <h3 className="font-weight-bold text-primary">Mail Enviado con exito!</h3>
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
        <div className="row mt-4">
            <div className="col"></div>
            <div className="col-md-6 p-3 text-center input-wrapper">
                <h2 className="text-primary mb-3 text-center">Enviar por mail</h2>
                <label htmlFor="patente">Ingrese su mail</label>
                <input
                    type="text"
                    id="mail"
                    name="mail"
                    value={mail['mail'] ? mail['mail'] : ""}
                    className="form-control font-weight-bold"
                    onChange={handleInputChange}
                />
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" id="enviar" onClick={checkMail} className="btn btn-success float-right mb-3 mt-4 col-md-3">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i> Enviar
                    </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <LinkBtn
                            btnClass="btn btn-primary float-right float-right col-md-3"
                            iClass="fa fa-arrow-circle-o-right"
                            url="/apps/totems/"
                            desc="VOLVER"
                        />
                    </div>
                </div>

            </div>
            <div className="col"></div>
            <div className=" flex-column align-items-center justify-content-center confirmar-mail" id="modal-print" >
                {divCheckMail(mail)}
            </div>
            <div className="row">
                <div className="col-8 pt-5 mx-auto">
                    <Keyboard onChange={onChange} 
                    layout={{
                        'default': [
                            '.com .ar @ {bksp}',
                            '1 2 3 4 5 6 7 8 9 0',
                            'q w e r t y u i o p',
                            'a s d f g h j k l',
                            'z x c v b n m . - _'                            
                        ],
                    }} />
                </div>
            </div>
        </div>
    );
};

export default Mail;
