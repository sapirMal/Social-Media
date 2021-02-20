import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Modal from '../../common/Modal';
import Map from '../../common/Map';

const Place = props => {

  const [showZoomIn, setShowZoomIn] = useState(false);
  const openPic = () => setShowZoomIn(true);
  const closePic = () => setShowZoomIn(false);

  const [showMap, setShowMap] = useState(false);
  const openMap = () => setShowMap(true);
  const closeMap = () => setShowMap(false);

  return (
    <React.Fragment>
      {showZoomIn && <Modal title={props.title}
        onClick={closePic} >
        <img
          src={props.image}
          alt={props.title}
          className='img-fluid'
        />
      </Modal>}

      {showMap && <Modal title={props.title} className='map'
        onClick={closeMap} >

        <Map center={props.coordinate} zoom={16} />
      </Modal>}

      <div className="col-sm-3 mb-4">
        <div className="place">
          <img
            onClick={openPic}
            src={props.image}
            alt={props.title}
            className="img-fluid" />
          <div className="place-details p-3">
            <div><strong className="price">{props.title}</strong></div>
            <div><strong >{props.address}</strong></div>
            <div>{props.description}</div>
            <div className="meta mb-4 d-flex justify-content-between" style={{fontSize: '1rem'}} >
              <span className="w border-r" onClick={openMap}>View on map</span>
              <span className="w border-r"> <Link to={`\places\:${props.id}`}>Edit</Link></span>
              <span className="w"> <Link to='' >Delete</Link></span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment >

  )
}

export default Place;