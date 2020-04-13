import React from 'react';
import './UnregisterUser.scss'
import login from './images/btn-login--account.svg'
import register from './images/btn-register--account.svg'

function UnregisterUser() {

    return (
            <section className="unregister-group">
                <section className="section-greetings">
                    <h1 className="section-greetings__title">Hello Person!</h1>
                    <p className="section-greetings__text">
                        Its first page if you never been before on my site or clear cookies :)
                        <br/>
                    </p>
                </section>
                <section className="section-answer">
                    <div className="section-answer__true">
                        <button className="btn btn__bottom-border">
                            <span>
                                Man what are f***???<br/>
                                Im alredy have account!<br/>
                                Just <span className="selected-word">login</span>...
                            </span>
                            <img src={login} alt="Login please, or reload the page"/>
                        </button>

                    </div>
                    <div className="section-answer__false">
                        <button className="btn btn__bottom-border">
                            <span>
                                Oi hello mon sir!<br/>
                                I want <span className="selected-word">create account</span>
                            </span>
                            <img src={register} alt="Register please, or reload the page"/>
                        </button>
                    </div>
                </section>
            </section>
    );

}

export default UnregisterUser