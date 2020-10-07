import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import '../node_modules/normalize.css';
import './Pages/_Common/css/main.scss';
import './Pages/_Common/css/fonts.css';
import './Pages/_Common/css/animation-router.scss';

import HelloUser from './Pages/Authorization/HelloUser/HelloUser';
import Auth from './Pages/Authorization/AuthUser/Auth';
import RememberUser from './Pages/Authorization/RememberUser/RememberUser';
import PageAdmin from './Pages/Admin/PageAdmin';
import AdressError from './Errors/AdressError/CreateProduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route path="/" exact component={HelloUser} />
          <Route path="/auth/registration" component={Auth} />
          <Route path="/auth/login" component={Auth} />
          <Route path="/forget" component={RememberUser} />
          <Route path="/admin" component={PageAdmin} />
          <Route path="*" component={AdressError} />
        </AnimatedSwitch>
      </BrowserRouter>
    </>
  );
}

export default App;
