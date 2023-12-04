import React from "react";
import {Link, NavLink} from 'react-router-dom';
import logo from '../images/Hice-Logo.png'



function Navbar(){
    return(

        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top navbar-custom">
        <div className="container">
            <Link className="navbar-brand" to="/">
                <img src={logo} className="" alt="..." width="131" height="72"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/services">Our Services</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;