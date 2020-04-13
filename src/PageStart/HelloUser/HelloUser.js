import React from 'react';

import '../style.scss'

import './HelloUser.scss'
import login from './images/btn-login--account.svg'
import register from './images/btn-register--account.svg'

function HelloUser() {

    return (
        <section className="start-group ">
            <section className="section-greetings">
                <h1 className="section-greetings__title">Hello Person!</h1>
                <p className="section-greetings__text">
                    Its first page if you never been before on my site or clear cookies :)
                    <br/>
                </p>
            </section>
            <section className="section-body">
                <div className="section-body__true">
                    <button className="btn btn__bottom-border">
                                <span className="xl-screen">
                                    Man what are f***???<br/>
                                    Im alredy have account!<br/>
                                    Just&nbsp;
                                </span>
                        <span className="selected-word">Login</span>
                        <img src={login} alt="Login please, or reload the page"/>
                    </button>

                </div>
                <div className="section-body__false">
                    <button className="btn btn__bottom-border">
                            <span className="xl-screen">
                                Oi hello mon sir!<br/>
                                I want&nbsp;
                            </span>
                        <span className="selected-word">Create Account</span>
                        <img src={register} alt="Register please, or reload the page"/>
                    </button>
                </div>
            </section>
        </section>
    );

}

export default HelloUser