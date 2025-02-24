import React from 'react';
import * as S from './ChartHeader.css';

const ChartHeader = ({ children }) => {
  return (
    <S.ChartHeader>
      <S.ChartTitle>{children}</S.ChartTitle>
    </S.ChartHeader>
  );
};

export default ChartHeader;
