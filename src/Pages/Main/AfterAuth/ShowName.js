import React from 'react';

const ShowName = ({ ready }) => (
  <div className="user-name fade-out">
    <span className={`user-name--word ${ready ? 'slide-top-1' : 'not-ready'}`}>Hello</span>
    <span className={`user-name--word ${ready ? 'slide-top-2' : 'not-ready'}`}>Vasya Pupkin</span>
  </div>
);

export default ShowName;
