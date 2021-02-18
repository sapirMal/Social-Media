import React, {useState, useEffect} from 'react';

import Nav from './Navigation';
import MobileNav from './MobileNav';


const WrapperPage = (props) => {

    useEffect(() => {
        window.addEventListener('scroll', shrinkNav);
    });

    const [mobileClass, setMobileClass] = useState('');
    const [shrink, setShrink] = useState('');

    const showMobileNav = (e) => {
        setMobileClass('offcanvas-menu');
        e.preventDefault();
    }

    const unShowMobileNav = (e) => {
        e.preventDefault();
        if (mobileClass)
            setMobileClass('');
    }

    const shrinkNav = (e) => {
        const length = e.srcElement.scrollingElement.scrollTop;
        if (length > 50)
            setShrink('shrink')
        else
            setShrink('')
    }

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
        <div className={props.className + ' ' + mobileClass}
            onClick={unShowMobileNav}
        >
            <MobileNav navItems={navItems} onClick={unShowMobileNav} />
            <Nav navItems={navItems} onClick={showMobileNav} shrink={shrink} />
            {props.children}
        </div>
    )
}

export default WrapperPage;