import React from 'react';
import {Link} from "react-router-dom";
const user = props => {
    const places = props.placesCount > 1 ? 'places' : 'place';
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="team-member">
                <figure>
                    <ul className="social">
                        <li><Link to={`/${props.id}/places`}>
                            <span className="icon-external-link">
                        </span> see {`${props.firstName}'s`} {places}</Link></li>
                        {/* <li><Link to="#"><span className="icon-twitter"></span></Link></li>
                        <li><Link to="#"><span className="icon-linkedin"></span></Link></li>
                        <li><Link to="#"><span className="icon-instagram"></span></Link></li> */}
                    </ul>
                    <img src={props.image} alt={props.name} className="img-fluid" />
                </figure>
                <div className="p-3">
                    <h3 className="mb-2">{props.name}</h3>
                    <span className="position">{`${props.placesCount} ${places}`}</span>
                </div>
            </div>
        </div>
    )
}

export default user;