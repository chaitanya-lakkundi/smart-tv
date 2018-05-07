import React from 'react';
import Iframe from 'react-iframe';

const Controls = () => {
  return (
    <Iframe
      url="http://tataskysmart.hopto.org:7000/arrow_keyboard"
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
export default Controls;
