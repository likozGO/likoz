import React, { useState } from 'react';
import { ErrorMessage } from 'formik';
import PasswordShow from '../../_Common/images/form_password-show__black.svg';
import PasswordHide from '../../_Common/images/form_password-hide__black.svg';

const Input = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <div className="form-group">
    <input
      name={field.name}
      type="text"
      className={`${touched[field.name] && errors[field.name] ? 'error' : ''} input-control auth-000`}
      value={field.value || ''}
      {...field}
      {...props}
    />
    <label htmlFor={field.name}>
      {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
    </label>
    <div className="error-message">
      <ErrorMessage name={field.name} />
    </div>
  </div>
);

function PasswordInput({
  field,
  values,
  form: { touched, errors },
  ...props
}) {
  const [type, setType] = useState('password');
  const changeType = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };
  return (
    <div className="form-group">
      <input
        name={field.name}
        type={type}
        placeholder="Your secret password"
        className={`${touched.password && errors.password ? 'error' : ''} input-control password-000`}
        value={field.value || ''}
        {...field}
        {...props}
      />
      <label htmlFor={field.name}>
        Password
      </label>
      <label
        className={`password-type ${field.value && field.value.length > 0 ? 'show' : 'hide'}`}
        onClick={changeType}
      >
        <img
          src={type == 'password' ? PasswordShow : PasswordHide}
          alt="Show/Hide password"
          title="Show or hide your password-000"
        />
      </label>
      <div className="error-message">
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
}

const InputTextArea = ({
  field,
  form: { touched, errors },
  ...props
}) => (
  <div className="form-group">
    <textarea
      name={field.name}
      type="text"
      className={`${touched[field.name] && errors[field.name] ? 'error' : ''} input-control description-000`}
      value={field.value || ''}
      rows="10"
      cols="30"
      {...field}
      {...props}
    />
    <label htmlFor={field.name}>
      {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
    </label>
    <div className="error-message">
      <ErrorMessage name={field.name} />
    </div>
  </div>
);

export { Input, PasswordInput, InputTextArea };
