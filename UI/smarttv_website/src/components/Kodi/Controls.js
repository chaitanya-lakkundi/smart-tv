import React from 'react';
import Iframe from 'react-iframe';

const Controls = () => {
  return (
    <Iframe
      url="http://192.168.43.45:7000/kodi"
      width="80%"
      height="90vh"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"
      allowFullScreen
    />
  );
};
export default Controls;
