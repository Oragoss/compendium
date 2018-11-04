import React from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
    state = {
        showNav: false
    }

    openSideNav = () => {
        this.setState({
            showNav: true
        });
    }

    closeSideNav = () => {
        this.setState({
            showNav: false
        });
    }

    render() {
        return (
            <nav className="navbar navbar-dark fixed-top  flex-md-nowrap p-0 shadow" style={{backgroundColor:"#EB6864"}}>
                <Link className="brand col-sm-3 col-md-2 mr-0" to="/">
                    <img src="/favicon/favicon-32x32.png" style={{marginRight: "1em"}} alt="Favicon"/>
                    Compendium
                </Link>
                <Link className="brand col-sm-3 col-md-2 mr-0" to="/exhibits">
                    Exhibits (TODO:)
                </Link>
                <Link className="brand col-sm-3 col-md-2 mr-0" to="/collections">
                    Collections
                </Link>
                {/* <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" /> */}
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <Link className="nav-link" to="/">Sign out</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}