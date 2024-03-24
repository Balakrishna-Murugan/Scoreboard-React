import React from "react";
import picTemple from '../Assets/KanchipuramTemple.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardFooter.css'
function CardBroadcast()
{
    return(
        <div className="p-2">
<div className="row">
    <div className="col">
    <p className="m-3 text-info">
                "The beautiful Ekambareswara temple is in the heart of Kanchipuram. At its entrance, the statue of King Karikalan welcomes you. Why is it here? Because, according to one legend, Karikalan built this temple! We do not know if the legend is true, but we do know that he was a swashbuckling hero and a master-builder."
            </p>
    </div>
    </div>
    <div className="row">
       
    </div>
    <div className="row">
    <div className="col">
    <label className="m-3 form-label">Balakrishnan Murugan</label>
    
    </div>
        <div className="col mb-2">
            <img src={picTemple} alt="Image" className="float-end img-fluid"></img>
        </div>
    </div>
</div>      
        
    )
}
export default CardBroadcast;