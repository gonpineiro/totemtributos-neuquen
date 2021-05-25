import React from 'react';
import { Link } from 'react-router-dom'

const TipoImp = ({ name, url }: TipoImpType) => {
    return (
        <Link to={url} type="button" className="btn btn-primary btn-labeled text-left mb-1">
            <span className="btn-label">
                <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
                {name}
            </span>
        </Link>
    )
}

type TipoImpType = {
    name: string,
    url: string,
};

export default TipoImp;