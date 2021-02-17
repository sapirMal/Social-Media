import React from 'react';
import {Link} from "react-router-dom";

import Name from './Name';
import NavItem from './NavItem';

const navigation = (props) => {
    let navItems = [
        {link: '/', name: 'Home'},
        {link: '/users', name: 'Users'}
    ];
    navItems = props.login ? navItems.concat([
        {link: '/u1/places', name: 'My Places'},
        {link: '/places/new', name: 'Add Place'}
    ]) : navItems.concat([
        {link: '/login', name: 'Authenticate'}
    ]);

    return (
        <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
            <div className="container">
                <div className="row align-items-center">
                    <Name />
                    <div className="col-12 col-md-10 d-none d-xl-block">
                        <nav className="site-navigation position-relative text-right" role="navigation">
                            <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                {navItems.map(navItem => <NavItem
                                    name={navItem.name}
                                    link={navItem.link} />)}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3"><Link to="#" className="site-menu-toggle js-menu-toggle text-black float-right"><span className="icon-menu h3"></span></Link></div>
                </div>
            </div>
        </header>)
}

export default navigation;