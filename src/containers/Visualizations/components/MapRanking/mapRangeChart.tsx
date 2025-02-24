/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as d3 from 'd3';
import {
  amber,
  bilobaFlower,
  chelseaGem,
  downriver,
  eastBay,
  jambalaya,
  marzipan,
  moonRaker2,
  paleSky,
  pizazz,
  shipCove,
  silver,
  textColor,
  white,
} from '../../../../constants/theme';
import {
  DataToMapRanking,
  LocalToMapRanking,
} from '../../../../store/visualizations/visualizations.types';
import { ScaleLinear } from 'd3';

const chart = {
  format: '',
  decPlaces: '',
  domain: {} as any,
  range: [] as number[],
  rangeSeparator: {} as d3.ScaleQuantize<number, never>,
  min: 0,
  max: 100,
  svg: {} as d3.Selection<d3.BaseType, unknown, HTMLElement, any>,
  radius: 6,
  margin: { top: 25, bottom: 25, left: 10, right: 30 },
  tooltip: { height: 32, width: 275, margin: 10 },
  height: 500,
  width: 50,
  year: '',
  data: [] as DataToMapRanking[],
}

let yScale = {} as ScaleLinear<number, number, never>

const createNumericalScale = (domain, range) => {
  return d3.scaleLinear().domain(domain).range(range);
};

const createQuantizeScale = (domain, range) => {
  return d3.scaleQuantize().domain(domain).range(range).nice();
};

const addRangeSeparator = () => {
  const range = Array.from({length: 10}).map((_, i) => i + 1)

  chart.rangeSeparator = createQuantizeScale(chart.domain, range);
};

export const colorPalette = (value: number) => {
  let color = paleSky;

  if(value < 0) {
    return color;
  }

  const level = chart.rangeSeparator(value);

  switch (true) {
    case level === 1:
      color = jambalaya;
      break;
    case level === 2:
      color = chelseaGem;
      break;
    case level === 3:
      color = pizazz;
      break;
    case level === 4:
      color = amber;
      break;
    case level === 5:
      color = marzipan;
      break;
    case level === 6:
      color = moonRaker2;
      break;
    case level === 7:
      color = bilobaFlower;
      break;
    case level === 8:
      color = shipCove;
      break;
    case level === 9:
      color = eastBay;
      break;
    case level === 10:
      color = downriver;
      break;
  }

  return color;
};

const renderCandleStick = (
  charCandleSvg: d3.Selection<d3.BaseType, unknown, HTMLElement, any>,
) => {
  charCandleSvg.select('#char-candle-line').remove();
  charCandleSvg.select('#chartLineBottomMin').remove();
  charCandleSvg.select('#chartLineLabelMax').remove();
  charCandleSvg.select('#chartLineLabelMin').remove();
  charCandleSvg.select('#chartLineBottom').remove();
  charCandleSvg.select('#chartMinBottom').remove();
  charCandleSvg.select('#chartMaxBottom').remove();

  const maxValue = chart.format === 'percent'
    ? d3.format(`.${chart.decPlaces}f`)(chart.max) + '%'
    : d3.format(`.${chart.decPlaces}f`)(chart.max)

  const mimValue = chart.format === 'percent'
    ? d3.format(`.${chart.decPlaces}f`)(chart.min) + '%'
    : d3.format(`.${chart.decPlaces}f`)(chart.min)

  // candleLeft
  charCandleSvg
    .append('path')
    .attr('id', 'char-candle-line')
    .style('stroke', `${silver}`)
    .style('stroke-miterlimit', 10)
    .attr('d', 'M5, 1L5, 450');

  // chartLineBottom
  charCandleSvg
    .append('line')
    .attr('id', 'chartLineBottom')
    .style('stroke', `${silver}`)
    .attr('x1', '-6.26202e-09')
    .attr('y1', '450')
    .attr('x2', '11')
    .attr('y2', '450');

  charCandleSvg
    .append('text')
    .text('máx.:')
    .attr('id', 'chartLineLabelMax')
    .attr('font-size', 8)
    .attr('x', '-2')
    .attr('y', '-15')
    .classed('char-candle-limit-label', true);

  charCandleSvg
    .append('text')
    .text('mín')
    .attr('id', 'chartLineLabelMin')
    .attr('font-size', 8)
    .attr('x', '-2')
    .attr('y', '460')
    .classed('char-candle-limit-label', true);

  charCandleSvg
    .append('text')
    .text(`${mimValue.replace('.', ',')}`)
    .attr('id', 'chartMinBottom')
    .attr('font-size', 8)
    .attr('x', '-2')
    .attr('y', '468')
    .classed('char-candle-limit-value', true);

  charCandleSvg
    .append('text')
    .text(`${maxValue.replace('.', ',')}`)
    .attr('id', 'chartMaxBottom')
    .attr('font-size', 8)
    .attr('x', '-2')
    .attr('y', '-5')
    .classed('char-candle-limit-value', true);

  // chartLineTop
  charCandleSvg
    .append('line')
    .attr('id', 'chartLineTop')
    .style('stroke', `${silver}`)
    .attr('x1', '-6.26202e-09')
    .attr('y1', '0.5')
    .attr('x2', '11')
    .attr('y2', '0.5');
};

interface tooltipProps {
  e,
  id: string,
  label: string,
  value: number,
}

export const showTooltip = ({e, id, label, value}: tooltipProps) => {

  const tooltipContainer = d3.select('#visualizations-map-range-container')
    .append('div')
    .attr('id', 'tooltip-container')
    .style('z-index', 150)
    .style('position', 'absolute')
    .style('width', '500px')
    .style('height', '100%')
    .style('left', 'calc(100% - 65px)')
  ;
  const tooltipSvg = tooltipContainer
    .append('svg')
    .attr('id', 'svg-tooltip')
    .attr('height', '100%');
  const tooltip = tooltipSvg.append('g').attr('id', 'chart-tooltip');

  d3.selectAll('.ranking-circle').style('opacity', 0.25);
  d3.select(`#area-of-${id}`).style('stroke-width', 2);
  d3.select(e.target)
      .attr('r', chart.radius * 2)
      .style('stroke-width', 2)
      .style('opacity', 1);

  const x = chart.margin.left + chart.width / 2 + chart.radius * 3 - 50;
  const y = yScale(value) + chart.tooltip.height / 2 - (chart.radius / 2) ;

  const valueFormatted = chart.format === 'percent'
    ? `${d3.format(`.${chart.decPlaces}f`)(value)}%`.replace('.', ',')
    : `${d3.format(`.${chart.decPlaces}f`)(value)}`.replace('.', ',')

  const content = tooltip
      .append('text')
      .attr('class', 'tooltip-text')
      .text(
          `${label}: ${valueFormatted}`,
      )
      .attr('x', x + chart.tooltip.margin)
      .attr('y', y + chart.tooltip.height / 2);

  chart.tooltip.width =
      content.node().getComputedTextLength() + chart.tooltip.margin * 2;

  tooltip
      .append('rect')
      .attr('id', 'tooltip-area')
      .attr('class', `tooltip-category-${chart.rangeSeparator(value)}`)
      .attr('x', x)
      .attr('y', y)
      .attr('rx', 3)
      .attr('ry', 3)
      .attr('width', chart.tooltip.width)
      .attr('height', chart.tooltip.height);

  tooltip
      .append('text')
      .attr('class', 'tooltip-text')
      .text(
          `${label}: ${valueFormatted}`,
      )
      .attr('alignment-baseline', 'middle')
      .attr('x', x + chart.tooltip.margin)
      .attr('y', y + chart.tooltip.height / 2);
};

export const hideTooltip = () => {
  d3.selectAll('#tooltip-container').remove();
  chart.svg.select('#chart-tooltip').remove();

  d3.selectAll('.chart-map-area').style('stroke-width', 0.1);

  chart.svg
      .selectAll('.ranking-circle')
      .attr('r', chart.radius)
      .style('stroke-width', 0)
      .style('opacity', 0.5);
};

const renderMarker = (
  value: number,
  markerValueId: string,
  candle: d3.Selection<d3.BaseType, unknown, HTMLElement, any>,
  id: string,
  color: string,
  label: string,
) => {
  candle.select('#use-region-marker').remove();

  yScale = createNumericalScale(chart.domain, chart.range)

  if (value < 0) {
    return;
  }

  candle
    .filter(d => value >= 0)
    .append('circle')
    .attr('id', `marker-${id}`)
    .attr('class', 'ranking-circle')
    .style('fill', `${color}`)
    .style('stroke', `${white}`)
    .style('opacity', 0.5)
    .attr('cx', 4.5)
    .attr('cy', yScale(value))
    .attr('r', chart.radius)
    .attr('width', '10')
    .attr('height', '10')
    .classed(`marker-${id}`, true)
    .on('mouseenter', (e) => showTooltip({e, id, label, value}))
    .on('mouseleave', (d) => hideTooltip());

  if (markerValueId !== 'cities' && label) {
    candle
      .filter(d => value >= 0)
      .append('text')
      .attr('id', `text-${id}`)
      .text(label)
      .attr('y', yScale(value))
      .attr('x', '15')
      .attr('width', '100')
      .attr('height', '50')
      .attr('font-size', 8)
      .style('transform', 'translate(0, 7px)')
      .style('fill', `${textColor}`)
      .classed(`text-${id}`, true)
  }
};

const mapRangeChart = (
  candleHtmlId: string,
  [marker1Value, marker1ValueId]: [DataToMapRanking[], string],
  [marker2Value, marker2ValueId]: [LocalToMapRanking, string],
  [marker3Value, marker3ValueId]: [LocalToMapRanking, string],
  format,
  decPlaces,
) => {
  let values = marker1Value.map((item) => +item.value);

  values.push(marker2Value.value)
  values.push(marker3Value.value)

  const maxValue = Math.max(...values);
  const minValue = Math.min(...values.filter(d => d >= 0));

  chart.format = format;
  chart.decPlaces = decPlaces;
  chart.max = maxValue;
  chart.min = format === 'percent' ? 0 : minValue;
  chart.domain = [chart.min, chart.max];
  chart.range = [445, 5];
  addRangeSeparator()


  const charCandleSvg = d3
    .select(`#${candleHtmlId}`)
    .attr('viewBox', [-12, -25, 100, 500])
    .attr('width', 600)
    .attr('height', 100);

  chart.svg = charCandleSvg

  charCandleSvg.selectAll('text').remove();
  charCandleSvg.selectAll('circle').remove();

  // CANDLE
  renderCandleStick(charCandleSvg);

  chart.data = marker1Value;

  // Markers
  marker1Value.map((item) =>
    renderMarker(
      +item.value,
      marker1ValueId,
      charCandleSvg,
      item.idMunic7,
      colorPalette(+item.value),
      item.nomeMun,
    )
  );

  renderMarker(
    marker2Value.value,
    marker2ValueId,
    charCandleSvg,
    marker2Value.id,
    colorPalette(marker2Value.value),
    marker2Value.label
  );

  renderMarker(
    marker3Value.value,
    marker3ValueId,
    charCandleSvg,
    marker3Value.id,
    colorPalette(marker3Value.value),
    marker3Value.label
  );

  return true
};

export default mapRangeChart;
