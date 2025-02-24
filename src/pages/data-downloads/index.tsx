import React from 'react';
import DataDownloads from '../../containers/DataDownloads';
import configContextProvider from '../../store';
const ContextProvider = configContextProvider();

const DataDownloadsPage = ({ location }) => {
  return (
    <ContextProvider>
      <DataDownloads location={location} />
    </ContextProvider>
  );
};

export default DataDownloadsPage;
