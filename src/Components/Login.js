import React, { useState } from 'react';
import './Login.css';
import './navMenu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import Registeration from './Registration';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUserPlus, faSignInAlt, faL } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();
        // Perform login logic here
        navigate('/Components/Home');
    };

    function openSocialLink(platform) {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
        const urls = {
            facebook: isMobile ? 'fb://page/{page-id}' : 'https://www.facebook.com/{page-id}',
            instagram: isMobile ? 'instagram://user?username={username}' : 'https://www.instagram.com/{username}',
            twitter: isMobile ? 'twitter://user?screen_name={username}' : 'https://twitter.com/{username}'
        };
        window.open(urls[platform], '_blank');
    }
    const [showRegister, setshowRegister] =useState(false);
    const [isSignup, setIsSignup] = useState(false);

    function updateSignup() {
        setIsSignup(true);
    }

    function Signin() {
        setIsSignup(false);
    }
    function handleRegisterClick(e) {
        e.preventDefault();
        setshowRegister(true);
        console.log('Register link clicked');
    }

    return (
        
<div className='main-container'>
             <CardHeader onRegisterClick={handleRegisterClick} isHome={true} />

             {showRegister ? (<Registeration></Registeration>):(<div style={{ marginTop: '100px', overflowY: 'auto', height: 'calc(100vh - 100px)' }}><div className='flex-container'>
                <div className='grid-item'>
                    <div className="p-2">
                        <button onClick={() => openSocialLink('facebook')} className="btn btn-primary btn-social custom-button">
                            <FontAwesomeIcon icon={faFacebookF} /> <span className='text'> Facebook</span>
                        </button>
                        <button onClick={() => openSocialLink('twitter')} className="btn btn-info btn-social custom-button">
                            <FontAwesomeIcon icon={faTwitter} /> <span className='text'> Twitter</span>
                        </button>
                        <button onClick={() => openSocialLink('instagram')} className="btn btn-danger btn-social custom-button">
                            <FontAwesomeIcon icon={faInstagram} /> <span className='text'> Instagram</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-container">
                <div className="grid-item">
                    {isSignup ? (
                        <div className='p-2'>
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="your@email.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="correct horse battery staple" />
                                </div>
                                <button id='signup-button' type="submit" className="btn btn-primary">
                                    <FontAwesomeIcon icon={faUserPlus} /> Create Account
                                </button>
                                <div className="mt-3">
                                    <label className="form-label">By signing up you agree to our</label> 
                                    <span className="link-span"> terms of service</span>
                                </div>
                                <div>
                                    <label className="form-label">Already have an account?</label> 
                                    <span onClick={Signin} className="link-span"> Sign in</span>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className='p-2'>
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" placeholder="Enter your username" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                                </div>
                                <button id='login-button' type="submit" className="btn btn-primary">
                                    <FontAwesomeIcon icon={faSignInAlt} /> Login
                                </button>
                                <div className="mt-3">
                                    <label className="form-label">Need an account?</label> 
                                    <span onClick={updateSignup} className="link-span"> Sign up</span>
                                </div>
                                <div>
                                    <label className="form-label">Forgot your password?</label> 
                                    <span className="link-span"> Reset it</span>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
                <div className='grid-item'>
                    <CardFooter></CardFooter>
                </div>
            </div>
            </div>)}
            
               
              
        </div>
       
        
    );
}

export default Login;
