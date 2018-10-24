import React from 'react';
import { Link } from "react-router-dom";
import Radium, { Style } from 'radium';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <Link className="col-sm-3 col-md-2 mr-0" to="/" style={{
                color: "white"
            }}>
                <img src="/favicon/favicon-32x32.png" style={{marginRight: "1em"}}/>
                Compendium
            </Link>
            <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                <Link className="nav-link" to="/">Sign out</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;