import React, { useEffect, useState } from 'react';
import './AuthUser.scss';

import { Link, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import AuthForm from './AuthForm';
import RalphWiggum from './images/form-forget--btn.png';

function Auth() {
  const [location, setLocation] = useState('');
  const currentLocation = useLocation();

  useEffect(() => {
    if (currentLocation.pathname === '/auth/login') {
      setLocation('login');
    } else if (currentLocation.pathname === '/auth/registration') {
      setLocation('registration');
    } else if (currentLocation.pathname === '/auth/forget') {
      setLocation('forget');
    }
  }, []);

  return (
    <section className="auth-group">
      <div className="limiter">
        <div className={`container-${location}`}>
          <div className="wrap-auth">
            {location === 'forget' ? <ForgetChoose location={location} /> : <AuthForm location={location} />}
            <div className="auth-more" />
          </div>
        </div>
      </div>
    </section>
  );
}

const ForgetChoose = ({ location }) => {
  const [choose, setChoose] = useState('');

  const [showChooser, setShowChooser] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const hideChooser = (data) => {
    setChoose(data);
    setShowChooser(false);
    setShowForm(true);
  };
  return (
    <>
      {showChooser && (
      <div className="forget100-form forget100-chooser">
        <button type="button" className="btn btn-choose" onClick={() => hideChooser('password')}>
          I can remember my
          {' '}
          <br />
          <span className="btn-choose--name">password</span>
          <span role="img" aria-label="pass">🔑</span>
        </button>
        <button type="button" className="btn btn-choose" onClick={() => hideChooser('email')}>
          I can remember my
          {' '}
          <br />
          <span className="btn-choose--name">email</span>
          <span role="img" aria-label="login">📧</span>
        </button>
        <button type="button" className="btn btn-choose" onClick={() => hideChooser('anything')}>
          I forget everything
          <span role="img" aria-label="login">
            <img src={RalphWiggum} alt="Ralph wiggum" />
          </span>
        </button>
        <div className="form-signup">
          <Link to="/auth/login" className="txt3">
            To Login
          </Link>
          <Link to="/auth/registration" className="txt3">
            To Register
          </Link>
        </div>
      </div>
      )}

      <CSSTransition
        in={showForm}
        timeout={100}
        classNames="form-animation"
        unmountOnExit
        onEnter={() => setShowChooser(false)}
        onExited={() => setShowForm(true)}
      >
        <AuthForm location={location} choose={choose} />
      </CSSTransition>
    </>
  );
};

export default Auth;
