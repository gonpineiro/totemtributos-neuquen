import { Link } from 'react-router-dom'

const TipoImp = ({ name, url }: TipoImpType) => {
    return (
        <Link to={url} type="button" className="btn btn-totem btn-labeled text-left m-4">
            <span className="btn-label">
                <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
            </span>
            {' ' + name}
        </Link>
    )
}

type TipoImpType = {
    name: string,
    url: string,
};

export default TipoImp;