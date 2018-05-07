import React from 'react';
import Transition from 'react-motion-ui-pack';
import setupBox from './setupbox.jpg';
import Image from 'react-image-resizer';
import DDNews from './DDNews.jpg';
import VideoFrame from './VideoFrame.jpg';
import Spin from './spin.gif';
import Analytics from './analytics.png';

const Debug = () => {
  return (
    <div className="debug">
      <Transition
        component="ul"
        className="grid"
        appear={{ opacity: 0, translateY: -30 }}
        enter={{ opacity: 1, translateY: 0 }}
        leave={{ opacity: 0, translateY: 30 }}
      >
        <Transition
          appear={{ translateX: -100, opacity: 0 }}
          enter={{ translateX: 0, opacity: 1 }}
          leave={{ translateX: 100, opacity: 0 }}
        >
          <div className="grid-to-animate" key="grid-to-animate">
            <Image src={setupBox} alt="Setup Box" height={80} width={150} />
          </div>
        </Transition>
        <Transition
          appear={{ translateX: -100, opacity: 0 }}
          enter={{ translateX: 150, opacity: 1 }}
          leave={{ translateX: 0, opacity: 0 }}
        >
          <div className="grid-to-animate" key="grid-to-animate">
            <Image src={VideoFrame} alt="Setup Box" height={80} width={150} />
          </div>
        </Transition>
        <Transition
          appear={{ translateX: -100, opacity: 0 }}
          enter={{ translateX: 300, opacity: 1 }}
          leave={{ translateX: 100, opacity: 1 }}
        >
          <div className="grid-to-animate" key="grid-to-animate">
            <Image src={Spin} alt="Setup Box" height={80} width={100} />
          </div>
        </Transition>
        <Transition
          appear={{ translateX: -100, opacity: 0 }}
          enter={{ translateX: 450, opacity: 1 }}
          leave={{ translateX: 100, opacity: 1 }}
        >
          <div className="grid-to-animate" key="grid-to-animate">
            <Image src={DDNews} alt="Setup Box" height={100} width={100} />
          </div>
        </Transition>
        <Transition
          appear={{ translateX: -100, opacity: 0 }}
          enter={{ translateX: 600, opacity: 1 }}
          leave={{ translateX: 100, opacity: 1 }}
        >
          <div className="grid-to-animate" key="grid-to-animate">
            <Image src={Analytics} alt="Setup Box" height={100} width={100} />
          </div>
        </Transition>
      </Transition>
    </div>
  );
};
export default Debug;
