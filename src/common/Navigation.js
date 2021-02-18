import React from 'react';
import {Link} from "react-router-dom";

import Name from './Name';
import NavItem from './NavItem';

const navigation = props => {
    return (
        <header className={`site-navbar py-4 js-sticky-header site-navbar-target ${props.shrink}`} role="banner">
            <div className={`container`} >
                <div className="row align-items-center">
                    <Name />
                    <div className="col-12 col-md-10 d-none d-xl-block">
                        <nav className="site-navigation position-relative text-right" role="navigation">
                            <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                {props.navItems.map(navItem => <NavItem
                                    key={navItem.name}
                                    name={navItem.name}
                                    link={navItem.link} />)}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3" >
                        <span
                            className="site-menu-toggle js-menu-toggle text-black float-right"
                            onClick={(e) => props.onClick(e)} >
                            <span className="icon-menu h3" ></span>
                        </span>
                    </div>
                </div>
            </div>
        </header >)
}

export default navigation;