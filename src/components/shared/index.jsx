import { Link } from 'react-router-dom';
import "./index.scss";

export const I = ({ classname }) => (
  <i className={classname} aria-hidden="true"></i>
)

export const LinkBtn = ({ btnClass, iClass, url, desc }) => (
  <Link
    to={url}
    className={btnClass}
  >
    <I classname={iClass} /> {" "}
    {desc}
  </Link>
)

export const Cargando = () => {
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
