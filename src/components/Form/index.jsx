import { useState } from 'react';
import { Link } from 'react-router-dom';

import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { LinkBtn } from '../shared';

import './styles.scss';

export const Form = ({ label, inputName, tipo, nodesHtml, keyboardLayout, titles, maxinput }) => {
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
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col col-md-8 offset-md-2">
                        <div className="card">
                            <div className="card-header bg-header-card ">
                                <span className="card-title font-weight-bold">{titles.ayuda}</span>
                            </div>
                            <div className="card-body">
                                <div className="form-container">
                                    <span className="label-title text-center">{label}</span>
                                    <input
                                        id={inputName}
                                        maxLength={maxinput}
                                        size={maxinput}
                                        type="text"
                                        onChange={handleInputChange}
                                        name={inputName}
                                        className="form-control font-weight-bold input text-uppercase item"
                                        value={datos[inputName] ? datos[inputName] : ''}
                                        autoComplete={'on'}
                                    />
                                    <Link
                                        to={{
                                            pathname: '/apps/totems/opciones-pago/',
                                            state: { tipo, data: datos[inputName], titles },
                                        }}
                                        className="btn btn-form active text-uppercase"
                                    >
                                        Siguiente
                                    </Link>
                                </div>
                                <div className="label">{nodesHtml[1]}</div>
                            </div>
                            <div className="text-center pb-3">
                                <LinkBtn btnClass="btn btn-form active text-uppercase" url="/apps/totems" desc="SALIR" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 pt-3 mx-auto">
                        <Keyboard onChange={onChange} layout={keyboardLayout} maxLength={{ [inputName]: maxinput }} inputName={inputName} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;
