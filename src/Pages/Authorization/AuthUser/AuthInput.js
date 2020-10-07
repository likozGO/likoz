import React from 'react';
import { ErrorMessage, Field } from 'formik';

function AuthInput({
  field, touched, errors, handleChange, handleBlur, values,
}) {
  return (
    <>
      <div className="form-group">
        <Field
          name={field.name}
          type="text"
          placeholder="Frank"
          className={`${touched[field.name] && errors[field.name] ? 'error' : ''} input-control auth-000`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[field.name]}
        />
        <label htmlFor={field.name}>
          {field.name}
        </label>
        <div className="error-message">
          <ErrorMessage name={field.name} />
        </div>
      </div>
    </>
  );
}

export default AuthInput;
