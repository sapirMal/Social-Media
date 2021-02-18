import React from 'react';
import {Link} from 'react-router-dom';

const button = props => {
  return (
    <Link to={props.link} className={props.className}>{props.name}</Link>
  )
}

export default button;