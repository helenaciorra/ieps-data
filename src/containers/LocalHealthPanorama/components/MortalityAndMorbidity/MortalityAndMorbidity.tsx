import React, { useEffect } from 'react';
import ChartHeader from '../ChartHeader';
import { MortalityPanorama } from '../../../../store/health-panorama/health-panorama.types';
import * as S from './MortalityAndMorbidity.css';
import mortalityChart from './MortalityAndMorbidity.adapters';

type Props = {
  data: MortalityPanorama,
  shouldUseRegionData: boolean,
};

const MortalityAndMorbidity = ({ shouldUseRegionData, data }: Props) => {
  useEffect(() => {
    const key = shouldUseRegionData ? 'region' : 'country';

    mortalityChart(data, key);
  }, [data]);

  return (
    <S.MortalityAndMorbidity>
      <ChartHeader>mortalidade e morbidade (100.000 hab.)</ChartHeader>
      <S.Content>
        <S.ChartContainer id="container-candle"></S.ChartContainer>
      </S.Content>
    </S.MortalityAndMorbidity>
  );
};

export default MortalityAndMorbidity;
