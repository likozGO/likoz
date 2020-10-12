import React, { useEffect, useState } from 'react';
import './BgAnimation.css';
import './AfterAuth.scss';
import { Link } from 'react-router-dom';
import ShowName from './ShowName';

const AfterAuth = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  return (
    <section className="after-auth">
      <div className="bg" />
      <ShowName ready={ready} />
      <div className="end-point">
        <Link>Blog</Link>
        <Link>Admin</Link>
      </div>
    </section>
  );
};

export default AfterAuth;
