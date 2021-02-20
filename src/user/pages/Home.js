import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import image from '../../assets/images/home1.jpg'

const home = () => {
    return (
        <div 
        className="site-blocks-cover overlay aos-init aos-animate" 
        style={{backgroundImage: `url(${image})`}} 
        data-aos="fade" 
        id="home-section">


            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 mt-lg-5 text-center">
                        <h1>Visit a special place. Take a picture. Join Us. Share with us.</h1>
                        <p className="mb-5">Discover wonderful places.</p>

                    </div>
                </div>
            </div>

            <Link to="/users" className="smoothscroll arrow-down"><span className="icon-arrow_downward"></span></Link>
        </div>)
}

export default home;