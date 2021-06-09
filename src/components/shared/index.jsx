import { Link } from 'react-router-dom';
import './index.scss';

export const I = ({ classname }) => <i className={classname} aria-hidden="true"></i>;

export const Error = ({ msg }) => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center mt-5">
                <div className="row mt-5">
                    <div className="p-3 text-center background-main-div">
                        <h2 className="titulo-mensaje  mb-3 text-center">Información</h2>
                        <p className="mensaje text-center">{msg}</p>
                    </div>
                    <div className="pt-3 text-center">
                        <Link to="/apps/totems" className="btn btn-primary active mb-1  text-center">
                            VOLVER
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const LinkBtn = ({ btnClass, iClass, url, desc }) => (
    <Link to={url} className={btnClass}>
        <I classname={iClass} /> {desc}
    </Link>
);

export const Cargando = ({ str }) => {
    if (str) {
        return (
            <div className="container">
                <div className="box d-flex justify-content-center h-100 cargando">
                    <h5>{str}</h5>
                </div>
            </div>
        );
    }
    return (
        <div className="container">
            <div className="box d-flex justify-content-center h-100 cargando">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        </div>
    );
};

export const Recycle = () => {
    return (
        <div className="mx-2 recycle-icon" style={{ width: '50px' }}>
            <svg id="prefix__Layer_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 80 80" xmlSpace="preserve">
                <style>{'.prefix__st0{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}'}</style>
                <g id="prefix__layer1">
                    <g id="prefix__g3535" transform="matrix(.96875 0 0 .98751 1.25 -.25)">
                        <path
                            id="prefix__path2742"
                            className="prefix__st0"
                            d="M55 37.3L72.1 27l7.7 14.8c1.9 8.1-8.3 11.1-16.5 10.6L55 37.3z"
                        />
                        <path
                            id="prefix__path2743"
                            className="prefix__st0"
                            d="M51.1 47.9l-9 16 9 16.2.2-6.5h8.2c3 .3 6.9-1.7 8.3-4.6l10.6-19.4c-3.5 3.5-8 4.4-13.1 4.4H51.4l-.3-6.1z"
                        />
                        <path
                            id="prefix__path2751"
                            className="prefix__st0"
                            d="M30.9 28.2l-17.3-10 9.2-13.9C29-1.3 36.5 6.2 40 13.6l-9.1 14.6z"
                        />
                        <path
                            id="prefix__path2752"
                            className="prefix__st0"
                            d="M42.1 26.5l18.3.2L70.1 11l-5.8 2.9-4-7.2c-1.2-2.8-4.8-5.2-8-5.1l-22.1.1c4.7 1.4 7.7 4.9 10.2 9.4l6.8 12.2-5.1 3.2z"
                        />
                        <path
                            id="prefix__path2753"
                            className="prefix__st0"
                            d="M.4 27.4l5.4 4.1-5 9.5c-2.5 4.4 1.8 8.6 4.6 10.1 2.7 1.5 6.9 1.6 10.9 1.6l7.1-11.4 5.4 2.8-9.3-16.9c-.2 0-19.1.2-19.1.2z"
                        />
                        <path
                            id="prefix__path2754"
                            className="prefix__st0"
                            d="M1.2 49.3l11.5 20.8c2.3 2.9 6.7 3.6 11.2 3.5H36V53.9l-23-.2c-3.5.2-8.2-.5-11.8-4.4z"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
};
