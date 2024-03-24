import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardHeader from './CardHeader';
import { useNavigate } from "react-router-dom";
import '../App.css';

function Home() {
    const history = useNavigate();
    
    return (
        <div className="flex-container">
            <div className="grid-item">
                <CardHeader isHome={true}></CardHeader>
            </div>
        </div>
    );
}
export default Home;

