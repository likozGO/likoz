import React from 'react';
import CMS from './category/page-admin.jpg';

function ShowEndPoint({ endPoint }) {
  return (
    <>
      <div className={`end-point ${endPoint && 'fadeEndPoint'}`}>
        <CardEndPoint
          imgComponent={CMS}
          title="CMS"
          descr="available only for admins"
          TitleColor=""
          DescrColor=""
        />
        <CardEndPoint
            imgComponent={CMS}
            title="CMS"
            descr="available only for admins"
            TitleColor=""
            DescrColor=""
        />
      </div>
    </>
  );
}

const CardEndPoint = ({
  imgComponent, title, descr, TitleColor, DescrColor,
}) => (
  <>
    <input type="radio" name="slider" id="item-1" checked />
    <input type="radio" name="slider" id="item-2" />
    <input type="radio" name="slider" id="item-3" />
    <div className="cards">
      <label className="card" htmlFor="item-1" id="song-1">
        <img
          src={imgComponent}
          alt={title}
        />
      </label>
    </div>
    <div className="player">
      <div className="upper-part">
        <div className="play-icon">
          <svg
            width="20"
            height="20"
            fill="#2992dc"
            stroke="#2992dc"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="feather feather-play"
            viewBox="0 0 24 24"
          >
            <defs />
            <path d="M5 3l14 9-14 9V3z" />
          </svg>
        </div>
        <div className="info-area" id="test">
          <label className="song-info" id="song-info-1">
            <div className="title">Bunker</div>
            <div className="sub-line">
              <div className="subtitle">Balthazar</div>
              <div className="time">4.05</div>
            </div>
          </label>
          <label className="song-info" id="song-info-2">
            <div className="title">Words Remain</div>
            <div className="sub-line">
              <div className="subtitle">Moderator</div>
              <div className="time">4.05</div>
            </div>
          </label>
          <label className="song-info" id="song-info-3">
            <div className="title">Falling Out</div>
            <div className="sub-line">
              <div className="subtitle">Otzeki</div>
              <div className="time">4.05</div>
            </div>
          </label>
        </div>
      </div>
    </div>
  </>
);

export default ShowEndPoint;
