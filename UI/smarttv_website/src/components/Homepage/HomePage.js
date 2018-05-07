import React from 'react';
import './_styles.scss';
import { isMobile } from 'react-device-detect';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Debug from '../Debug/Debug';
import Game from '../Games/Games';
import Controls from '../Games/Controls';
import ControlsKodi from '../Kodi/Controls';
import Iframe from 'react-iframe';
import games from './2048.png';
import analytics from './analytics.png';
import feature from './feature1.jpg';
import kodi from './kodi.jpg';

class HomePage extends React.Component {
  state = {
    page: 'home'
  };
  changeTab = val => this.setState({ page: val });

  render() {
    const pages = () => {
      switch (this.state.page) {
        case 'home':
          return 'Smart TV Dashboard';
        case 'analytics':
          return 'Analytics';
        case 'help':
          return 'Help';
        case 'kodi':
          return 'KODI TV';
        case 'game':
          return 'Games';
        case 'debug':
          return 'Debug';
      }
    };
    return (
      <div>
        <Header name={pages()} />
        <div className="flexes">
          <SideBar click={this.changeTab} />
          {this.state.page === 'debug' && <Debug />}
          {this.state.page === 'game' ? (
            isMobile ? (
              <Controls />
            ) : (
              <Game />
            )
          ) : null}
          {this.state.page === 'kodi' && <ControlsKodi />}
          {this.state.page === 'home' && (
            <div style={{ marginLeft: 50, marginTop: 50 }}>
              <img src={feature} height="200" width="250" />
              <img src={analytics} height="200" width="250" />
              <img src={games} height="200" width="250" />
              <img src={kodi} height="200" width="250" />
            </div>
          )}
          {this.state.page === 'analytics' && (
            <Iframe
              url="https://92615dcdf260126a8195a8f176f8630d.us-east-1.aws.found.io:9243/goto/16d2cf19dae8b34bcc9ea65849b85024?embed=true"
              width="100%"
              height="90vh"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
              allowFullScreen
            />
          )}
          {this.state.page === 'help' && (
            <div>
              <textarea
                style={{ width: isMobile ? 200 : 500, marginTop: 30 }}
              />
              <button
                style={{ display: 'flex' }}
                className="waves-effect waves-light btn"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default HomePage;
