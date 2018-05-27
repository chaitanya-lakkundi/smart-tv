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
import axios from 'axios';
import request from 'sync-request';

class HomePage extends React.Component {
  state = {
    page: 'home',
    text: null
  };
  changeTab = val => this.setState({ page: val });

  handleInput(event) {
    this.setState({ page: 'success', text: event.target.value });
  }

  UNSAFE_componentWillMount() {
    // request('POST', 'http://192.168.43.45:7000/chrome_end');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const st = this.state.page;
    if (prevState.page === this.state.page) {
      request('POST', 'http://192.168.43.45:7000/chrome_end');
      if (st === 'game' || st === 'analytics') {
        request('POST', `http://192.168.43.45:7000/chrome_${st}`);
      }
    }
  }

  handleSubmit(event) {
    console.log('sddswd');
  }

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
        case 'success':
          return 'Help';
      }
    };

    return (
      <div>
        <Header name={pages()} />
        <div className="flexes">
          <SideBar click={this.changeTab} />
          {this.state.page === 'debug' && <Debug />}
          {this.state.page === 'game'
            ? (request('POST', 'http://192.168.43.45:7000/chrome_game', {
                json: { game: '2048' }
              }),
              isMobile ? <Controls /> : <Game />)
            : null}
          {this.state.page === 'kodi' && <ControlsKodi />}
          {this.state.page === 'home' && (
            <div style={{ marginLeft: 50, marginTop: 20 }}>
              <Iframe
                url="http://192.168.43.45:7000/smart_switch"
                width="100%"
                height="280px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                allowFullScreen
              />
              <img src={feature} height="200" width="250" />
              <img src={analytics} height="200" width="250" />
              <img src={games} height="200" width="250" />
              <img src={kodi} height="200" width="250" />
            </div>
          )}
          {this.state.page === 'analytics' &&
            (request('POST', 'http://192.168.43.45:7000/chrome_analytics', {
              json: { game: '2048' }
            }),
            (
              <Iframe
                url={
                  isMobile
                    ? "http://13.126.92.205:5601/app/kibana#/dashboard/67fb0770-4848-11e8-86c3-5d4fd6b4dcd5?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-60d,mode:quick,to:now))&_a=(description:'',filters:!(),fullScreenMode:!t,options:(darkTheme:!f,hidePanelTitles:!f,useMargins:!t),panels:!((gridData:(h:3,i:'2',w:6,x:6,y:0),id:c6619ee0-47d6-11e8-86c3-5d4fd6b4dcd5,panelIndex:'2',type:visualization,version:'6.2.4'),(gridData:(h:3,i:'3',w:6,x:0,y:0),id:ea067610-4847-11e8-86c3-5d4fd6b4dcd5,panelIndex:'3',type:visualization,version:'6.2.4'),(gridData:(h:3,i:'4',w:6,x:0,y:3),id:'5a42b840-4847-11e8-86c3-5d4fd6b4dcd5',panelIndex:'4',type:visualization,version:'6.2.4'),(gridData:(h:3,i:'5',w:6,x:6,y:3),id:a597cae0-60d1-11e8-99fc-ebede6a1a1c4,panelIndex:'5',type:visualization,version:'6.2.4')),query:(language:lucene,query:''),timeRestore:!f,title:'Smart%20Dashboard',viewMode:view)"
                    : 'http://13.126.92.205:5601/app/kibana#/dashboard/67fb0770-4848-11e8-86c3-5d4fd6b4dcd5?_g=()'
                }
                width="100%"
                height="90vh"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                allowFullScreen
              />
            ))}
          {this.state.page === 'help' && (
            <div>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  onChange={this.handleInput}
                  style={{ width: isMobile ? 200 : 500, marginTop: 30 }}
                  value={this.state.text}
                />
                <button
                  style={{ display: 'flex' }}
                  className="waves-effect waves-light btn"
                  value="Submit"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
          {this.state.page === 'success' && (
            <div>
              <h5>
                Successfully submitted your query. We will get back to you till
                then enjoy smartness!
              </h5>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default HomePage;
