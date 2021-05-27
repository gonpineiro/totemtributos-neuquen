import { useState } from 'react';
import { sendMail } from './sendMail';
import './mail.scss';

import { Link } from 'react-router-dom';

export const Mail = ({
    location: {
        state: { tipo, data },
    },
}) => {
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    const checkMail = event => {
        let mail = document.getElementById("mail").value;
        let modalPrint = document.getElementById("modal-print");
        let sumail = document.getElementById("sumail");
        if( !isEmail( mail ) ){
                alert('Ingrese un mail valido');
        }else{
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
                    <a type="button" id="enviar" onClick={checkMail} className="btn btn-success float-right mb-3 mt-4 col-md-3">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i> Enviar
                    </a>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <Link
                        to={{ pathname: '/apps/totems/pagar/', state: { tipo: tipo, data: data} }}
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
                <a onClick={callSendMail} type="button" className="btn btn-info btn-si">
                    SI
                </a>
                
                <a onClick={mailEquivocado} type="button" className="btn btn-primary btn-no">
                    NO
                </a>
                </div>
            </div>
        </div>
    );
};

export default Mail;
