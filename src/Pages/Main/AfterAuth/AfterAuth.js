import React, { useEffect, useState } from 'react';
import './AfterAuthBg.css';
import './AfterAuth.scss';
import ShowName from './ShowName';
import ShowEndPoint from './ShowEndPoint';

const AfterAuth = () => {
  const [showName, setShowName] = useState(false);
  const [endPoint, setEndPoint] = useState(false);
  useEffect(() => {
    setShowName(true);
    const timer = setTimeout(() => {
      setEndPoint(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="after-auth">
      <div className="bg" />
      <ShowName ready={showName} />
      <ShowEndPoint endPoint={endPoint} />
    </section>
  );
};

export default AfterAuth;
