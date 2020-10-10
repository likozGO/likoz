import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Input, PasswordInput } from './AuthInput';
import { LoginInitial, LoginSchema } from './LoginValidation';
import { RegisterInitial, RegisterSchema } from './RegisterValidation';

function AuthForm({ location }) {
  return (
    <>
      <Formik
        initialValues={location === 'login' ? LoginInitial : RegisterInitial}
        validationSchema={location === 'login' ? LoginSchema : RegisterSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          isSubmitting,
        }) => (location === 'login' ? (
          <LoginForm isSubmitting={isSubmitting} />
        ) : (
          <RegistrationForm isSubmitting={isSubmitting} />
        ))}
      </Formik>
    </>
  );
}

function LoginForm({ isSubmitting }) {
  return (
    <Form autoComplete="off" className="login100-form">
      <Field name="login" placeholder="e.g. Ares228" component={Input} />
      <Field name="password" component={PasswordInput} />
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-login"
          disabled={!!isSubmitting}
        >
          <span className={!isSubmitting ? 'show' : 'hide'}>Login</span>
          <span className={isSubmitting ? 'show' : 'hide'}>Loading...</span>
        </button>
      </div>
      <div className="form-forgot">
        <span className="txt1">
          Forgot&nbsp;
        </span>

        <Link to="/forget" className="txt2">
          User name / password?
        </Link>
      </div>
      <div className="form-signup">
        <Link to="/auth/registration" className="txt3">
          To Register
        </Link>
      </div>
    </Form>
  );
}

function RegistrationForm({ isSubmitting }) {
  return (
    <Form autoComplete="off" className="register100-form">
      <Field name="login" placeholder="e.g. Ares228" component={Input} />
      <Field name="email" placeholder="e.g. email@gmail.com" component={Input} />
      <Field name="password" component={PasswordInput} />
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-register"
          disabled={!!isSubmitting}
        >
          <span className={!isSubmitting ? 'show' : 'hide'}>Register</span>
          <span className={isSubmitting ? 'show' : 'hide'}>Loading...</span>
        </button>
      </div>

      <div className="form-forgot">
        <span className="txt1">
          Forgot&nbsp;
        </span>
        <Link to="/forget" className="txt2">
          User name / password?
        </Link>
      </div>
      <div className="form-signup">
        <Link to="/auth/login" className="txt3">
          To Login
        </Link>
      </div>
    </Form>
  );
}

export default AuthForm;
