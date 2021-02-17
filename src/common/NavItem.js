import React from 'react';
import {Link} from "react-router-dom";

const navItem = (props) => {
  return (
    <li><Link to={props.link} className="nav-link">{props.name}</Link></li>
  )
}

export default navItem;