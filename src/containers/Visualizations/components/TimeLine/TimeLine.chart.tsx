/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import * as d3 from 'd3';
import { ScaleBand, ScaleLinear } from 'd3';
import {
  cinderella,
  halfBaked,
  lily,
  loafer,
  swansDown,
  twilight,
} from '../../../../constants/theme';
import { DataToTimeLine } from '../../../../store/visualizations/visualizations.types';

let chart = {
  width: 685,
  height: 600,
  xScale: {} as ScaleBand<string>,
  yScale: {} as ScaleLinear<number, number, never>,
  compareTo: 'state',
  radius: 18,
  delta: 10,
  margin: { top: 30, bottom: 30, left: 5, right: 95 },
  tooltip: { height: 160, width: 275, lineHeight: 25, margin: 20 },
  svg: {} as d3.Selection<d3.BaseType, unknown, HTMLElement, any>,
}

const parseData = (data: DataToTimeLine) => {
  let levels = ['country', 'macro_region', 'region', 'state', 'city'];
  let chartData: any[] = [];

  levels.forEach((level) => {
    data[level].series.forEach((row) => {
        row.name = data[level].name;
        row.level = level;
    });

    chartData.push(...data[level].series);
  });

  return [levels, chartData]
}

const createNumericalScale = (domain, range) => {
  return d3.scaleLinear().domain(domain).range(range).nice();
};

const createCategoricalScale = (domain, range) => {
  return d3.scaleBand().domain(domain).range(range).padding(0.25);
};

const createVerticalGradient = (gradientName, startColor, endColor) => {
  const gradient = chart.svg
      .append('defs')
      .attr('class', 'custom-gradient')
      .append('linearGradient')
      .attr('id', gradientName)
      .attr('x1', '0%')
      .attr('x2', '0%')
      .attr('y1', '0%')
      .attr('y2', '100%');

  gradient.append('stop').attr('offset', '0%').attr('stop-color', startColor);
  gradient.append('stop').attr('offset', '100%').attr('stop-color', endColor);
};

const addHorizontalAxis = (data: DataToTimeLine) => {
  const translate = chart.height - chart.margin.bottom;
  let domain:number[] = [];
  for (let i = data.minYear; i <= data.maxYear; i++) {
    domain.push(i);
  }
  const range = [chart.margin.left, chart.width - chart.margin.right];

  chart.xScale = createCategoricalScale(domain, range);

  const xAxis = d3
      .axisBottom(chart.xScale)
      .tickFormat(d3.format(''))
      .tickSizeOuter(0);

  chart.svg
    .append('g')
    .attr('id', 'chart-x-axis')
    .attr('transform', `translate(0, ${translate})`)
    .call(xAxis);
};

const addVerticalAxis = (data: any[], indicator: string, format: string, decPlaces: string) => {
  const translate = chart.margin.left;
  const domain = d3.extent(data, (d) => d[indicator]);
  const range = [chart.height - chart.margin.bottom, chart.margin.top];

  chart.yScale = createNumericalScale(domain, range);

  const labelFormatter = (d) => {
    if(format === 'percent') {
      return `${d}%`.replace('.', ',')
    } else {
      return `${d3.format(`.${decPlaces}f`)(d)}`.replace('.', ',')
    }
  }

  const yAxis = d3
      .axisLeft(chart.yScale)
      .tickFormat(d => labelFormatter(d))
      .ticks(5)
      .tickSizeOuter(0);


  chart.svg
    .append('g')
    .attr('id', 'chart-y-axis')
    .attr('transform', `translate(${translate}, 0)`)
    .call(yAxis);
};

const addHorizontalGridlines = () => {
  const startAt = chart.margin.left;
  const endAt = chart.width - chart.margin.right;
  const ticks = chart.yScale.ticks(5);

  chart.svg
    .append('g')
    .attr('id', 'chart-gridlines')
    .selectAll('.chart-gridline')
    .data(ticks)
    .enter()
    .append('line')
    .attr('class', 'chart-gridline')
    .attr('x1', startAt)
    .attr('x2', endAt)
    .attr('y1', (d) => chart.yScale(d))
    .attr('y2', (d) => chart.yScale(d));
};

const addDataBars = (data: any[], indicator: string) => {
  const groupedData = chart.xScale.domain().map((year) => {
      const cityValue = data
          .filter((d) => d.year == year)
          .filter((d) => d.level == 'city')
          .map((d) => d[indicator])[0];

      const compareToValue = data
          .filter((d) => d.year == year)
          .filter((d) => d.level == chart.compareTo)
          .map((d) => d[indicator])[0];

      return {
          year: year,
          minimum: d3.min([cityValue, compareToValue]),
          maximum: d3.max([cityValue, compareToValue]),
          type: cityValue > compareToValue ? 'positive' : 'negative',
      };
  });

  chart.svg
      .append('g')
      .attr('id', 'chart-data-bars')
      .attr('class', 'chart-data')
      .selectAll('.chart-bar')
};

const addYearLines = () => {
  const startAt = chart.margin.top;
  const endAt = chart.height - chart.margin.bottom;
  const years = chart.xScale.domain().map((y) => ({ year: y }));

  chart.svg
    .append('g')
    .attr('id', 'chart-gridlines')
    .selectAll('.chart-line')
    .data(years)
    .enter()
    .append('line')
    .attr('class', (d) => `chart-year-line year-line-${d.year}`)
    .attr('x1', (d) => chart.xScale(d.year)! + chart.xScale.bandwidth() / 2)
    .attr('x2', (d) => chart.xScale(d.year)! + chart.xScale.bandwidth() / 2)
    .attr('y1', startAt)
    .attr('y2', endAt);
};

const addDataLines = (data: any[], indicator: string) => {
  const currentLevels = [...new Set(data.map((d) => d.level))];
  const groupedData = currentLevels.map((level) => ({
      level: level,
      values: data.filter((d) => d.level == level && d[indicator] >= 0),
  }));

  const lineGenerator = d3
      .line()
      .x((d) => chart.xScale(d.year)! + chart.xScale.bandwidth() / 2)
      .y((d) => chart.yScale(d[indicator]));

  chart.svg
      .append('g')
      .attr('id', 'chart-data-lines')
      .attr('class', 'chart-data')
      .selectAll('.chart-line')
      .data(groupedData)
      .enter()
      .append('path')
      .attr('class', (d) => `chart-line line-level-${d.level}`)
      .attr('d', (d) => lineGenerator(d.values));
};

const addDataSquares = (data: any[], indicator: string) => {
  chart.svg
    .append('g')
    .attr('id', 'chart-data-squares')
    .attr('class', 'chart-data')
    .selectAll('.chart-square')
    .data(data.filter((d) => d.level != 'city'))
    .enter()
    .filter(d => d[indicator] >= 0)
    .append('path')
    .attr(
        'class',
        (d) => `chart-square square-year-${d.year} square-level-${d.level}`,
    )
    .attr('d', d3.symbol().type(d3.symbolSquare))
    .attr(
        'transform',
        (d) =>
            `translate(${
                chart.xScale(d.year)! + chart.xScale.bandwidth() / 2
            }, ${chart.yScale(d[indicator])})`,
    );
};

const addDataCircles = (data: any[], indicator: string, decPlaces: string) => {
  chart.svg
      .append('g')
      .attr('id', 'chart-data-circles')
      .attr('class', 'chart-data')
      .selectAll('.chart-circle')
      .data(data.filter((d) => d.level == 'city'))
      .enter()
      .filter(d => d[indicator] >= 0)
      .append('circle')
      .attr(
          'class',
          (d) => `chart-circle circle-year-${d.year} circle-level-${d.level}`,
      )
      .attr('cx', (d) => chart.xScale(d.year)! + chart.xScale.bandwidth() / 2)
      .attr('cy', (d) => chart.yScale(d[indicator]))
      .attr('r', chart.radius)
      .attr('opacity', 0.9)
      .style('fill', 'url(#circle-gradient)');

  chart.svg
      .append('g')
      .attr('id', 'chart-data-circle-text')
      .attr('class', 'chart-data')
      .selectAll('.chart-circle-text')
      .data(data.filter((d) => d.level == 'city'))
      .enter()
      .filter(d => d[indicator] >= 0)
      .append('text')
      .attr('class', (d) => `chart-circle-text circle-text-level-${d.level}`)
      .text((d) => `${d3.format(`.${decPlaces}f`)(d[indicator])}`.replace('.', ','))
      .attr('alignment-baseline', 'middle')
      .attr('text-anchor', 'middle')
      .attr(
          'transform',
          (d) =>
              `translate(${
                  chart.xScale(d.year)! + chart.xScale.bandwidth() / 2
              }, ${chart.yScale(d[indicator])})`,
      );
};

const addLineLabels = (data: any[], indicator: string, decPlaces: string, lastYear) => {
  const labelHeight = 14;
  const currentData = data.filter((d) => d.year == lastYear);

  const labels = currentData.map((d) => ({
      position: chart.yScale(d[indicator]),
      fx: 0,
  }));

  const forceBorderline = (minimum, maximum) => {
      let nodes;
      const force = () => {
          nodes.forEach((node) => {
              if (node.y > maximum) node.y = maximum;
              if (node.y < minimum) node.y = minimum;
          });
      };

      force.initialize = (_) => (nodes = _);
      return force;
  };

  const force = d3
      .forceSimulation()
      .nodes(labels)
      .force('collide', d3.forceCollide(labelHeight / 2))
      .force('y', d3.forceY((d) => d.position).strength(1))
      .force('clamp', forceBorderline(0, chart.height))
      .stop();

  for (let i = 0; i < 100; i++) force.tick();

  labels.sort((a, b) => a.y - b.y);
  currentData.sort((a, b) => b[indicator] - a[indicator]);
  currentData.forEach((d, i) => (d.y = labels[i].y));

  chart.svg
      .append('g')
      .attr('id', 'chart-line-labels')
      .attr('class', 'chart-data')
      .selectAll('.chart-line-label')
      .data(currentData)
      .enter()
      .append('foreignObject')
      .attr('width', '170px')
      .attr('height', '20px')
      .attr('x', (chart.xScale.range()[1] - 10) + 5)
      .attr('dx', chart.delta)
      .attr('y', (d) => d.y - 8)
      .style('cursor', 'pointer')
      .on('mouseenter', (d) => showLineDetails(d, data, indicator, decPlaces))
      .on('mouseleave', (d) => hideLineDetails(d))
      .append('xhtml:p')
      .attr(
          'class',
          (d) =>
              `chart-line-label line-label-level-${d.level}${
                  (d.level == chart.compareTo || d.level == 'city')
                      ? ' line-label-selected-level'
                      : ''
              }`,
      )
      .text(
          (d) =>
              `${d.name}`,
      )
      .attr('alignment-baseline', 'middle')
      .attr('font-size', labelHeight)
};

const showLineDetails = (d, data: any[], indicator: string, decPlaces: string) => {
  const details = d.target.__data__
  const text = d.target.querySelector('p')

  if(text.innerHTML.length > 20) {
    text.classList.add('line-label-level-animation')
  }

  const cssSelectors = {
      hide: [
          '.chart-bar',
          '.chart-square',
          '.chart-circle',
          '.chart-circle-text',
          '.chart-line',
          '.chart-line-label',
      ],
      show: [
          `.line-label-level-${details.level}`,
          `.line-level-${details.level}`,
          `.square-level-${details.level}`,
          `.circle-level-${details.level}`,
          `.circle-text-level-${details.level}`,
      ],
  };

  chart.svg.selectAll(cssSelectors.hide.join(', ')).attr('opacity', 0.2);
  chart.svg.selectAll(cssSelectors.show.join(', ')).attr('opacity', 1);

  chart.svg
    .selectAll(`.square-level-${details.level}`)
    .classed('highlighted-square', true);

  if (details.level == 'city') return;
  chart.svg
      .append('g')
      .attr('id', 'chart-data-line-details')
      .selectAll('.chart-line-text')
      .data(data.filter((s) => s.level == details.level))
      .enter()
      .filter(d => d[indicator] >= 0)
      .append('text')
      .attr('class', (d) => `chart-line-text line-details-level-${d.level}`)
      .attr('x', (d) => chart.xScale(d.year)! + chart.xScale.bandwidth() / 2)
      .attr('y', (d) => chart.yScale(d[indicator]))
      .attr('dy', -chart.radius)
      .text((d) => `${d3.format(`.${decPlaces}f`)(d[indicator])}`.replace('.', ','))
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle');
};

const hideLineDetails = (d) => {
  const details = d.target.__data__
  const text = d.target.querySelector('p')

  text.classList.remove('line-label-level-animation')

  const cssSelectors = [
      '.chart-bar',
      '.chart-square',
      '.chart-circle-text',
      '.chart-line',
      '.chart-line-label',
  ];

  chart.svg.select('#chart-data-line-details').remove();
  chart.svg.selectAll(cssSelectors.join(', ')).attr('opacity', 1);
  chart.svg.selectAll('.chart-circle').attr('opacity', 0.9);

  chart.svg
    .selectAll(`.square-level-${details.level}`)
    .classed('highlighted-square', false);
};

const createSvg = (width, height) => {
  return d3
    .select('#chart-time-line')
    .attr('viewBox', [0, 0, width, height])
};

const timeLineChart = (data: DataToTimeLine, indicator: string, format: string, decPlaces: string) => {
  chart.svg = createSvg(chart.width, chart.height)

  const [levels, dataParsed] = parseData(data);

  chart.svg.select('#chart-x-axis').remove();
  addHorizontalAxis(data);

  chart.svg.select('#chart-y-axis').remove();
  addVerticalAxis(dataParsed, indicator, format, decPlaces);

  chart.svg.selectAll('#chart-gridlines').remove();
  addHorizontalGridlines();

  chart.svg.selectAll('.custom-gradient').remove();
  createVerticalGradient('positive-bar-gradient', loafer, swansDown);
  createVerticalGradient('negative-bar-gradient', cinderella, twilight);
  createVerticalGradient('circle-gradient', halfBaked, lily);

  chart.svg.selectAll('.chart-data').remove();
  chart.svg.select('#chart-data-line-details').remove();

  addDataBars(dataParsed, indicator);
  addYearLines();
  addDataLines(dataParsed, indicator);
  addDataSquares(dataParsed, indicator);
  addDataCircles(dataParsed, indicator, decPlaces);
  addLineLabels(dataParsed, indicator, decPlaces, data.maxYear);

  return true;
};

export default timeLineChart;
