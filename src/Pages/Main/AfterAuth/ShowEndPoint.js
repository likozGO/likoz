import React from 'react';
import { Link } from 'react-router-dom';

function ShowEndPoint({ endPoint }) {
  return (
    <div className={`end-point ${endPoint && 'fadeEndPoint'}`}>
      <Link to='/main/blog'>Blog</Link>
      <Link to='/admin'>Admin</Link>
    </div>
  );
}

export default ShowEndPoint;
