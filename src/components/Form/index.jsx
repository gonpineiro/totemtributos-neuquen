import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/header.tsx";
import TipoImp from "../Main/TipoImp.jsx";

import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { LinkBtn } from "../shared";
import { IconoCuotasPagar } from "../Main/iconos/iconos.js";


import "./styles.scss";

export const Form = ({
  name,
  h2,
  label,
  inputName,
  tipo,
  nodesHtml,
  keyboardLayout,
  titles,
}) => {
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
    <div>
      <Header />
      <div className="text-center btn-titulo">
        <TipoImp name={name} url={name} icono={[<IconoCuotasPagar />]} />
      </div>
      <div className="container">
        <div className="row mt-1">
          <div className="col col-md-8 offset-md-2">
            <div className="card">
              <div className="card-header bg-header-card ">
                <span className="card-title font-weight-bold">
                  Selector de {name}
                </span>
              </div>
              <div className="card-body">
                <div className="form-container">
                  <span className="label-title text-center">{label}</span>
                  <input
                    type="text"
                    onChange={handleInputChange}
                    name={inputName}
                    className="form-control font-weight-bold input text-uppercase item"
                    value={datos[inputName] ? datos[inputName] : ""}
                  />
                  <Link
                    to={{
                      pathname: "/apps/totems/opciones-pago/",
                      state: { tipo, data: datos[inputName], titles },
                    }}
                    className="btn btn-form active text-uppercase"
                  >
                    Siguiente
                  </Link>
                </div>
                <div className="label">{nodesHtml[0]}</div>
              </div>
              <div className="text-center pb-3">
                <LinkBtn
                  btnClass="btn btn-form active text-uppercase"
                  url="/apps/totems"
                  desc="Volver"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8 pt-3 mx-auto">
            <Keyboard onChange={onChange} layout={keyboardLayout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
