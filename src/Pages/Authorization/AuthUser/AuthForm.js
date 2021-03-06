import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Input, InputTextArea, PasswordInput } from './AuthInput';
import { LoginInitial, LoginSchema } from './LoginValidation';
import { RegisterInitial, RegisterSchema } from './RegisterValidation';
import {
  RememberAnythingInitial,
  RememberAnythingPassword,
  RememberEmailInitial,
  RememberPasswordInitial,
  RememberSchemaEmail,
  RememberSchemaPassword,
} from './RememberValidation';

function AuthForm({ location, choose }) {
  const settings = {
    login: [LoginInitial, LoginSchema],
    registration: [RegisterInitial, RegisterSchema],
    forget: {
      email: [RememberEmailInitial, RememberSchemaEmail],
      password: [RememberPasswordInitial, RememberSchemaPassword],
      anything: [RememberAnythingInitial, RememberAnythingPassword],
    },
  };
  let currentSettings = settings[location];
  const RenderForm = (isSubmitting) => {
    if (location === 'login') {
      return <LoginForm isSubmitting={isSubmitting} />;
    }
    if (location === 'registration') {
      return <RegistrationForm isSubmitting={isSubmitting} />;
    }
    if (location === 'forget') {
      return <ForgetForm isSubmitting={isSubmitting} choose={choose} />;
    }
  };
  if (location === 'forget' && choose) {
    currentSettings = currentSettings[choose];
  }
  console.log(currentSettings);
  if (location && currentSettings) {
    return (
      <>
        <Formik
          initialValues={currentSettings[0]}
          validationSchema={currentSettings[1]}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            isSubmitting,
          }) => RenderForm(isSubmitting)}
        </Formik>
      </>
    );
  }
  return <>Error message</>;
}

const LoginForm = ({ isSubmitting }) => (
  <Form autoComplete="off" className="login100-form">
    <Field
      name="login"
      placeholder="e.g. Ares228"
      component={Input}
      disabled={!!isSubmitting}
      classInput="auth-000"
    />
    <Field name="password" component={PasswordInput} disabled={!!isSubmitting} />
    <div className="form-group">
      <button
        type="submit"
        className="btn btn-login"
        disabled={!!isSubmitting}
      >
        <span className="show">{!isSubmitting ? 'Login' : 'Loading...'}</span>
      </button>
    </div>
    <div className="form-forgot">
      <span className="txt1">
        Forgot&nbsp;
      </span>

      <Link to="/auth/forget" className="txt2">
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

const RegistrationForm = ({ isSubmitting }) => (
  <Form autoComplete="off" className="register100-form">
    <Field
      name="login"
      placeholder="e.g. Ares228"
      component={Input}
      disabled={!!isSubmitting}
      classInput="auth-000"
    />
    <Field
      name="email"
      placeholder="e.g. email@gmail.com"
      component={Input}
      disabled={!!isSubmitting}
      classInput="email-000"
    />
    <Field name="password" component={PasswordInput} disabled={!!isSubmitting} />
    <div className="form-group">
      <button
        type="submit"
        className="btn btn-register"
        disabled={!!isSubmitting}
      >
        <span className="show">{!isSubmitting ? 'Register' : 'Loading...'}</span>
      </button>
    </div>

    <div className="form-forgot">
      <span className="txt1">
        Forgot&nbsp;
      </span>
      <Link to="/auth/forget" className="txt2">
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

const ForgetForm = ({ isSubmitting, choose }) => (
  <Form autoComplete="off" className="forget100-form">
    {
            (choose === 'email' || choose === 'password') ? (
              (choose === 'email'
                ? (
                  <Field
                    name="email"
                    placeholder="e.g. email@gmail.com"
                    component={Input}
                    disabled={!!isSubmitting}
                    classInput="email-000"
                  />
                )
                : <Field name="password" component={PasswordInput} disabled={!!isSubmitting} />)
            )
              : (
                <>
                  <Field
                    name="email"
                    placeholder="e.g. email@gmail.com"
                    component={Input}
                    disabled={!!isSubmitting}
                    classInput="email-000"
                  />
                  <Field
                    name="description"
                    placeholder="Describe your problem and we will help you!"
                    component={InputTextArea}
                    disabled={!!isSubmitting}
                  />
                </>
              )
        }
    <div className="form-group">
      <button
        type="submit"
        className="btn btn-forget"
        disabled={!!isSubmitting}
      >
        <span className="show">{!isSubmitting ? 'Send' : 'Loading...'}</span>
      </button>
    </div>

    <div className="form-signup">
      <Link to="/auth/login" className="txt3">
        To Login
      </Link>
      <Link to="/auth/registration" className="txt3">
        To Register
      </Link>
    </div>
  </Form>
);

export default AuthForm;
