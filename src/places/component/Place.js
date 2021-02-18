import React from 'react';
import {Link} from 'react-router-dom';

const place = props => {
  // console.log(props);
  return (
    <div className="col-sm-3 mb-4">
      <div className="place">
        <img src={props.image} alt={props.title} className="img-fluid" />
        <div className="place-details p-3">
          <div><strong className="price">{props.title}</strong></div>
          <div><strong >{props.address}</strong></div>
          <div>{props.description}</div>
          <div className="meta mb-4 d-flex justify-content-between" style={{fontSize: '1rem'}} >
            <span className="w border-r"><Link to=''>View on map</Link></span>
            <span className="w border-r"> <Link to={`\places\:${props.id}`}>Edit</Link></span>
            <span className="w"> <Link to='' >Delete</Link></span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default place;