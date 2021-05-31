import { useState } from "react";
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
    const [mail, setMail] = useState(null);
  
    function isEmail(email) {
        // eslint-disable-next-line no-useless-escape
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    const checkMail = event => {
        let mail = document.getElementById("mail").value;
        let modalPrint = document.getElementById("modal-print");
        if (!isEmail(mail)) {
            alert('Ingrese un mail valido');
        } else {
            setMail(mail);
            modalPrint.style.display = 'flex';
        }
    };

    const mailEquivocado = event => {
        let modalPrint = document.getElementById("modal-print");
        modalPrint.style.display = 'none';
    };

    const callSendMail = event => {
        setDatos('esperando');
        let mail = document.getElementById('mail').value;
        sendMail(mail, recibo).then((response) => {
            setDatos(response);
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
                        <h4 className="font-weight-bold text-primary" id="sumail">{mail}</h4>
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
                    <h3 className="font-weight-bold text-primary pb-3">Mail Enviado con éxito!</h3>
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
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3 ">
          <div className="card background-main-div text-center">
            <div className="card-header titulo-componente">
              <span className="card-title font-weight-bold text-white">
                Enviar por email
              </span>
            </div>
            <div className="card-body">
              {" "}
              <label className="pb-3" htmlFor="patente">Ingrese su email</label>
              <input
                type="text"
                id="mail"
                className="form-control font-weight-bold"
              />
            </div>
            <div className="card-footer">
              <div className="btn-wrapper text-center d-flex justify-content-between">
                <LinkBtn
                  btnClass="btn btn-primary"
                  iClass="fa fa-arrow-circle-o-left"
                  url="/apps/totems/"
                  desc="VOLVER"
                />
                <button
                  type="button"
                  id="enviar"
                  onClick={checkMail}
                  className="btn btn-success"
                >
                  <i className="fa fa-envelope-o" aria-hidden="true"></i> Enviar
                </button>
              </div>
            </div>
          </div>

        </div>
        <div
          className=" flex-column align-items-center justify-content-center confirmar-mail"
          id="modal-print"
        >
          {divCheckMail(mail)}
        </div>
      </div>
    );
};

export default Mail;
