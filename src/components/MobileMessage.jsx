import React, { useEffect, useState } from 'react';
import '../component_styles/MobileMessage.css'; 

const MobileMessage = () => {
  const [deviceInfo, setDeviceInfo] = useState('');

  useEffect(() => {
    try {
      const userAgent = navigator.userAgent;
      let device;
      if (/Android/i.test(userAgent)) {
        device = 'Android';
      } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        device = 'iOS Device';
      } else {
        device = 'phone or maximize this tab';
      }
      setDeviceInfo(device);
    } catch (error) {
      setDeviceInfo('phone');
    }
  }, []);
  

  return (
    <div className="mobile-message">
      <h1>Some websites deserve the big screen and this is one of them, so get off your {deviceInfo} and come back on a proper screen!</h1>
      <h2>"But that's not very responsive!" you say? Well, isn't the fact that you're reading this a demonstration of responsiveness in and of itself?</h2>
      <h3>Also, I had fun making this part. </h3>
    </div>
  );
};

export default MobileMessage;
