import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    const handleScreenshotAttempt = () => {
      navigator.mediaSession.setActionHandler('previoustrack', () => {
        axios.get('/api/block-screenshot');
      });
    };

    handleScreenshotAttempt();

    return () => {
      navigator.mediaSession.setActionHandler('previoustrack', null);
    };
  }, []);

  return (
    <div className="App">
      <h1>Website with Screenshot Blocking</h1>
      <p>
        This website uses the Encrypted Media Extensions (EME) API to prevent screenshots from being taken on compatible devices.
      </p>
    </div>
  );
};

export default App;