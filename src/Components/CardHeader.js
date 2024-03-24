import React from "react";
import './CardHeader.css';
import logoTNCC from '../Assets/TNCC.jpeg';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning , faUser } from '@fortawesome/free-solid-svg-icons';

function CardHeader(Prob){
    const history=useNavigate();
    function Login() {
        // Perform login logic
        // If login is successful, navigate to home page
        history('/');
    };
    return(
        
        <div className="p-2">
        <div className='row'>
            <div className='col-2 col-sm-2 col-md-4 col-lg-4 col-xl-4 text-start'>
            <div class="logo-container">
                <img src={logoTNCC} alt="Logo" className="logo-img"></img>
            </div>
            </div>
            <div className='col-8 col-sm-8 col-md-4 col-lg-4 col-xl-4 text-center'>
            TNCC விளையாட்டு குழு   
                </div>
            {Prob.isHome ? <div className='col-2 col-sm-2 col-md-4 col-lg-4 col-xl-4 text-end' onClick={Login} ><FontAwesomeIcon icon={faUser} /> Login</div>:
            <div className='col-2 col-sm-2 col-md-4 col-lg-4 col-xl-4 text-end'>Header3</div> }
            
        </div>
        </div>
    );
}
export default CardHeader;
