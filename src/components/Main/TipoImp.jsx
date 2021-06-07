import { Link } from 'react-router-dom'

const TipoImp = ({ name, url, icono }) => {
    return (
      <Link
        to={url}
        type="button"
        className="btn btn-totem btn-labeled text-left m-4"
      >
        <span className="btn-label">
          <div className="btn-icono">
            {icono[0]}
          </div>
        </span>
        {" " + name}
      </Link>
    );
}


export default TipoImp;