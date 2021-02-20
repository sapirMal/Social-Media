import React from 'react';

const Input = props => {
  const capitalize = (s) =>
    s && s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

  return (

    props.elementName === 'input' ?
      <div className="col-md-6 mb-3 mb-md-0">
        <label
          className="text-black"
          htmlFor={props.key}>
          {capitalize(props.name)}
        </label>
        <input
          className="form-control"
          type={props.type}
          id={props.key}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onBlur={props.onBlur}
          name={props.name}
        />
      </div> :
      <div className="col-md-12">
        <label
          className="text-black"
          htmlFor="message">
          {capitalize(props.name)}
        </label>
        <textarea
          className="form-control"
          id={props.key}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onBlur={props.onBlur}
          name={props.name}
          cols="30"
          rows="7" />
      </div>

  )
}

export default Input;