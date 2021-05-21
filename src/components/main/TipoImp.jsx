import React from 'react';
import { Link } from 'react-router-dom'

const BtnLink = ({ name, url }) => {
    return (
        <Link to={url} type="button" className="btn btn-primary btn-labeled text-left mb-1">
            <span className="btn-label"><i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i></span>{name}
        </Link>
    )
}

export default BtnLink;