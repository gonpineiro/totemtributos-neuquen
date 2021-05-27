import { Link } from 'react-router-dom';

export const Error = ({ msg }) => {
    return (
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3 p-3 text-center background-main-div">
          <h2 className="text-primary mb-3 text-center">Información</h2>
          <p className="titulo text-center">{msg}</p>
        </div>
        <div className="col-md-6 offset-md-3 pt-3 text-center">
          <Link
            to="/apps/totems"
            className="btn btn-primary active mb-1  text-center"
          >
            <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>{" "}
            Volver
          </Link>
        </div>
      </div>
    );
};
