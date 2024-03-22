import React from "react";
import './CardHeader.css';
import logoTNCC from '../Assets/TNCC.jpeg';

function CardHeader(){
    return(
        
        <div className='row'>
            <div className='col-2 col-sm-2 col-md-4 col-lg-4 col-xl-4 text-start'>
            <div class="logo-container">
                <img src={logoTNCC} alt="Logo" className="logo-img"></img>
            </div>

           
            </div>
            <div className='col-8 col-sm-8 col-md-4 col-lg-4 col-xl-4 text-center'>
            TNCC விளையாட்டு குழு   
                </div>
            <div className='col-2 col-sm-2 col-md-4 col-lg-4 col-xl-4 text-end'>Header3</div>
        </div>
    
    );
}
export default CardHeader;
