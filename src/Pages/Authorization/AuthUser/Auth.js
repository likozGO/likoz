import React, { useState } from 'react';
import './AuthUser.scss';

import { useLocation } from 'react-router-dom';
import AuthForm from './AuthForm';

function Auth() {
  const [location, setLocation] = useState('');
  const currentLocation = useLocation();
  const currPath = currentLocation.pathname === '/auth/login' ? 'login' : 'registration';

  React.useEffect(() => setLocation(currPath), []);
  return (
    <section className="auth-group">
      <div className="limiter">
        <div className={`container-${currPath}`}>
          <div className="wrap-auth">
            <AuthForm location={location} />
            <div className="auth-more" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Auth;
