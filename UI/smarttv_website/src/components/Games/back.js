import React from 'react';
import Iframe from 'react-iframe';
import './_styles.scss';

class Game extends React.Component {
  state = {
    game: ''
  };
  handleChange1 = () => {
    this.setState({ game: 'game1' });
  };
  handleChange2 = () => {
    this.setState({ game: 'game2' });
  };
  game2048 = () => {
    return (
      <Iframe
        url="https://2048game.surge.sh"
        width="100%"
        height="90vh"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen
      />
    );
  };
  render() {
    const url1 = 'https://2048game.surge.sh';
    const url2 = 'https://puzzlemast.surge.sh';
    return (
      <div className="games">
        <div className="buttons">
          <button
            className="waves-effect waves-light btn"
            style={{ width: 100 }}
            onClick={this.handleChange1}
          >
            2048
          </button>
        </div>

        <div className="buttons">
          <button
            className="waves-effect waves-light btn"
            style={{ width: 100 }}
            onClick={this.handleChange2}
          >
            Puzzle Master
          </button>
        </div>
        <Iframe
          url={this.state.game === 'game1' ? url1 : url2}
          width="100%"
          height="90vh"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen
        />
      </div>
    );
  }
}
export default Game;
