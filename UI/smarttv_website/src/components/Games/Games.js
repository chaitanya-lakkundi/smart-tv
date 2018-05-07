import React from 'react';
import Iframe from 'react-iframe';

const Game = () => {
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
export default Game;
