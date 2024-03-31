import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardHeader from './CardHeader';
import { useNavigate } from "react-router-dom";
import '../App.css';
import UserTree from './UserTree';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function Home() {
    const history = useNavigate();
    // Sample user data
    const userList = [
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        {
            id: 3, name: 'User 3', children: [
                { id: 4, name: 'Child 1' },
                { id: 5, name: 'Child 2' }
            ]
        },
        // Add more users as needed
    ];

    return (
        <>
            <div className="flex-container">
                <div className="grid-item">
                    <CardHeader isHome={true}></CardHeader>
                </div>
            </div>
            <div className="flex-container">
                <div className="grid-item">
                    <UserTree />
                </div>
                <div className="grid-item">
                    Test
                </div>
                <div className="grid-item">
                    Test
                </div>
            </div>
        </>
    );
}
export default Home;

