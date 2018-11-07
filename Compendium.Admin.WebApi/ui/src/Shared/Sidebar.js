import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
             <div className="sidebar-sticky">
                <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <span data-feather="home"></span>
                        Dashboard <span className="sr-only">(current)</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">
                    <span data-feather="file"></span>
                        Tags
                    </a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/exhibits">
                        <span data-feather="shopping-cart"></span>
                        Exhibits (TODO:)
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/collections">
                    <span data-feather="shopping-cart"></span>
                        Collections
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">
                    <span data-feather="users"></span>
                        Users
                    </a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/statistics">
                    <span data-feather="bar-chart-2"></span>
                    Statistics
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">
                    <span data-feather="layers"></span>
                        Theme
                    </a>
                </li>
                </ul>

            </div>
        </nav>
    );
}

export default Sidebar;