import React from "react";
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ onServiceChange }) => {
    return (
        <div className="header d-flex">
            <h3>
                <a href="#">
                    Star DB
                </a>
            </h3>
            <ul className="d-flex">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/people">People</Link>
                </li>
                <li>
                <Link to="/planets">planets</Link>
                </li>
                <li>
                    <Link to="/starships">Starships</Link>
                </li>
            </ul>

            <button 
                className="btn btn-primary btn-sm"
                onClick={ onServiceChange }>
                Change Service
            </button>
        </div>
    );
};

export default Header;