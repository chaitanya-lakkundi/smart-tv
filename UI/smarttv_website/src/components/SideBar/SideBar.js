import React from 'react';
import './_styles.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { isMobile } from 'react-device-detect';

const SideBar = props => {
  return (
    <div className="sidebar">
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <div className="button">
          <button
            className="waves-effect waves-light btn"
            style={{ width: isMobile ? 100 : 150 }}
            onClick={() => props.click('home')}
          >
            Home
          </button>
        </div>
        <div className="button">
          <button
            className="waves-effect waves-light btn"
            style={{ width: isMobile ? 100 : 150 }}
            onClick={() => props.click('analytics')}
          >
            Analytics
          </button>
        </div>
        <div className="button">
          <button
            className="waves-effect waves-light btn"
            style={{ width: isMobile ? 100 : 150 }}
            onClick={() => props.click('kodi')}
          >
            KODI TV
          </button>
        </div>
        <div className="button">
          <button
            className="waves-effect waves-light btn"
            style={{ width: isMobile ? 100 : 150 }}
            onClick={() => props.click('game')}
          >
            Games
          </button>
        </div>
        <div className="button">
          <button
            className="waves-effect waves-light btn"
            style={{ width: isMobile ? 100 : 150 }}
            onClick={() => props.click('debug')}
          >
            Debug
          </button>
        </div>
        <div className="button">
          <button
            className="waves-effect waves-light btn"
            style={{ width: isMobile ? 100 : 150 }}
            onClick={() => props.click('help')}
          >
            Help
          </button>
        </div>
      </ReactCSSTransitionGroup>
    </div>
  );
};
export default SideBar;
