import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";

import './LoginUser.scss'
import PasswordShow from "../../_Common/images/form_password-show__black.svg";
import PasswordHide from "../../_Common/images/form_password-hide__black.svg";

import LoginSchema from "./LoginValidation";

class LoginUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'password',
        }
        this.handleType = this.handleType.bind(this);
    }

    handleType() {
        if (this.state.type == 'text') {
            this.setState({
                type: 'password',
            })
        } else {
            this.setState({
                type: 'text',
            })
        }
    }

    render() {


        return (
            <section className="login-group">
                <div className="limiter">
                    <div className="container-login">
                        <div className="wrap-login">
                            <Formik
                                initialValues={{
                                    login: '',
                                    password: '',
                                }}
                                validationSchema={LoginSchema}
                                onSubmit={values => {
                                    console.log(values);
                                }}
                            >{({
                                   values,
                                   errors,
                                   touched,
                                   handleChange,
                                   handleBlur,
                                   handleSubmit,
                                   isSubmitting
                               }) => (

                                <Form autoComplete="off" className="login100-form">
                                    <div className="form-group">

                                        <Field name="login" type="text" placeholder="Frank"
                                               className={(touched.login && errors.login ? "error" : "") + " input-control login-000"}
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.login}/>
                                        <label htmlFor="login">
                                            Login
                                        </label>
                                        <div className="error-message">
                                            <ErrorMessage name="login"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <Field name="password" type={this.state.type}
                                               className="input-control password-000"
                                               placeholder="Your secret password"
                                               className={(touched.password && errors.password ? "error" : "") + " input-control password-000"}
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.password}/>
                                        <label htmlFor="password">
                                            Password
                                        </label>
                                        <label
                                            className={"password-type " + (values.password.length > 0 ? "show" : "hide")}
                                            onClick={this.handleType}>
                                            <img src={this.state.type == 'password' ? PasswordShow : PasswordHide}
                                                 alt="Show/Hide password" title="Show or hide your password-000"/>
                                        </label>
                                        <div className="error-message">
                                            <ErrorMessage name="password"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-login"
                                                disabled={!!isSubmitting}>
                                            <span className={!isSubmitting ? 'show' : 'hide'}>Submit</span>
                                            <span className={!!isSubmitting ? 'show' : 'hide'}>Loading...</span>
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
                                        <Link to="/registration" href="#" className="txt3">
                                            Sign Up
                                        </Link>
                                    </div>
                                </Form>
                            )}
                            </Formik>

                            <div className="login-more"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LoginUser