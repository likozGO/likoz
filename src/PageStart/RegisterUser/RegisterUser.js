import React from 'react';
import {Field, Form, Formik} from 'formik';
import * as Yup from 'yup';

import '../style.scss'
import './RegisterUser.scss'


const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

class RegisterUser extends React.Component {

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
                            </div>
                            {/*Background END*/}
                        </div>
                        <div className="section-body__right">
                            <Formik
                                initialValues={{
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={SignupSchema}
                                onSubmit={values => {
                                    // same shape as initial values
                                    console.log(values);
                                }}
                            >
                                {({errors, touched}) => (
                                    <Form>
                                        <div className="form-group">
                                            <Field name="firstName" className="input-control firstName"/>
                                            {errors.firstName && touched.firstName ? (
                                                <div>{errors.firstName}</div>) : null}
                                        </div>
                                        <div className="form-group">
                                            <Field name="lastName" className="input-control lastName"/>
                                            {errors.lastName && touched.lastName ? (
                                                <div>{errors.lastName}</div>) : null}
                                        </div>
                                        <div className="form-group">
                                            <Field name="email" type="email" className="input-control email"/>
                                            {errors.email && touched.email ? <div>{errors.email}</div> : null}
                                        </div>
                                        <div className="form-group">
                                            <Field name="password" type="password" className="input-control password"/>
                                            {errors.password && touched.password ? <div>{errors.password}</div> : null}
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn">Submit</button>
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