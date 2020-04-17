import React from 'react';
import '../node_modules/normalize.css'
import './MainStuff/css/main.scss'
import './MainStuff/css/fonts.css'

// import RegisterUser from "./PageStart/RegisterUser/RegisterUser";
import HelloUser from "./PageStart/HelloUser/HelloUser";

function App() {
    return (
        <>
            {/*<RegisterUser/>*/}
            <HelloUser/>
        </>
    );
}

export default App;
