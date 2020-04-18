import React from 'react';

import '../node_modules/normalize.css'
import './MainStuff/css/main.scss'

import './MainStuff/css/fonts.css'
import {ConstRouting} from './Router'
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <ConstRouting/>
            </BrowserRouter>
        </>
    );
}

export default App;
