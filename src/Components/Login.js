import React, { useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
 import { faChessPawn } from '@fortawesome/free-regular-svg-icons';

function Login() {

    const openSocialLink = (url) => {
        // Check if the app is available on the device
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

        // Define the app URI scheme for each social media platform
        const facebookAppURI = 'fb://page/{page-id}';
        const instagramAppURI = 'instagram://user?username={username}';
        const twitterAppURI = 'twitter://user?screen_name={username}';

        // Define the URLs for each social media platform
        const facebookURL = 'https://www.facebook.com/{page-id}';
        const instagramURL = 'https://www.instagram.com/{username}';
        const twitterURL = 'https://twitter.com/{username}';

        // Open the app URI if available, otherwise open the URL in a new tab
        if (isMobile) {
            let appURI;
            switch (url) {
                case 'facebook':
                    appURI = facebookAppURI;
                    break;
                case 'instagram':
                    appURI = instagramAppURI;
                    break;
                case 'twitter':
                    appURI = twitterAppURI;
                    break;
                default:
                    break;
            }
            window.location.href = appURI || url;
        } else {
            window.open(url, '_blank');
        }
    }
    const [issignup, setIsSignup] = useState(false);
    function updateSignup() {

        setIsSignup(true);
        console.log(issignup);
    }
    const [issignin, setIsSignin] = useState(false);
    function Signin() {
        setIsSignin(true);
        setIsSignup(false);
        console.log(issignin);
    }
    return (
        <div className='main-container'>
            <div className="flex-container">
                <div className="grid-item">
                   <CardHeader></CardHeader>
                </div>
            
            </div>
            <div className='flex-container'>
                <div className='grid-item'>
                <div class="p-2">
    <button onClick={() => openSocialLink('https://www.facebook.com/')} className="btn btn-primary btn-social custom-button"><FontAwesomeIcon icon={faFacebookF} /> Facebook</button>
    <button onClick={() => openSocialLink('https://twitter.com/')} class="btn btn-info btn-social custom-button"><FontAwesomeIcon icon={faTwitter} /> Twitter</button>
    <button onClick={() => openSocialLink('https://www.instagram.com/')} class="btn btn-danger btn-social custom-button"><FontAwesomeIcon icon={faInstagram} /> Instagram</button>
        </div>
                </div>
            </div>
           
                <div className="flex-container">
                <div className="grid-item">
                        {/* <div className='container'> */}
                            {/* <div className='row'> */}
                                {/* <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'></div> */}
                                
                                {issignup ?
                                // <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <div className='p-2'> 
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="your@email.com" className="form-label">Email</label>
                                                    <input type="text" className="form-control" id="username" placeholder="your@email.com" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="correct horse battery staple" className="form-label">Password</label>
                                                    <input type="password" className="form-control" id="password" placeholder="correct horse battery staple" />
                                                </div>
                                                <button id='login-button' type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faChessPawn} />Create Account</button>
                                                <div className="mt-3">
                                                    <label htmlFor="terms" className="form-label">By signing up you agree to our
                                                    </label> <span className="link-span">terms of service</span>
                                                </div>
                                                <div><label htmlFor="signin" className="form-label">Already have an account?
                                                </label> <span onClick={Signin} className="link-span"> Sign in</span></div>
                                            </form>
                                            </div>
                                            // </div>
                                        :
                                        // <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
                                            <div className='p-2'> 
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="username" className="form-label">Username</label>
                                                    <input type="text" className="form-control" id="username" placeholder="Enter your username" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label">Password</label>
                                                    <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                                                </div>
                                                <button id='login-button' type="submit" className="btn btn-primary">Login</button>
                                                <div className="mt-3">
                                                    <label htmlFor="signup" className="form-label">Need an account?
                                                    </label> <span onClick={updateSignup} className="link-span">Sign up</span>
                                                </div>
                                                <div><label htmlFor="signup" className="form-label">Forgot your password?
                                                </label> <span className="link-span">Reset it</span></div>
                                            </form>
                                        </div>
                                        // </div>
                                    }
                                
                                {/* <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'></div> */}
                            {/* </div> */}
                        {/* </div> */}
                    </div>
                    <div className="grid-item">
                    <CardFooter></CardFooter>
                </div>
                </div>

            {/* <div className="flex-container">
                <div className="grid-item">
                    <CardBroadcast></CardBroadcast>
                </div>
            </div> */}
        </div>
    );
}
export default Login;