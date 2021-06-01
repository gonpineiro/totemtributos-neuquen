import { useState } from 'react';
import { Link } from 'react-router-dom';

import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { I, LinkBtn } from '../shared';

import "./styles.scss";

export const Form = ({ name, h2, label, inputName, tipo, nodesHtml, keyboardLayout, titles }) => {
  const [datos, setDatos] = useState({});

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const onChange = (input) => {
    setDatos({
      ...datos,
      [inputName]: input,
    });
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col col-md-8 offset-md-2">
          <div className="card background-main-div text-center">
            <div className="card-header titulo-componente text-center">
              <span className="card-title font-weight-bold text-white">
                {name}
              </span>
            </div>
            <div className="card-body text-center">
              <h2 className="text-primary">{h2}</h2>
              <h5 className="text-primary">{label}</h5>
              <input
                type="text"
                onChange={handleInputChange}
                name={inputName}
                className="form-control font-weight-bold text-center input text-uppercase mb-3"
                value={datos[inputName] ? datos[inputName] : ""}
              />
              {nodesHtml[0]}
            </div>
            <div className="card-footer">
              <div className="btn-wrapper d-flex justify-content-between">
                <LinkBtn btnClass="btn btn-primary active" iClass="fa fa-arrow-circle-o-left" url="/apps/totems" desc="Volver" />
                <Link
                  to={{
                    pathname: "/apps/totems/pagar/",
                    state: { tipo, data: datos[inputName], titles },
                  }}
                  className="btn btn-primary active"
                >
                  <I classname="fa fa-arrow-circle-o-right" />{" "}
                  Siguiente
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-8 pt-5 mx-auto">
          <Keyboard onChange={onChange} layout={keyboardLayout} />
        </div>
      </div>
    </div>
  );
};

export default Form;
