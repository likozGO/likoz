import {BrowserRouter as Router, Route} from "react-router-dom";
import HelloUser from "./PageStart/HelloUser/HelloUser";
import RegisterUser from "./PageStart/RegisterUser/RegisterUser";
import React from "react";

/**Routes**/
function ConstRouting() {
    return (
        <Router>
            <Route path="/" exact component={HelloUser}/>
            <Route path="/registration" component={RegisterUser}/>
            <Route path="/login" component={RegisterUser}/>
        </Router>
    );
}



export {ConstRouting};
/**Routes End**/