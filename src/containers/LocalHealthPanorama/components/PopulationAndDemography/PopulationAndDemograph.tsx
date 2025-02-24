/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { percent } from '../../../../utils/math/measurements-units';
import { round3 } from '../../../../utils/math/';
import ChartHeader from '../ChartHeader';
import * as S from './PopulationAndDemography.css';

import { PeopleCircle, Calendar, DropletHalf, State, Country } from '../icons';
import { DemographicPopulationPanorama } from '../../../../store/health-panorama/health-panorama.types';
import invalidValues from '../../../../utils/invalid-values';

type Props = {
  shouldUseRegionData: boolean,
  data: DemographicPopulationPanorama,
  onMessageHidden: (hide: boolean) => void,
  onMouseContextMessagePosition: (
    position: ContextMessagePositionProps
  ) => void,
  onMessageContent: (value: string) => void,
};

type ContextMessagePositionProps = {
  x: number,
  y: number,
};

const PopulationAndDemography = ({shouldUseRegionData, data, onMessageHidden, onMouseContextMessagePosition, onMessageContent }: Props) => {
  const [dataKey, setDataKey] = useState('city');
  
  

  const getMousePosition = (x: number, y: number, value: any) => {
    const isInvalid = value;

    onMessageContent(
      'Infelizmente, não temos disponíveis dados de expectativa de vida ao nível da região de saúde'
    );
    onMouseContextMessagePosition({ x, y });
    if (isInvalid == '-') {
      onMessageHidden(true);
    } 
  };


  useEffect(() => {
    setDataKey(shouldUseRegionData ? 'region' : 'city');
  }, [data, shouldUseRegionData]);

  return (
    <S.Container>
      <ChartHeader>população e demográficos</ChartHeader>
      <S.Infos>
        <S.InfoBox 
          onMouseOver={(e) =>
            getMousePosition(e.pageX, e.pageY, dataKey !== 'city' && '-') 
          }
          onMouseOut={() => onMessageHidden(false)}
        >
          <S.SvgContainer>
            <PeopleCircle />
          </S.SvgContainer>
          <S.DataContainer>
            <S.TextHighlight shouldUseRegionData={shouldUseRegionData}>
              {
                dataKey !== 'city'
                ? '-'
                : `${invalidValues(round3(data[dataKey].expVida))}`.replace('.', ',')
              } anos
            </S.TextHighlight>
            <S.Subtitle>
              <strong>Expectativa de Vida</strong> ao Nascer (2010)
            </S.Subtitle>
            <S.AdditionalInfo>
              <span>
                <State /> {`${invalidValues(round3(data.state.expVida))}`.replace('.', ',')}
              </span>
              <span>
                <Country /> {`${invalidValues(round3(data.country.expVida))}`.replace('.', ',')}
              </span>
            </S.AdditionalInfo>
          </S.DataContainer>
        </S.InfoBox>

        <S.InfoBox
          onMouseOver={(e) =>
            getMousePosition(e.pageX, e.pageY, dataKey !== 'city' && '-') 
          }
          onMouseOut={() => onMessageHidden(false)}
        >
          <S.SvgContainer>
            <Calendar />
          </S.SvgContainer>
          <S.DataContainer>
            <S.TextHighlight shouldUseRegionData={shouldUseRegionData}>
              {invalidValues(percent(data[dataKey].pctPop65m))}
            </S.TextHighlight>
            <S.Subtitle>
              % da População com <strong>65+ anos</strong>
            </S.Subtitle>
            <S.AdditionalInfo>
              <span>
                <State /> {`${invalidValues(round3(data.state.pctPop65m))}`.replace('.', ',')}
              </span>
              <span>
                <Country /> {`${invalidValues(round3(data.country.pctPop65m))}`.replace('.', ',')}
              </span>
            </S.AdditionalInfo>
          </S.DataContainer>
        </S.InfoBox>

        <S.InfoBox
          onMouseOver={(e) =>
            getMousePosition(e.pageX, e.pageY, dataKey !== 'city' && '-') 
          }
          onMouseOut={() => onMessageHidden(false)}
        >
          <S.SvgContainer>
            <DropletHalf />
          </S.SvgContainer>
          <S.DataContainer>
            <S.TextHighlight shouldUseRegionData={shouldUseRegionData}>
              {invalidValues(percent(data[dataKey].pctSanAdeq))}
            </S.TextHighlight>
            <S.Subtitle>
              <strong>Saneamento Básico </strong> (2010)
            </S.Subtitle>
            <S.AdditionalInfo>
              <span>
                <State /> {`${invalidValues(round3(data.state.pctSanAdeq))}`.replace('.', ',')}
              </span>
              <span>
                <Country /> {`${invalidValues(round3(data.country.pctSanAdeq))}`.replace('.', ',')}
              </span>
            </S.AdditionalInfo>
          </S.DataContainer>
        </S.InfoBox>
      </S.Infos>
    </S.Container>
  );
};

export default PopulationAndDemography;
