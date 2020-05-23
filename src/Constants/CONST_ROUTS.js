import React from "react";
import {AnimatedSwitch} from 'react-router-transition';
import '../Pages/_Common/css/animation-router.scss'
import {BrowserRouter, Route} from "react-router-dom";
import HelloUser from "../Pages/Authorization/HelloUser/HelloUser";
import RegisterUser from "../Pages/Authorization/RegisterUser/RegisterUser";
import LoginUser from "../Pages/Authorization/LoginUser/LoginUser";
import RememberUser from "../Pages/Authorization/RememberUser/RememberUser";
import PageAdmin from "../Pages/Admin/PageAdmin";
import AdressError from "../Errors/AdressError/CreateProduct";


/**Routes**/
function CONST_ROUTS() {
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


export {CONST_ROUTS};
/**Routes End**/