import React from "react";
import {Route} from "react-router-dom";
import {AnimatedSwitch} from 'react-router-transition';

import './MainStuff/css/animation-router.scss'

import HelloUser from "./PageStart/HelloUser/HelloUser";
import RegisterUser from "./PageStart/RegisterUser/RegisterUser";


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
            <Route path="/login" component={RegisterUser}/>
        </AnimatedSwitch>
    )
}


export {ConstRouting};
/**Routes End**/