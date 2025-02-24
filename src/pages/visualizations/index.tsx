import React from 'react';
import Visualizations from '../../containers/Visualizations';
import configContextProvider from '../../store';

const ContextProvider = configContextProvider();

const VisualizationsPage = ({ location }) => {
  return (
    <ContextProvider>
      <Visualizations location={location} />
    </ContextProvider>
  );
};

export default VisualizationsPage;
