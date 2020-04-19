import React from "react";
import {Route} from "react-router-dom";
import {AnimatedSwitch} from 'react-router-transition';

import './MainStuff/css/animation-router.scss'

import HelloUser from "./PageStart/HelloUser/HelloUser";
import RegisterUser from "./PageStart/RegisterUser/RegisterUser";
import LoginUser from "./PageStart/LoginUser/LoginUser";
import RememberUser from "./PageStart/RememberUser/RememberUser";
import PageAdmin from "./PageAdmin/PageAdmin";


/**Routes**/
function ConstRouting() {
    return (
        <AnimatedSwitch
            atEnter={{opacity: 0}}
            atLeave={{opacity: 0}}
            atActive={{opacity: 1}}
            className="switch-wrapper">


            <Route path="/" exact component={HelloUser}/>
            <Route path="/registration" component={RegisterUser}/>
            <Route path="/login" component={LoginUser}/>
            <Route path="/forget" component={RememberUser}/>
            <Route path="/admin/dashboard" component={PageAdmin}/>

        </AnimatedSwitch>
    )
}


export {ConstRouting};
/**Routes End**/