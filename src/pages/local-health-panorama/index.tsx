import React from 'react';
import configContextProvider from '../../store';
import LocalHealthPanorama from '../../containers/LocalHealthPanorama';

const ContextProvider = configContextProvider();

const LocalHealthPanoramaPage = ({ location }) => {
  return (
    <ContextProvider>
      <LocalHealthPanorama location={location} />
    </ContextProvider>
  );
};

export default LocalHealthPanoramaPage;
