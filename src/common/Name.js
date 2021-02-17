import React from 'react';
import {Link} from "react-router-dom";

const name = () => {
  return (
    <div className="col-6 col-xl-2">
      <h1 className="mb-0 site-logo m-0 p-0"><Link to="/" className="mb-0">Moments.</Link></h1>
    </div>
  )
}

export default name;