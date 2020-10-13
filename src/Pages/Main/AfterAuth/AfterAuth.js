import React, { useEffect, useState } from 'react';
import './BgAnimation.css';
import './AfterAuth.scss';
import { Link } from 'react-router-dom';
import ShowName from './ShowName';
import ShowEndPoint from './ShowEndPoint';
import Slider from './Test';

const AfterAuth = () => {
  const [showName, setShowName] = useState(false);
  const [endPoint, setEndPoint] = useState(false);
  const slideData = [
    {
      index: 0,
      headline: 'New Fashion Apparel',
      button: 'Shop now',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg',
    },
    {
      index: 1,
      headline: 'In The Wilderness',
      button: 'Book travel',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg',
    },
    {
      index: 2,
      headline: 'For Your Current Mood',
      button: 'Listen',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg',
    },
    {
      index: 3,
      headline: 'Focus On The Writing',
      button: 'Get Focused',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg',
    },
  ];
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
      <Slider heading="Example Slider" slides={slideData} />
    </section>
  );
};

export default AfterAuth;
