import React from 'react';

import Nav from './Navigation';


const wrapperPage = (props) => {
    return (
        <div className={props.className} >
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>

            <Nav />
            {props.children}
        </div>
    )
}

export default wrapperPage;