import React from 'react';

import Place from './Place';

/* <div className="row justify-content-center">
         <div className="col-md-4">
           <a href="listings.html" className="btn btn-primary btn-block">View All place Listings</a>
         </div>
       </div> */


const placesList = props => {
  return (

    <div className="row">
      {props.items ? props.items.map(place => {
        return (<Place
          key={place.id}
          id={place.id}
          title={place.title}
          image={place.imageUrl}
          description={place.description}
          address={place.address}
          coordinate={place.location}
        />)
      }) : <h1>No places found.</h1>}
    </div>

  )
}

export default placesList;