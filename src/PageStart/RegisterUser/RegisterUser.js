import React from 'react';

import '../style.scss'
import './RegisterUser.scss'

function RegisterUser() {
    return (
        <>
            {/*Background*/}
            <div className="foreground"></div>
            <div className="midground">
                <div className="tuna"></div>
            </div>
            <div className="background"></div>
            {/*Background END*/}


            <section className="start-group ">
                <section className="section-greetings">
                    <h1 className="section-greetings__title">Please fill the form</h1>
                </section>
                <section className="section-body">
                    <form>

                    </form>
                </section>
            </section>
        </>
    );
}


export default RegisterUser;