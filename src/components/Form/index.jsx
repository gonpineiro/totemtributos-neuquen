import { useState } from 'react';
import { Link } from 'react-router-dom';
/* import Teclado from './Teclado'; */

import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

import "./styles.scss";

export const Form = ({ name, h2, label, inputName, tipo, nodesHtml }) => {
  const [datos, setDatos] = useState({});

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  const onChange = (input) => {
    console.log(input);
    setDatos({
      ...datos,
      [inputName]: input,
    });
  };

  const Key = () => (
    <Keyboard onChange={onChange}
      layout={{
        'default': [
          '1 2 3 4 5 6 7 8 9 0',
          'Q W E R T Y U I O P',
          'A S D F G H J K L -',
          'Z X C V B N M {bksp}',
        ],
      }} />
  )

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
                className="form-control font-weight-bold text-center input-rodados"
                value={datos[inputName] ? datos[inputName] : ""}
              />
              {nodesHtml[0]}
            </div>
            <div className="card-footer">
              <div className="btn-wrapper d-flex justify-content-between">
                <Link
                  to="/apps/totems"
                  type="button"
                  className="btn btn-primary active"
                >
                  <i
                    className="fa fa-arrow-circle-o-left"
                    aria-hidden="true"
                  ></i>{" "}
                  Volver
                </Link>
                <Link
                  to={{
                    pathname: "/apps/totems/pagar/",
                    state: { tipo: tipo, data: datos[inputName] },
                  }}
                  className="btn btn-primary active"
                >
                  <i
                    className="fa fa-arrow-circle-o-right"
                    aria-hidden="true"
                  ></i>{" "}
                  Siguiente
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-12 pt-5 mx-auto">{Key()}</div>
      </div>
    </div>
  );
};

export default Form;
