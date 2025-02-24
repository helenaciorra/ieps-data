/* eslint-disable prefer-const */
import * as d3 from 'd3';
import { mineShaft, white } from '../../../../constants/theme';
import { convertIndicatorCase } from '../../../../store/visualizations/visualizations.adapters';
import { CirclePackingData } from '../../../../store/visualizations/visualizations.types';

const width = 600; // outer width, in pixels
const height = 700; // outer height, in pixels
const margin = 1; // shorthand for margins
const marginTop = margin; // top margin, in pixels
const marginRight = margin; // right margin, in pixels
const marginLeft = 40; // left margin, in pixels
const tooltip = { height: 90, width: 360, lineHeight: 25, margin: 10 };

let indicator = '';
let value = '';
let state = '';
let stateShort = '';
let level = '';
let chartElements = 0;
let svg = {} as d3.Selection<d3.BaseType, unknown, HTMLElement, any>;
let stackedBars = {} as d3.Selection<d3.BaseType, unknown, HTMLElement, any>;
let svgStackAxis: d3.Selection<d3.BaseType, unknown, HTMLElement, any>;

const nodeNameAdapter = (level: string) => {
  switch (true) {
    case level === 'municípios':
      return 'nomemun';
    case level === 'regiões de saúde':
      return 'noRegiao';
    case level === 'macrorregiões de saúde':
      return 'noMacro';
    default:
      return 'nomemun';
  }
};

const createNumericalScale = (domain, range) => {
  return d3.scaleLinear().domain(domain).range(range).nice();
};

let stackDomain = [] as number[];
const stackRange = [490, 20];
let stackScale = {} as d3.ScaleLinear<number, number, never>;

const highlightCategoryBar = (d) => {
  const target = d.target.__data__;

  d3.selectAll('.stacked-bar').style('opacity', 0.2);
  d3.select(`#stacked-bar-category-${target.data.category}`)
    .style('opacity', 1)
    .style('stroke', mineShaft)
    .style('stroke-width', 1);
};

const unhighlightCategoryBar = (d) => {
  d3.selectAll('.stacked-bar')
    .style('opacity', 1)
    .style('stroke', '#ffffff')
    .style('stroke-width', 1.5);
};

const showStackedBarTooltip = (
  event,
  tooltipData,
  decPlaces: string,
  format: string
) => {
  d3.select('#chart-stacked-bar-tooltip').remove();

  const x = -25;
  const y = event.y - 150;

  d3.selectAll('.stacked-bar').style('opacity', 0.2);
  d3.selectAll('.node-level-1').style('opacity', 0.2);
  d3.selectAll('.node-label').style('opacity', 0.2);

  d3.select(`.node-category-${tooltipData.category}`).style('opacity', 1);
  d3.select(`.node-label-category-${tooltipData.category}`).style('opacity', 1);
  d3.select(`#stacked-bar-category-${tooltipData.category}`)
    .style('opacity', 1)
    .style('stroke', mineShaft)
    .style('stroke-width', 1);

  const svg = d3.select('#chart-packing');

  const beginAtFormatted =
    format === 'percent'
      ? `${Number(tooltipData.beginAt).toFixed(2)}%`.replace('.', ',')
      : `${Number(tooltipData.beginAt).toFixed(+decPlaces)}`.replace('.', ',');
  const endAtFormatted =
    format === 'percent'
      ? `${Number(tooltipData.endAt).toFixed(2)}%`.replace('.', ',')
      : `${Number(tooltipData.endAt).toFixed(+decPlaces)}`.replace('.', ',');

  svg
    .append('g')
    .attr('id', 'chart-stacked-bar-tooltip')
    .attr('class', `tooltip-category-${tooltipData.category}`)
    .append('foreignObject')
    .attr('x', x)
    .attr('y', y)
    .attr('width', '30em')
    .attr('height', '5em')
    .append('xhtml:div')
    .html(
      `<span class='highlighted-tooltip-text'>${
        tooltipData.size
      } ${level}</span>
        possuem entre <span class='highlighted-tooltip-text'>${beginAtFormatted}</span>
        e <span class='highlighted-tooltip-text'>${endAtFormatted}</span> de
        ${indicator}, o que corresponde a ${d3.format('.1f')(
        tooltipData.percentage
      ).replace('.', ',')}%
        do total de ${chartElements} ${level} no/na/em ${state}.`
    );
};

const hideStackedBarTooltip = () => {
  d3.select('#chart-stacked-bar-tooltip').remove();

  d3.selectAll('.node-level-1').style('opacity', 1);
  d3.selectAll('.node-label').style('opacity', 1);
  d3.selectAll('.stacked-bar')
    .style('opacity', 1)
    .style('stroke', white)
    .style('stroke-width', 1.5);
};

const showCircleTooltip = (e, d, decPlaces: string, format: string) => {
  d3.select('#chart-circle-tooltip').remove();
  d3.select(e.target).style('stroke-width', 1.5).style('opacity', 1);

  const tooltipType = d.parent.data.category;
  d3.selectAll('.stacked-bar').style('opacity', 0.2);
  d3.select(`#stacked-bar-category-${tooltipType}`)
    .style('opacity', 1)
    .style('stroke', mineShaft)
    .style('stroke-width', 1);

  const svg = d3.select('#chart-packing');

  const tooltipSvg = svg
    .append('g')
    .attr('id', 'chart-circle-tooltip')
    .attr('class', `tooltip-category-${tooltipType}`);

  let x =
    d.x + d.r + marginLeft + 50 + tooltip.width + 15 > width + 100
      ? 0 // d.x - d.r - tooltip.width - 15 + marginLeft + 50
      : d.x + d.r + 15 + marginLeft;

  if(d.r > 60) {
    x = d.r / 2
  }

  const y = d.y + tooltip.height < (height - 20) ? d.y + 10 : d.y - tooltip.height;

  tooltipSvg
    .append('rect')
    .attr('id', 'circle-tooltip-area')
    .attr('x', x)
    .attr('y', y)
    .attr('rx', 5)
    .attr('ry', 5)
    .attr('width', tooltip.width)
    .attr('height', tooltip.height);

  tooltipSvg
    .append('rect')
    .attr('class', 'circle-tooltip-title-area')
    .attr('x', x)
    .attr('y', y)
    .attr('rx', 5)
    .attr('ry', 5)
    .attr('width', tooltip.width)
    .attr('height', tooltip.lineHeight);

  tooltipSvg
    .append('rect')
    .attr('class', 'circle-tooltip-title-area')
    .attr('x', x)
    .attr('y', y + tooltip.lineHeight * 0.75)
    .attr('width', tooltip.width)
    .attr('height', tooltip.lineHeight * 0.4);

  tooltipSvg
    .append('text')
    .attr('class', 'circle-tooltip-title')
    .attr(
      'transform',
      `translate(${x + tooltip.margin}, ${y + tooltip.margin * 2})`
    )
    .text(`${d.data[nodeNameAdapter(level)]} (${stateShort}) - ${d.data.ano}`);

  const foreignObject = tooltipSvg
    .append('foreignObject')
    .attr('width', '200px')
    .attr('height', '20px')
    .attr(
      'transform',
      `translate(${x + tooltip.margin}, ${
        y + (tooltip.margin * 2.5 + tooltip.lineHeight - 10)
      })`
    );

  foreignObject
    .append('xhtml:p')
    .attr('class', 'circle-tooltip-label')
    .text(`${indicator}`);

  tooltipSvg
    .append('text')
    .attr('class', 'circle-tooltip-label')
    .attr(
      'transform',
      `translate(${x + tooltip.margin}, ${
        y + (tooltip.margin * 2.5 + tooltip.lineHeight * 2)
      })`
    )
    .text(`População (${d.data.ano})`);

  const indicatorValue =
    format === 'percent'
      ? `${d3.format('.2f')(d.data[convertIndicatorCase(value)])}%`.replace('.', ',')
      : `${d3.format(`.${decPlaces}f`)(d.data[convertIndicatorCase(value)])}`.replace('.', ',');

  tooltipSvg
    .append('text')
    .attr('class', 'circle-tooltip-value')
    .attr('text-anchor', 'end')
    .attr(
      'transform',
      `translate(${x + tooltip.width - tooltip.margin}, ${
        y + (tooltip.margin * 2.5 + tooltip.lineHeight)
      })`
    )
    .text(`${indicatorValue}`);

  tooltipSvg
    .append('text')
    .attr('class', 'circle-tooltip-value')
    .attr('text-anchor', 'end')
    .attr(
      'transform',
      `translate(${x + tooltip.width - tooltip.margin}, ${
        y + (tooltip.margin * 2.5 + tooltip.lineHeight * 2)
      })`
    )
    .text(Number(`${d.data.pop}`.replace(',','.')).toFixed(0));
};

const hideCircleTooltip = () => {
  d3.select('#chart-circle-tooltip').remove();

  d3.selectAll('.node-level-2').style('stroke-width', 0).style('opacity', 0.3);

  d3.selectAll('.stacked-bar')
    .style('opacity', 1)
    .style('stroke', white)
    .style('stroke-width', 1.5);
};

export const clearStackAxis = () => {
  svgStackAxis.selectAll('g').remove();
}

const addStackAxis = () => {
  const rankingAxis = d3
    .axisLeft(stackScale)
    .ticks(10)
    .tickSize(2.5)
    .tickFormat((d) => `${d}%`);

  svgStackAxis = d3.select('#chart-packing-scale');

  clearStackAxis();

  svgStackAxis
    .append('g')
    .attr('id', 'chart-stack-axis')
    .attr('transform', `translate(${35}, 0)`)
    .call(rankingAxis);
};

export const clearStackedBars = () => {
  stackedBars.selectAll('rect').remove();
}

const addStackedBars = (
  data: CirclePackingData,
  decPlaces: string,
  format: string
) => {
  const stackData = data.children
    .map((d, i) => ({
      category: 10 - i,
      beginAt: d.name.substr(5).split(' - ')[0].trim(),
      endAt: d.name.split(' - ')[1],
      size: d.children.length,
      percentage: d.fraction,
    }))
    .filter((d) => !!d.size)
    .reverse();

  const svg = d3.select('#chart-packing-scale');

  stackedBars = svg
    .append('g')
    .attr('id', 'stacked-bars')
    .attr('class', 'chart-data')
    .attr('transform', `translate(${marginLeft}, 0)`);

  let startPosition = 20;

  clearStackedBars();

  stackData.reverse().forEach((d) => {
    const labelHeight = 15;
    const height = stackScale(0) - stackScale(d.percentage);

    stackedBars
      .append('rect')
      .attr('id', `stacked-bar-category-${d.category}`)
      .attr('class', 'stacked-bar')
      .attr('x', 0)
      .attr('y', startPosition)
      .attr('height', height)
      .attr('width', 35)
      .on('mouseenter', (e) => showStackedBarTooltip(e, d, decPlaces, format))
      .on('mousemove', (e) => showStackedBarTooltip(e, d, decPlaces, format))
      .on('mouseleave', hideStackedBarTooltip);

    let stackText =
      format === 'percent'
        ? `${d3.format('.2f')(+d.endAt.trim())}%`.replace('.', ',')
        : `${d3.format(`.${decPlaces}f`)(+d.endAt.trim())}`.replace('.', ',');

    if(+d.endAt.trim() < 0) {
      stackText = '-'
    }

    if (height > labelHeight)
      stackedBars
        .append('text')
        .attr('id', `stack-label-category-${d.category}`)
        .attr(
          'class',
          `stacked-bar-label stacked-bar-label-category-${d.category}`
        )
        .attr('x', 18)
        .attr('y', startPosition + height / 2)
        .attr('alignment-baseline', 'middle')
        .attr('text-anchor', 'middle')
        .text(`${stackText}`)
        .attr('cursor', 'default')
        .filter(e => +d.endAt.trim() < 0)
        .style('font-size', '30px')

    startPosition += height;
  });
};

export const clearChart = () => {
  svg.selectAll('g').remove();
  svg.selectAll('text').remove();
  svg.selectAll('a').remove();
  svg.selectAll('circle').remove();
}

function circlePackingChart(
  data: CirclePackingData,
  stateName: string,
  stateShortName: string,
  granularity: string,
  indicatorName: string,
  indicatorValue: string,
  isPopulation: boolean,
  decPlaces: string,
  format: string
) {
  let valuesPop: number[] = [];

  granularity === 'viz' && (level = 'municípios');
  granularity === 'vizReg' && (level = 'regiões de saúde');
  granularity === 'vizMacro' && (level = 'macrorregiões de saúde');

  indicator = indicatorName;
  state = stateName;
  stateShort = stateShortName;
  value = indicatorValue;

  chartElements = 0;
  data.children.forEach((item) => (chartElements += item.children.length));

  data.children.map((d) => d.children.forEach((c) => valuesPop.push(+`${c.pop}`.replace(',', '.'))));

  stackDomain = [0, 100];
  stackScale = createNumericalScale(stackDomain, stackRange);

  const defaultPop = d3.min(valuesPop);
  const domain = [d3.min(valuesPop), d3.max(valuesPop)];
  const range = isPopulation ? [1.2, 40] : [5.2, 20];

  const sizeScale = createNumericalScale(domain, range);

  svg = d3
    .select('#chart-packing')
    .attr('viewBox', [-marginLeft, -marginTop, width, height])
    .attr('width', width)
    .attr('height', height)
    .attr('style', 'max-width: 100%; height: auto; height: intrinsic;');

  clearChart();

  const pack = d3
    .pack()
    .size([width, height])
    .padding(2)
    .radius((d) => Number(d3.format('.2f')(sizeScale(isPopulation
      ? (granularity === 'vizMacro' ? Number(`${d.data.pop}`.replace(',','.')) * 1.2 : Number(`${d.data.pop}`.replace(',','.')) * 2)
      : defaultPop! ))));

  const root = d3.hierarchy(data);
  pack(root);

  const nodeGroup = svg
    .append('g')
    .attr('class', 'node-group chart-data')
    .attr('transform', 'translate(0, 0)');

  const nodes = nodeGroup
    .selectAll('.node')
    .data(root.descendants().slice(1))
    .enter()
    .filter((d) => (d.data.totalPopulation != false))
    .filter((d) => (d.depth == 1 || (d.depth == 2 && d.data[convertIndicatorCase(value)] >= 0)))
    .append('circle')
    .attr(
      'class',
      (d) =>
        `node node-level-${d.depth} ${
          d.data.category ? 'node-category-' + d.data.category : ''
        }`
    )
    .attr('cx', (d) => d.x)
    .attr('cy', (d) => d.y)
    .attr('r', (d) => d.r)
    .style('stroke-width', 0)

  nodes
    .filter((d) => d.depth == 1)
    .on('mouseenter', highlightCategoryBar)
    .on('mouseleave', unhighlightCategoryBar)

  nodes
    .filter((d) => d.depth == 2)
    .on('mouseenter', (e, d) => showCircleTooltip(e, d, decPlaces, format))
    .on('mouseleave', hideCircleTooltip);

  const checkNumberFormate = (value: number) => {
    if(value < 0) {
      return '-'
    }

    if (format === 'percent') {
      return `${d3.format('.2f')(value)}%`.replace('.', ',');
    } else {
      return `${d3.format(`.${decPlaces}f`)(value)}`.replace('.', ',');
    }
  };

  nodeGroup
    .selectAll('.node-label')
    .data(
      root
        .descendants()
        .filter((d) => d.depth == 1)
        .filter((d) => d.r > 15)
    )
    .enter()
    .append('text')
    .attr('class', (d) => `node-label node-label-category-${d.data.category}`)
    .attr('x', (d) => d.x)
    .attr('y', (d) => d.y - d.r + 12.5)
    .attr('alignment-baseline', 'middle')
    .attr('text-anchor', 'middle')
    .attr('cursor', 'default')
    .text((d) => checkNumberFormate(+d.data.name.split(' - ')[1]))
    .filter(d => +d.data.name.split(' - ')[1] < 0)
    .style('font-size', '40px')

  addStackAxis();
  addStackedBars(data, decPlaces, format);

  return true;
}

export default circlePackingChart;
