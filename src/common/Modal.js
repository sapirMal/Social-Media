import React from 'react';



const Modal = props => {

  return (
    <React.Fragment>
      <div className='backdrop' onClick={props.onClick} />
      <div className={`my-modal ${props.className}`} >
        <div className='my-modal-header' onClick={props.onClick}>
          <h2>{props.title} <span className='ui-icon-close icon-close'></span></h2>
        </div>
        <div className='my-modal-body'>
          {props.children}
        </div>
      </div>
    </React.Fragment>

  )
}

export default Modal;