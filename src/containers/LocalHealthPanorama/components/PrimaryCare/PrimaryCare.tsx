/*eslint no-sequences: ["error", { "allowInParentheses": false }]*/
import React, { useCallback, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { percent } from '../../../../utils/math/measurements-units';
import {
  azure,
  getPanoramaDataColors,
  ghost,
  silver,
  white,
} from '../../../../constants/theme';
import { BasicAttentionPanorama } from '../../../../store/health-panorama/health-panorama.types';
import ChartHeader from '../ChartHeader';
import * as S from './PrimaryCare.css';
import invalidValues from '../../../../utils/invalid-values';

type Props = {
  basicAttention: BasicAttentionPanorama,
  shouldUseRegionData: boolean,
  onMouseContextMessagePosition: (
    position: ContextMessagePositionProps
  ) => void,
  onMessageHidden: (hide: boolean) => void,
  onMessageContent: (value: string) => void,
};

type ContextMessagePositionProps = {
  x: number,
  y: number,
};

const PrimaryCare = ({
  shouldUseRegionData,
  basicAttention,
  onMouseContextMessagePosition,
  onMessageHidden,
  onMessageContent,
}: Props) => {
  const [dataKey, setDataKey] = useState('city');

  const getMousePosition = (x: number, y: number, value: any) => {
    onMessageContent(
      'Infelizmente, os dados para esse período não estão disponíveis.'
    );
    const isInvalid = invalidValues(percent(value));
    onMouseContextMessagePosition({ x, y });
    if (isInvalid == '-') {
      onMessageHidden(true);
    }
  };

  const draw = useCallback(
    (
      elementId: string,
      barValuePercent: number,
      ufValue: number,
      countryValue: number,
      shouldUseRegionData
    ) => {
      const barWidth = 262;
      const internalBar = (barWidth * barValuePercent) / 100;
      const ufIcon = (barWidth * ufValue) / 100;
      const countryIcon = (barWidth * countryValue) / 100;

      const svg: d3.Selection<d3.BaseType, unknown, HTMLElement, any> = d3
        .select(`#${elementId}`)
        .classed('chart-primary-care', true);

      svg.select('#valueBarElement').remove();
      svg.select('#countryIconElement').remove();
      svg.select('#ufIconElement').remove();
      svg.select('#ufIconElementText').remove();
      svg.select('#countryIconElementText').remove();

      const countryPosition = (elementPosition: number) => {
        if (countryIcon >= ufIcon) {
          return elementPosition + 15;
        } else if (countryIcon <= ufIcon) {
          return elementPosition - 15;
        } else if (countryIcon == ufIcon) {
          return elementPosition - 15;
        } else {
          return elementPosition;
        }
      };

      const ufPosition = (elementPosition: number) => {
        if (ufIcon >= countryIcon) {
          return elementPosition + 10;
        } else if (ufIcon <= countryIcon) {
          return elementPosition - 10;
        } else if (ufIcon == countryIcon) {
          return elementPosition + 10;
        } else {
          return elementPosition;
        }
      };

      // fill external bar
      svg
        .append('rect')
        .attr('id', 'valueBarElement')
        .style('fill', `${white}`)
        .attr('stroke', `${silver}`)
        .attr('x', '267.5')
        .attr('y', '-10')
        .attr('width', '21')
        .attr('height', '265')
        .attr('rx', '10.5')
        .attr('transform', 'rotate(90 267.5 0)');

      // fill internal bar

      svg
        .append('rect')
        .style('fill', `${getPanoramaDataColors({ shouldUseRegionData })}`)
        .attr('width', '16')
        .attr('height', internalBar === 0 ? '0' : internalBar - 5)
        .attr('opacity', '0.5')
        .attr('x', '265')
        .attr('y', barWidth - internalBar - 5)
        .attr('rx', '8')
        .attr('transform', 'rotate(90 265 3.00001)');

      if (ufIcon < 0 && countryIcon < 0) return;

      // fill country
      svg
        .append('rect')
        .attr('id', 'countryIconElement')
        .style('fill', `${ghost}`)
        .style('stroke', `${white}`)
        .attr('x', countryIcon)
        .attr('y', '15.5')
        .attr('width', '10')
        .attr('height', '10')
        .attr('transform', 'translate(10, 0)');

      // text country
      svg
        .append('text')
        .attr('id', 'countryIconElementText')
        .attr('font-size', '10px')
        .text(invalidValues(percent(countryValue)))
        .attr('font-size', '10px')
        .text(invalidValues(percent(countryValue)))
        .style('color', 'black')
        .attr('x', countryPosition(countryIcon))
        .attr('y', '40');

      // fill uf
      svg
        .append('rect')
        .attr('id', 'ufIconElement')
        .style('fill', `${azure}`)
        .style('stroke', `${white}`)
        .attr('x', ufIcon)
        .attr('y', '14.2929')
        .attr('width', '9.48531')
        .attr('height', '9.48531')
        .attr('transform', `rotate(45 ${ufIcon + 5} 30)`);

      // text uf
      svg
        .append('text')
        .attr('id', 'ufIconElementText')
        .attr('font-size', '10px')
        .text(`${invalidValues(percent(ufValue))}`.replace('.', ','))
        .style('color', 'black')
        .attr('x', ufPosition(ufIcon - 15))
        .attr('y', '40')
        .attr('transform', 'translate(15, 0)');
    },
    []
  );

  useEffect(() => {
    const key = shouldUseRegionData ? 'region' : 'city';
    setDataKey(key);

    draw(
      'primary-care-coverage',
      basicAttention[key].cobAb,
      basicAttention.state.cobAb,
      basicAttention.country.cobAb,
      shouldUseRegionData
    );
    draw(
      'vaccine-coverage',
      basicAttention[key].cobVacPolio,
      basicAttention.state.cobVacPolio,
      basicAttention.country.cobVacPolio,
      shouldUseRegionData
    );

    draw(
      'live-births',
      basicAttention[key].pctPrenatalAdeq,
      basicAttention.state.pctPrenatalAdeq,
      basicAttention.country.pctPrenatalAdeq,
      shouldUseRegionData
    );
  }, [basicAttention, shouldUseRegionData]);

  return (
    <S.Container>
      <ChartHeader>atenção basica</ChartHeader>
      <S.ChartContainer
        id="primary-care-container"
        onMouseOver={(e) =>
          getMousePosition(e.pageX, e.pageY, basicAttention?.[dataKey]?.cobAb)
        }
        onMouseOut={() => onMessageHidden(false)}
      >
        <S.ChartInfo>
          <S.Label>
            Cobertura <strong>Atenção Básica</strong>
          </S.Label>
          <S.Percentage shouldUseRegionData={shouldUseRegionData}>
            {invalidValues(percent(basicAttention?.[dataKey]?.cobAb))}
          </S.Percentage>
        </S.ChartInfo>
        <S.Chart>
          <svg id="primary-care-coverage" />
        </S.Chart>
      </S.ChartContainer>
      <S.ChartContainer
        onMouseOver={(e) =>
          getMousePosition(
            e.pageX,
            e.pageY,
            basicAttention?.[dataKey]?.cobVacPolio
          )
        }
        onMouseOut={() => onMessageHidden(false)}
      >
        <S.ChartInfo>
          <S.Label>
            Cobertura <strong>Vacinal</strong> Poliomielite
          </S.Label>
          <S.Percentage shouldUseRegionData={shouldUseRegionData}>
            {invalidValues(percent(basicAttention?.[dataKey]?.cobVacPolio))}
          </S.Percentage>
        </S.ChartInfo>
        <S.Chart>
          <svg id="vaccine-coverage" />
        </S.Chart>
      </S.ChartContainer>
      <S.ChartContainer
        onMouseOver={(e) =>
          getMousePosition(
            e.pageX,
            e.pageY,
            basicAttention?.[dataKey]?.pctPrenatalAdeq
          )
        }
        onMouseOut={() => onMessageHidden(false)}
      >
        <S.ChartInfo>
          <S.Label>
            % Nascidos Vivos com <strong>Pré-Natal Adequado</strong>
          </S.Label>
          <S.Percentage shouldUseRegionData={shouldUseRegionData}>
            {invalidValues(percent(basicAttention?.[dataKey]?.pctPrenatalAdeq))}
          </S.Percentage>
        </S.ChartInfo>
        <S.Chart>
          <svg id="live-births" />
        </S.Chart>
      </S.ChartContainer>
      <S.Separator />
    </S.Container>
  );
};

export default PrimaryCare;
