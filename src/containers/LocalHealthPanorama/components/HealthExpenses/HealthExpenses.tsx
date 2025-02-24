import React, { useCallback, useEffect, useState } from 'react';
import ChartHeader from '../ChartHeader';
import * as d3 from 'd3';
import { scaleBand, scaleLinear } from 'd3-scale';
import { AxisDomain, AxisScale } from 'd3';
import { HealthExpendingPanorama } from '../../../../store/health-panorama/health-panorama.types';
import * as S from './HealthExpenses.css';
import ExpensesSummary from './ExpensesSummary';

type Props = {
  shouldUseRegionData: boolean,
  data: HealthExpendingPanorama
}
const HealthExpenses = ({data, shouldUseRegionData}: Props) => {
  const [key, setDataKey] = useState('city');

  const BarChart = useCallback(
    (
      data,
      {
        x = (d, i) => i, // given d in data, returns the (ordinal) x-value
        y = (d) => d, // given d in data, returns the (quantitative) y-value
        marginTop = 20, // the top margin, in pixels
        marginRight = 0, // the right margin, in pixels
        marginBottom = 30, // the bottom margin, in pixels
        marginLeft = 40, // the left margin, in pixels
        width = 205, // the outer width of the chart, in pixels
        height = 162, // the outer height of the chart, in pixels
        xDomain, // an array of (ordinal) x-values
        xRange = [marginLeft, width - marginRight], // [left, right]
        yType = scaleLinear, // y-scale type
        yDomain, // [ymin, ymax]
        yRange = [height - marginBottom, marginTop], // [bottom, top]
        xPadding = 0.3, // amount of x-range to reserve to separate bars
      } = {}
    ) => {
      const oldSvg = document.getElementById('chart-health-expenses');

      oldSvg?.remove();
      // Compute values.
      const X = d3.map(data, x) as unknown as string[];
      const Y = d3.map(data, y) as unknown as number[];

      const colors = new Map([
        ['country-owner', '#CED4DA'],
        ['state-owner', '#34679A'],
        ['city-owner', shouldUseRegionData? '#2B7B6F':'#F7941D'],
        ['country-total', '#CED4DA80'],
        ['state-total', '#34679A80'],
        ['city-total', shouldUseRegionData? '#2B7B6F80':'#F7941D80'],
      ]);

      const series = d3
        .stack()
        .keys(colors.keys())
        .value((group, key) => group.get(key).totalExpenses)
        .order(d3.stackOrderReverse)(
          d3
            .rollup(
              data,
              ([d]) => d,
              (d) => d.length,
              (d) => d.type
            )
            .values()
        )
        .map((s) => (s.forEach((d) => (d.data = d.data.get(s.key))), s));

      const piker = d3
        .scaleOrdinal()
        .domain(colors.keys())
        .range(colors.values());

      // Compute default domains, and unique the x-domain.
      if (xDomain === undefined) xDomain = X;
      if (yDomain === undefined) yDomain = [0, d3.max(Y)];
      xDomain = new d3.InternSet(xDomain);

      // Omit any data not present in the x-domain.
      const I = d3.range(X.length).filter((i) => xDomain.has(X[i]));

      // Construct scales, axes, and formats.
      const xScale = scaleBand(xDomain, xRange).padding(xPadding) as unknown as AxisScale<AxisDomain>;
      const yScale = yType(yDomain, yRange);
      const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
      const yAxis = d3.axisLeft(yScale).ticks(height / 40);

      const formatValue = yScale.tickFormat(100);
      const title = (i) => `${X[i]}\n${formatValue(Y[i])}`;

      const svg = d3
        .create('svg')
        .attr('id', 'chart-health-expenses')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', [0, 0, width, height])
        .attr('style', 'max-width: 100%; height: auto; height: intrinsic;');

      svg
        .append('g')
        .attr('transform', `translate(${marginLeft},0)`)
        .call(yAxis)
        .call((g) => g.select('.domain'))
        .call((g) =>
          g
            .selectAll('.tick line')
            .clone()
            .attr('x2', width - marginLeft - marginRight)
            .attr('stroke', '#BDBDBD')
            .attr('stroke-dasharray', '2 2')
            .attr('stroke-width', '0.75')
        )
        .call((g) => g.selectAll('.tick text').attr('fill', '#BDBDBD'));

      const widthCheck = (value: string) => {
        if (value.includes('owner')) {
          return xScale.bandwidth() / 2;
        }

        return xScale.bandwidth();
      };

      const positionXCheck = (value: string, i: number) => {
        if (value.includes('owner')) {
          return xScale(X[i]) + xScale.bandwidth() / 4;
        }

        return xScale(X[i]);
      };

      const bar = svg
        .append('g')
        .selectAll('rect')
        .data(I)
        .join('rect')
        .attr('x', (i) =>
          positionXCheck(series.filter((s) => s.index === i)[0].key, i)
        )
        .attr('y', (i) => yScale(Y[i]))
        .attr('height', (i) => yScale(0) - yScale(Y[i]))
        .attr('width', (i) =>
          widthCheck(series.filter((s) => s.index === i)[0].key)
        )
        .attr('fill', (i) => piker(series.filter((s) => s.index === i)[0].key));

      if (title) bar.append('title').text(title);

      svg
        .append('g')
        .attr('transform', `translate(0,${height - marginBottom})`)
        .call(xAxis)
        .call((g) => g.selectAll('.tick line').remove())
        .call((g) => g.selectAll('.tick text').attr('fill', '#BDBDBD'));

      return svg.node();
    },
    [shouldUseRegionData]
  );

  useEffect(() => {
    const key = shouldUseRegionData ? 'region' : 'city';

    setDataKey(key);
    const city = data[key];
    const state = data.state;
    const country = data.country;
    const label = shouldUseRegionData ? 'Região' : 'Município';

    const chartData = [
      {id: 'd1', totalExpenses: city.despTotSaudePcMunDef, region: label, type: 'city-total'},
      { id: 'd2', totalExpenses: state.despTotSaudePcMunDef, region: 'Estado', type: 'state-total' },
      { id: 'd3', totalExpenses: country.despTotSaudePcMunDef, region: 'País', type: 'country-total' },
      { id: 'd4', totalExpenses: city.despRecpSaudePcMunDef, region: label, type: 'city-owner' },
      { id: 'd5', totalExpenses: state.despRecpSaudePcMunDef, region: 'Estado', type: 'state-owner' },
      { id: 'd6', totalExpenses: country.despRecpSaudePcMunDef, region: 'País', type: 'country-owner' },
    ];

    const chart = BarChart(chartData, {
      x: (d) => d.region,
      y: (d) => d.totalExpenses,
      width: 230,
      height: 162,
    });

    const container = document.getElementById(
      'container-chart-health-expenses'
    );

    if (container && chart) {
      container.appendChild(chart);
    }
  }, [data, shouldUseRegionData]);

  return (
    <S.Container>
      <ChartHeader>Despesas com saúde por Hab.(R$)</ChartHeader>
      <S.Content>
        <S.ChatInfo>
          <ExpensesSummary
            id="totalExpenses"
            title="Despesa Total"
            secondary
            shouldUseRegionData={shouldUseRegionData}
            totalValue={data[key].despTotSaudePcMunDef}
            stateValue={data.state.despTotSaudePcMunDef}
            countryValue={data.country.despTotSaudePcMunDef}
          />
          <ExpensesSummary
            id="ownerExpenses"
            title="Recursos Próprios"
            shouldUseRegionData={shouldUseRegionData}
            totalValue={data[key].despRecpSaudePcMunDef}
            stateValue={data.state.despRecpSaudePcMunDef}
            countryValue={data.country.despRecpSaudePcMunDef}
            />
        </S.ChatInfo>
        <S.Chart id="container-chart-health-expenses"></S.Chart>
      </S.Content>
    </S.Container>
  );
};

export default HealthExpenses;
