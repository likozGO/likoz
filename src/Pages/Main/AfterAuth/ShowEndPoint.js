import React from 'react';
import Slider from './Slider';

function ShowEndPoint({ endPoint }) {
  const slideData = [
    {
      index: 0,
      headline: 'New Fashion Apparel New Fashion Apparel New Fashion Apparel',
      button: 'SADasdASd aD ASD ASDasdasdasda sda sdas das das asd',
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
  return (
    <div className={`end-point ${endPoint && 'fadeEndPoint'}`}>
      <Slider heading="Example Slider" slides={slideData} />
    </div>
  );
}

export default ShowEndPoint;
