import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';

import Input from '../../common/Input';
import Header from '../../common/Header';

const fields =
  [
    {name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name*'},
    {name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email*'},
    {name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number*'},
    {name: 'massage', elementName: 'textarea', type: 'text', placeholder: 'Type your massage*'}

  ];

const NewPlace = props => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: yup.object().shape({
      name: yup.string().min(2, 'Please enter your full name.').required('Your name is required.'),
      email: yup.string().email('email is not valid').required('Your email is required.'),
      phone: yup.string().matches(/^(05)[0-9]{8}/, 'please enter your phone in this format 05XXXXXXXX').required('Your phone number is required.'),
      massage: yup.string().min(10, 'Your massage must be with min 10 letters').required('Your massage is required.')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (

    <div className="site-section bg-light" id="places-section">
      <br />
      <div className="container">
        <Header title={`New Place`} />
        <form
          className="p-5 bg-white"
          onSubmit={formik.handleSubmit}>

          {fields.map(field =>
            <div className="row form-group">
              <Input
                key={field.name}
                {...field}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                touched={formik.touched[field.name]}
                errors={formik.errors[field.name]} />
            </div>
          )}
        </form>
      </div>
    </div>)
}

export default NewPlace;