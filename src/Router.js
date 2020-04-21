import React from "react";
import {AnimatedSwitch} from 'react-router-transition';
import './MainStuff/css/animation-router.scss'
import {BrowserRouter, Route} from "react-router-dom";
import HelloUser from "./PageStart/HelloUser/HelloUser";
import RegisterUser from "./PageStart/RegisterUser/RegisterUser";
import LoginUser from "./PageStart/LoginUser/LoginUser";
import RememberUser from "./PageStart/RememberUser/RememberUser";
import PageAdmin from "./PageAdmin/PageAdmin";
import AdressError from "./Errors/AdressError/CreateProduct";


/**Routes**/
function ConstRouting() {
    return (
        <BrowserRouter>
            <AnimatedSwitch
                atEnter={{opacity: 0}}
                atLeave={{opacity: 0}}
                atActive={{opacity: 1}}
                className="switch-wrapper">
                <Route path="/" exact component={HelloUser}/>
                <Route path="/registration" component={RegisterUser}/>
                <Route path="/login" component={LoginUser}/>
                <Route path="/forget" component={RememberUser}/>
                <Route path="/admin" component={PageAdmin}/>
                <Route path="*" component={AdressError}/>
            </AnimatedSwitch>
        </BrowserRouter>
    )
}


export {ConstRouting};
/**Routes End**/