import React from "react";
import './CardHeader.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logoTNCC from '../Assets/TNCC.jpeg';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function CardHeader({ onRegisterClick, isHome }) {
    const history = useNavigate();

    function Login() {
        // Perform login logic
        // If login is successful, navigate to home page
        history('/');
    };

    return (
        <div className="header-container fixed-top">
            <div className="p-2">
                <div className='row'>
                    <div className='col-2 col-sm-2 col-md-4 col-lg-4 col-xl-4 text-start'>
                        <div className="logo-container">
                            <img src={logoTNCC} alt="Logo" className="logo-img"></img>
                        </div>
                    </div>
                    <div className='col-8 col-sm-8 col-md-4 col-lg-4 col-xl-4 text-center'>
                        TNCC விளையாட்டு குழு   
                    </div>
                    {isHome ?
                        <div className='col-2 col-sm-2 col-md-4 col-lg-4 col-xl-4 text-end' onClick={Login}>
                            <FontAwesomeIcon icon={faUser} /> Login
                        </div> :
                        <div className='col-2 col-sm-2 col-md-4 col-lg-4 col-xl-4 text-end'>Header3</div>
                    }
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Players</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li className="dropdown-submenu">
                                        <a className="dropdown-item dropdown-toggle" href="#">Submenu</a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Submenu action</a></li>
                                            <li><a className="dropdown-item" href="#">Another submenu action</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={onRegisterClick}>Registration</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default CardHeader;
