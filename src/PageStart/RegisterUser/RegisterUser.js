import React from 'react';
import SignupSchema from './RegisterValidation';
import {ErrorMessage, Field, Form, Formik} from 'formik';


import '../style.scss'
import './RegisterUser.scss'
import PasswordShow from '../../MainStuff/images/form_password-show.svg';
import PasswordHide from '../../MainStuff/images/form_password-hide.svg';

class RegisterUser extends React.Component {
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
            <>
                <section className="start-group ">
                    <section className="section-greetings">
                        <h1 className="section-greetings__title">
                            Please fill the form
                        </h1>
                    </section>
                    <section className="section-body">
                        <div className="section-body__left">
                            {/*Background*/}
                            <div className="cat">
                                <div className="ear ear--left"></div>
                                <div className="ear ear--right"></div>
                                <div className="face">
                                    <div className="eye eye--left">
                                        <div className="eye-pupil"></div>
                                    </div>
                                    <div className="eye eye--right">
                                        <div className="eye-pupil"></div>
                                    </div>
                                    <div className="muzzle"></div>
                                </div>
                                {/*MOUTH*/}
                                <div className="mouth">
                                    <div className="teeth"></div>
                                    <div className="tongue"></div>
                                </div>
                            </div>
                            {/*Background END*/}
                        </div>
                        <div className="section-body__right">

                            <Formik
                                initialValues={{
                                    login: '',
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={SignupSchema}
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

                                <Form>
                                    <div className="form-group">

                                        <Field name="login" type="text" placeholder="Frank"
                                               className={(touched.login && errors.login ? "error" : "") + " input-control login"}
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
                                        <Field name="email" type="email" placeholder="example@example.com"
                                               className={(touched.email && errors.email ? "error" : "") + " input-control email"}
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.email}/>
                                        <label htmlFor="email">
                                            Email
                                        </label>
                                        <div className="error-message">
                                            <ErrorMessage name="email"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <Field name="password" type={this.state.type} className="input-control password"
                                               placeholder="Your secret password"
                                               className={(touched.password && errors.password ? "error" : "") + " input-control password"}
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
                                                 alt="Show/Hide password" title="Show or hide your password"/>
                                        </label>
                                        <div className="error-message">
                                            <ErrorMessage name="password"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-register"
                                                disabled={!!isSubmitting}>
                                            Submit
                                        </button>
                                    </div>

                                </Form>
                            )}
                            </Formik>
                        </div>
                    </section>
                </section>
            </>
        );
    }
}


export default RegisterUser;