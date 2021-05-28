/* eslint-disable jsx-a11y/heading-has-content */
import { sendMail } from './sendMail';
import './mail.scss';

import { Link } from 'react-router-dom';

export const Mail = () => {
    function isEmail(email) {
        // eslint-disable-next-line no-useless-escape
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    const checkMail = event => {
        let mail = document.getElementById("mail").value;
        let modalPrint = document.getElementById("modal-print");
        let sumail = document.getElementById("sumail");
        if (!isEmail(mail)) {
            alert('Ingrese un mail valido');
        } else {
            sumail.innerHTML = mail;
            modalPrint.style.display = 'flex';
        }
    };

    const mailEquivocado = event => {
        let modalPrint = document.getElementById("modal-print");
        modalPrint.style.display = 'none';
    };

    const callSendMail = event => {
        let mail = document.getElementById('mail').value;
        sendMail(mail).then((response) => {
            console.log('Response:',response);
            if (response.error == null) {
                console.log('Mail enviado con Exito!');
            }
        });
    };


    return (
        <div className="row mt-4">
            <div className="col"></div>
            <div className="col-md-6 p-3 text-center input-wrapper">
                <h2 className="text-primary mb-3 text-center">Enviar por mail</h2>
                <label htmlFor="patente">Ingrese su mail</label>
                <input type="text" id="mail" className="form-control font-weight-bold" />
                <div className="row">
                    <div className="col-md-12">
                        <button type="button" id="enviar" onClick={checkMail} className="btn btn-success float-right mb-3 mt-4 col-md-3">
                            <i className="fa fa-envelope-o" aria-hidden="true"></i> Enviar
                    </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Link
                            to="/apps/totems/pagar/"
                            className="btn btn-primary float-right float-right col-md-3"
                        >
                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                        VOLVER
                    </Link>
                    </div>
                </div>

            </div>
            <div className="col"></div>
            <div className=" flex-column align-items-center justify-content-center confirmar-mail" id="modal-print" >
                <div>
                    <h3 className="font-weight-bold text-primary">Su mail es</h3>
                </div>
                <div>
                    <h4 className="font-weight-bold text-primary" id="sumail"></h4>
                </div>
                <div>
                    <button onClick={callSendMail} type="button" className="btn btn-info btn-si">
                        SI
                    </button>

                    <button onClick={mailEquivocado} type="button" className="btn btn-primary btn-no">
                        NO
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Mail;
