import React, { useState } from 'react';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import { Link } from 'react-router-dom';
import PasswordShow from '../../_Common/images/form_password-show__black.svg';
import PasswordHide from '../../_Common/images/form_password-hide__black.svg';
import { LoginInitial } from './LoginValidation';
import AuthInput from './AuthInput';

function AuthForm(props) {
  const [type, setType] = useState('password');
  const { form } = props;

  const changeType = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };
  return (
    <>
      <Formik
        initialValues={form.initial}
        validationSchema={form.schema}
        onSubmit={(values) => {
          console.log(form.initial);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (form.type === 'login' ? (
          <Form autoComplete="off" className="login100-form">
            <div className="form-group">

              <Field
                name="login"
                type="text"
                placeholder="Frank"
                className={`${touched.login && errors.login ? 'error' : ''} input-control auth-000`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.login}
              />
              <label htmlFor="login">
                Login
              </label>
              <div className="error-message">
                <ErrorMessage name="login" />
              </div>
            </div>
            <div className="form-group">
              <Field
                name="password"
                type={type}
                placeholder="Your secret password"
                className={`${touched.password && errors.password ? 'error' : ''} input-control password-000`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <label htmlFor="password">
                Password
              </label>
              <label
                className={`password-type ${values.password && values.password.length > 0 ? 'show' : 'hide'}`}
                onClick={changeType}
              >
                <img
                  src={type == 'password' ? PasswordShow : PasswordHide}
                  alt="Show/Hide password"
                  title="Show or hide your password-000"
                />
              </label>
              <div className="error-message">
                <ErrorMessage name="password" />
              </div>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-login"
                disabled={!!isSubmitting}
              >
                <span className={!isSubmitting ? 'show' : 'hide'}>Submit</span>
                <span className={isSubmitting ? 'show' : 'hide'}>Loading...</span>
              </button>
            </div>
            <div className="form-forgot">
              <span className="txt1">
                Forgot&nbsp;
              </span>

              <Link to="/forget" href="#" className="txt2">
                User name / password?
              </Link>
            </div>
            <div className="form-signup">
              <Link to="/auth/registration" href="#" className="txt3">
                Sign Up
              </Link>
            </div>
          </Form>
        ) : (
          <Form autoComplete="off" className="login100-form">
            <AuthInput name="login" />
            <div className="form-group">
              <Field
                name="password"
                type={type}
                placeholder="Your secret password"
                className={`${touched.password && errors.password ? 'error' : ''} input-control password-000`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <label htmlFor="password">
                Password
              </label>
              <label
                className={`password-type ${values.password && values.password.length > 0 ? 'show' : 'hide'}`}
                onClick={changeType}
              >
                <img
                  src={type == 'password' ? PasswordShow : PasswordHide}
                  alt="Show/Hide password"
                  title="Show or hide your password-000"
                />
              </label>
              <div className="error-message">
                <ErrorMessage name="password" />
              </div>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-login"
                disabled={!!isSubmitting}
              >
                <span className={!isSubmitting ? 'show' : 'hide'}>Submit</span>
                <span className={isSubmitting ? 'show' : 'hide'}>Loading...</span>
              </button>
            </div>
            <div className="form-forgot">
              <span className="txt1">
                Forgot&nbsp;
              </span>

              <Link to="/forget" href="#" className="txt2">
                User name / password?
              </Link>
            </div>
            <div className="form-signup">
              <Link to="/auth/login" href="#" className="txt3">
                Login
              </Link>
            </div>
          </Form>
        ))}
      </Formik>
    </>
  );
}

export default AuthForm;
