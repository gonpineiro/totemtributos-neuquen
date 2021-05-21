import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/table">About</Link>
                </li>
                <li>
                    <Link to="/noexiste">Users</Link>
                </li>
            </ul>
        </nav>
    )
};


export default Home;
