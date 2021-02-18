import React from 'react';

import Button from './Button';

const header = props => {
  return(
<div className="row mb-5 align-items-center">
          <div className="col-md-7 text-left">
            <h2 className="section-title mb-3">{props.title}</h2>
          </div>
          <div className="col-md-5 text-left text-md-right">
            <div className="custom-nav1">
              <Button name='Previous' className="custom-prev1" link='#' />
              <span className="mx-3">/</span>
              <Button name='Next' className="custom-next1" link='#' />
            </div>
          </div>
        </div>
  )
}

export default header;