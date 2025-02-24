/* eslint-disable prefer-const */
import * as d3 from 'd3';
import { MortalityPanorama } from '../../../../store/health-panorama/health-panorama.types';

let chart = {
  svg: {} as d3.Selection<SVGSVGElement, unknown, HTMLElement, any>,
  references: ['state', 'country'],
  indicators: ['rt_death_primc_adj', 'rt_hosp_primc'],
  axisLabels: ['', ''],
  data: {
    deaths: {
      country: 0,
      state: 0,
      region: 0,
      city: 0,
    },
    hosp: {
      country: 0,
      state: 0,
      region: 0,
      city: 0,
    }
  },
  margin: {
    left: 10,
    right: 10,
    top: 10,
    bottom: 30,
  },
  topPadding: 10,
  width: 350,
  height: 300,
  lineHeight: 16,
  deathsScale: {} as d3.ScaleLinear<number, number, never>,
  hospScale: {} as d3.ScaleLinear<number, number, never>,
  deathsMin: 0,
  deathsMax: 500,
  hospMin: 0,
  hospMax: 10000,
  level: 'city',
}

const createSvg = (width, height) => {
  return d3
    .select('#container-candle')
    .append('svg')
    .attr('id', 'candle-chart')
    .attr('viewBox', [0, 0, width, height])
};

const createNumericalScale = (domain, range) => {
  return d3.scaleLinear().domain(domain).range(range);
};

const getSymbolGenerator = (level, size) => {
  const symbolGenerators = {
      country: d3
          .symbol()
          .size(size * 1.25)
          .type(d3.symbolSquare),
      state: d3
          .symbol()
          .size(size * 0.9)
          .type(d3.symbolSquare),
      macroregion: d3
          .symbol()
          .size(size * 0.8)
          .type(d3.symbolStar),
      region: d3.symbol().size(size).type(d3.symbolWye),
      city: d3
          .symbol()
          .size(size * 1.1)
          .type(d3.symbolCircle),
  };

  return symbolGenerators[level];
};

const addMortalityGuides = () => {
  d3.selectAll('.mortality-axis-title').remove();

  chart.svg
      .append('text')
      .attr('class', 'mortality-axis-title')
      .attr('dx', chart.margin.left)
      .attr('dy', chart.margin.top + chart.topPadding)
      .text('Mortalidade Ajustada');

  chart.svg
      .append('text')
      .attr('class', 'mortality-axis-title')
      .attr('dx', chart.width / 2)
      .attr('dy', chart.margin.top + chart.topPadding)
      .text('Hospitalizações');

  const guide1 = chart.svg
      .append('text')
      .attr('class', 'mortality-axis-title')
      .attr('dx', chart.margin.left)
      .attr(
          'dy',
          chart.margin.top +
              chart.topPadding +
              chart.lineHeight,
      );

  const guide2 = chart.svg
      .append('text')
      .attr('class', 'mortality-axis-title')
      .attr('dx', chart.width / 2)
      .attr(
          'dy',
          chart.margin.top +
              chart.topPadding +
              chart.lineHeight,
      );

  guide1.append('tspan').text('por ');
  guide1
      .append('tspan')
      .text('causas evitáveis')
      .style('font-weight', 'bold');

  guide2.append('tspan').text('por ');
  guide2.append('tspan').text('CSAP').style('font-weight', 'bold');
};

const addMortalityAxes = () => {
  const deathsDomain = [chart.deathsMin, chart.deathsMax];

  d3.selectAll('.mortality-axis').remove();
  d3.selectAll('.mortality-axis-label').remove();

  const hospDomain = [
    chart.hospMin,
    chart.hospMax
  ];

  const range = [chart.height - chart.margin.bottom, chart.height * 0.30];
  chart.deathsScale = createNumericalScale(deathsDomain, range);
  chart.hospScale = createNumericalScale(hospDomain, range);

  const deathsAxis = d3
      .axisLeft(chart.deathsScale)
      .tickFormat(d3.format('.0f'))
      .tickValues(deathsDomain)
      .tickSizeOuter(-7.5);

  const hospAxis = d3
      .axisLeft(chart.hospScale)
      .tickFormat(d3.format('.0f'))
      .tickValues(hospDomain)
      .tickSizeOuter(-7.5);

  chart.svg
      .append('g')
      .attr('id', 'deaths-axis')
      .attr('class', 'mortality-axis')
      .attr('transform', `translate(${chart.width / 4}, 0)`)
      .call(deathsAxis);

  chart.svg
      .append('g')
      .attr('id', 'hosp-axis')
      .attr('class', 'mortality-axis')
      .attr('transform', `translate(${3 * (chart.width / 4)}, 0)`)
      .call(hospAxis);

  chart.axisLabels.forEach((label, i) => {
      chart.svg
          .append('text')
          .attr('class', 'mortality-axis-label')
          .attr('dx', chart.width / 4 - 15)
          .attr('dy', i ? range[i] + 20 : range[i] - 15)
          .text(label)
          .attr('alignment-baseline', 'middle')
          .attr('text-anchor', 'end');

      chart.svg
          .append('text')
          .attr('class', 'mortality-axis-label')
          .attr('dx', 3 * (chart.width / 4) - 15)
          .attr('dy', i ? range[i] + 20 : range[i] - 15)
          .text(label)
          .attr('alignment-baseline', 'middle')
          .attr('text-anchor', 'end');
  });

  d3.selectAll('.mortality-axis .tick text').attr(
      'transform',
      'translate(-5, 0)',
  );

  const axisLabelDeath = deathsDomain[1] > 0 ? d3.format('.0f')(deathsDomain[1]) : '-'
  const axisLabelHosp = hospDomain[1] > 0 ? hospDomain[1] : '-'

  d3.select('#deaths-axis .tick:last-of-type text').text(axisLabelDeath);

  d3.select('#hosp-axis .tick:last-of-type text').text(axisLabelHosp);
};

const addMortalityValues = () => {

  d3.selectAll('.mortality-symbol').remove();
  d3.selectAll('.mortality-axis-value').remove();

  const angles = { state: 45, region: 60 };
  chart.references.concat(chart.level).forEach((level) => {
      chart.svg
          .append('path')
          .attr('class', `mortality-symbol symbol-${level}`)
          .filter(() => chart.data.deaths[level] != -1)
          .attr('d', getSymbolGenerator(level, 120))
          .attr(
              'transform',
              `translate(${chart.width / 4}, ${chart.deathsScale(
                  chart.data.deaths[level],
              )}) rotate(${angles[level] || 0})`,
          );

      chart.svg
          .append('path')
          .attr('class', `mortality-symbol symbol-${level}`)
          .attr('d', getSymbolGenerator(level, 120))
          .filter(() => chart.data.hosp[level] != -1)
          .attr(
              'transform',
              `translate(${
                  3 * (chart.width / 4)
              }, ${chart.hospScale(chart.data.hosp[level])}) rotate(${angles[level] || 0})`,
          );
  });

  const forceBorderline = (minimum, maximum) => {
      let nodes;
      const force = () => {
          nodes.forEach((node) => {
              if (node.y < minimum) node.y = minimum;
              if (node.y > maximum) node.y = maximum;
          });
      };

      force.initialize = (_) => (nodes = _);
      return force;
  };

  const labelHeight = 22;
  const deathsLabels = chart.references
      .concat(chart.level)
      .map((level) => ({
          fx: 0,
          level: level,
          value: chart.data.deaths[level],
          text: d3.format('.1f')(chart.data.deaths[level]).replace('.', ','),
          position: chart.deathsScale(chart.data.deaths[level]),
      }));

  const hospLabels = chart.references
      .concat(chart.level)
      .map((level) => ({
          fx: 0,
          level: level,
          value: chart.data.hosp[level],
          text: d3
              .format('.1f')(chart.data.hosp[level])
              .replace('.', ','),
          position: chart.hospScale(
            chart.data.hosp[level]
          ),
      }));

  const deathsForce = d3
      .forceSimulation()
      .nodes(deathsLabels)
      .force('collide', d3.forceCollide(labelHeight / 2))
      .force('y', d3.forceY((d) => d.position).strength(1))
      .force('clamp', forceBorderline(0, chart.height))
      .stop();

  const hospForce = d3
      .forceSimulation()
      .nodes(hospLabels)
      .force('collide', d3.forceCollide(labelHeight / 2))
      .force('y', d3.forceY((d) => d.position).strength(1))
      .force('clamp', forceBorderline(0, chart.height))
      .stop();

  for (let i = 0; i < 300; i++) deathsForce.tick();
  for (let j = 0; j < 300; j++) hospForce.tick();

  const deathsPositions = deathsLabels
      .sort((a, b) => a.y - b.y)
      .map((d) => d.y);
  deathsLabels.sort((a, b) => b.value - a.value);
  deathsLabels.forEach((d, i) => (d.y = deathsPositions[i]));

  const hospPositions = hospLabels.sort((a, b) => a.y - b.y).map((d) => d.y);
  hospLabels.sort((a, b) => b.value - a.value);
  hospLabels.forEach((d, i) => (d.y = hospPositions[i]));

  deathsLabels.forEach((label) => {
      chart.svg
          .append('text')
          .filter(() => label.text !== '−1,0')
          .attr('class', `mortality-axis-value ${label.level}-label`)
          .attr('dx', chart.width / 4 + 10)
          .attr('dy', label.y)
          .text(label.text)
          .attr('alignment-baseline', 'middle');
  });

  hospLabels.forEach((label) => {
      chart.svg
          .append('text')
          .filter(() => label.text !== '−1,0')
          .attr('class', `mortality-axis-value ${label.level}-label`)
          .attr('dx', 3 * (chart.width / 4) + 10)
          .attr('dy', label.y)
          .text(label.text)
          .attr('alignment-baseline', 'middle');
  });
};

const getMaxValueScale = (max: number) => Math.trunc(max * 1.15);
const getMinValueScale = (min: number, max: number) => Math.max( ...[0,  Math.trunc(min - (max * 0.15 ))]);

const mortalityChart = (data: MortalityPanorama, level: 'country' | 'region') => {
  d3.selectAll('#candle-chart').remove()

  chart.svg = createSvg(chart.width, chart.height)

  chart.data.deaths.city = data.city.txMortEvitAjCens;
  chart.data.deaths.state = data.state.txMortEvitAjCens;
  chart.data.deaths.country = data.country.txMortEvitAjCens;
  chart.data.deaths.region = data.region.txMortEvitAjCens;

  chart.data.hosp.city = data.city.txHospCsap;
  chart.data.hosp.state = data.state.txHospCsap;
  chart.data.hosp.country = data.country.txHospCsap;
  chart.data.hosp.region = data.region.txHospCsap;

  const maxHospValue = Math.max(...[chart.data.hosp.city, chart.data.hosp.state, chart.data.hosp[level]]);
  const maxDeathsValue = Math.max(...[chart.data.deaths.city, chart.data.deaths.state, chart.data.deaths[level]]);
  const minHospValue = Math.min(...[chart.data.hosp.city, chart.data.hosp.state, chart.data.hosp[level]]);
  const minDeathsValue = Math.min(...[chart.data.deaths.city, chart.data.deaths.state, chart.data.deaths[level]]);

  chart.level = level === 'region' ? level : 'city'

  if (data.city.txMortEvitAjCens !== 0 || data.city.txHospCsap !== 0) {
    chart.hospMax = getMaxValueScale(maxHospValue)
    chart.deathsMax = getMaxValueScale(maxDeathsValue)
    chart.hospMin = getMinValueScale(minHospValue, maxHospValue)
    chart.deathsMin = getMinValueScale(minDeathsValue, maxDeathsValue)
  }

  addMortalityGuides()
  addMortalityAxes()
  addMortalityValues()

}

export default mortalityChart
