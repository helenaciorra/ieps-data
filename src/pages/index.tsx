import React, { useEffect } from 'react';
import Home from '../containers/Home';
import configContextProvider from '../store';

const ContextProvider = configContextProvider();

const HomePage = ({ location }) => {
  useEffect(() => {
    console.log(
      '%c Powered by Conceptu',
      'color: #5c5c5c; font-weight: bold; font-size: 3.5rem;'
    );
  }, []);

  return (
    <ContextProvider>
      <Home location={location} />;
    </ContextProvider>
  );
};

export default HomePage;
