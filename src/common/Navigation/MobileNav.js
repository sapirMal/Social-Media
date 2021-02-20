import React from 'react';

import NavItem from './NavItem';

const mobileNav = props => {

  return (
    <div className="site-mobile-menu site-navbar-target" >
      <div className="site-mobile-menu-header" onClick={(e) => props.onClick(e)}>
        <div className="site-mobile-menu-close mt-3"  >
          <span className="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body">
        <ul className="site-nav-wrap">
          {props.navItems.map(navItem => <NavItem
            key={navItem.name}
            name={navItem.name}
            link={navItem.link} />)}
        </ul>
      </div>
    </div>
  )
}

export default mobileNav;