/* eslint-disable prefer-const */
import * as d3 from 'd3';
import { athensGray2, azure, citySelected, mineShaft, paradiso, purple, simpleGray, textColor } from '../../../../constants/theme';

interface chartProps {
  id: string;
  category: string;
  local: string;
  microRegion: string;
  x: number;
  y: number;
}

interface chartLegendProps {
  element: d3.Selection<d3.BaseType, unknown, HTMLElement, any>;
  symbol: d3.SymbolType,
  local: string,
  color: string,
}

let chart = {
  svg: {} as d3.Selection<d3.BaseType, unknown, HTMLElement, any>,
  data: [] as chartProps[],
  xScale: {} as d3.ScaleLinear<number, number, never>,
  yScale: {} as d3.ScaleLinear<number, number, never>,
  xIndicator: '',
  yIndicator: '',
  year: '',
  height: 600,
  width: 700,
  radius: 6,
  delta: 10,
  margin: { top: 25, right: 20, bottom: 45, left: 40 },
  tooltip: { height: 144, width: 356, lineHeight: 25, margin: 12 },
  yIndicatorFormat: '',
  yIndicatorDecPlaces: '',
  xIndicatorFormat: '',
  xIndicatorDecPlaces: '',
};


const legends = [
  {local: 'País', color: citySelected, symbol: d3.symbolSquare},
  {local: 'Estado', color: azure, symbol: d3.symbolSquare},
  {local: 'Macrorregião', color: purple, symbol: d3.symbolStar},
  {local: 'Região de Saúde', color: paradiso, symbol: d3.symbolWye},
  {local: 'Município Selecionado', color: mineShaft, symbol: d3.symbolCircle},
  {local: 'Outros Municípios', color: athensGray2, symbol: d3.symbolCircle},
]



export const showDispersionTooltip = (e, onTable = false) => {
  let target = {} as any

  if(onTable) {
    const [_ , tableItem] = e.target.className.split(' ')

    if(typeof tableItem === 'undefined') return

    const tableItemId = tableItem.replace('table-item-', '')

    const path = d3.select(`#point-${tableItemId}`)

    if(path._groups[0][0] == undefined) return

    path.style('stroke-width', 1).style('opacity', 1).style('stroke', mineShaft)

    target = path._groups[0][0].__data__
  } else {
    d3.select(e.target).style('stroke-width', 1).style('opacity', 1).style('stroke', mineShaft)
    target = e.target.__data__;
  }

  const tooltip = chart.svg.append('g').attr('id', 'chart-tooltip');
  const tooltipType = target.category;

  const year = chart.year

  const cx = chart.xScale(target.x);
  const cy = chart.yScale(target.y);

  const x =
      cx - chart.delta - chart.tooltip.width > 0
          ? cx - chart.tooltip.width - chart.delta
          : cx + chart.delta;

  const y =
      cy - chart.tooltip.height > 0
          ? cy - chart.tooltip.height
          : cy - chart.delta;

  const yValue = chart.yIndicatorFormat === 'percent'
    ? `${d3.format(`.${chart.yIndicatorDecPlaces}f`)(target.y)}%`.replace('.', ',')
    : `${d3.format(`.${chart.yIndicatorDecPlaces}f`)(target.y)}`.replace('.', ',')

  const xValue = chart.xIndicatorFormat === 'percent'
    ? `${d3.format(`.${chart.xIndicatorDecPlaces}f`)(target.x)}%`.replace('.', ',')
    : `${d3.format(`.${chart.xIndicatorDecPlaces}f`)(target.x)}`.replace('.', ',')

  tooltip
    .append('rect')
    .attr('id', 'tooltip-area')
    .attr('class', `tooltip-level-${tooltipType}`)
    .attr('x', x)
    .attr('y', y)
    .attr('rx', 5)
    .attr('ry', 5)
    .attr('width', chart.tooltip.width)
    .attr('height', chart.tooltip.height);

  tooltip
    .append('line')
    .attr('id', 'tooltip-line')
    .attr('x1', x + chart.tooltip.margin)
    .attr('x2', x + chart.tooltip.width - chart.tooltip.margin)
    .attr(
        'y2',
        y + (chart.tooltip.margin * 2 + chart.tooltip.lineHeight * 1.5 + 17),
    )
    .attr(
        'y1',
        y + (chart.tooltip.margin * 2 + chart.tooltip.lineHeight * 1.5 + 17),
    );

  tooltip
    .append('text')
    .attr('class', `tooltip-title tooltip-title-${tooltipType}`)
    .attr(
        'transform',
        `translate(${x + chart.tooltip.margin}, ${
            y + chart.tooltip.margin * 2
        })`,
    )
    .text(`${target.local} (${year})`);

  const indicatorYLable = tooltip
    .append('foreignObject')
    .attr('width', '280px')
    .attr('height', '40px')
    .attr(
      'transform',
      `translate(${x + chart.tooltip.margin}, ${
          y + (chart.tooltip.margin * 2 + chart.tooltip.lineHeight - 12)
      })`,
    )

  indicatorYLable
    .append('xhtml:p')
    .attr('class', 'tooltip-indicator-label')
    .text(chart.yIndicator);

  const indicatorXLable = tooltip
    .append('foreignObject')
    .attr('width', '280px')
    .attr('height', '40px')
    .attr(
      'transform',
      `translate(${x + chart.tooltip.margin}, ${
          y + (chart.tooltip.margin * 2 + chart.tooltip.lineHeight * 2.3)
      })`,
    )

  indicatorXLable
      .append('xhtml:p')
      .attr('class', 'tooltip-indicator-label')
      .text(chart.xIndicator);

  tooltip
      .append('text')
      .attr('class', 'tooltip-indicator-value')
      .attr('text-anchor', 'end')
      .attr(
          'transform',
          `translate(${x + chart.tooltip.width - chart.tooltip.margin}, ${
              y + (chart.tooltip.margin * 2 + chart.tooltip.lineHeight)
          })`,
      )
      .text(yValue);

  tooltip
      .append('text')
      .attr('class', 'tooltip-indicator-value')
      .attr('text-anchor', 'end')
      .attr(
          'transform',
          `translate(${x + chart.tooltip.width - chart.tooltip.margin}, ${
              y + (chart.tooltip.margin * 2 + chart.tooltip.lineHeight * 2.3 + 12)
          })`,
      )
      .text(xValue);
}

export const hideDispersionTooltip = (e) => {
  chart.svg.select('#chart-tooltip').remove();

  chart.svg
      .selectAll('.chart-points')
      .style('stroke-width', 0)
      .style('opacity', 1);

  chart.svg.selectAll('.circle-level-others').style('opacity', 0.5);
}

const chartLegend = ({element, symbol, local, color}: chartLegendProps) => {
  const legend = element.append('div')
    .classed('chart-dispersion-legends', true)
    .style('display', 'flex')
    .style('align-items', 'center')

  const svg = legend.append('svg')
    .style('width', '12px')
    .style('height', '12px')
    .attr('viewBox', [0, 0, 16, 16]);
  const text = legend.append('p');

  if (local === 'Estado') {
    svg.append('path')
      .attr('d', d3.symbol().type(symbol))
      .attr('fill', color)
      .attr('size', 8)
      .attr('transform', 'translate(7,7) rotate(45)')
  } else if (local === 'Região de Saúde') {
    svg.append('path')
      .attr('d', d3.symbol().type(symbol))
      .attr('fill', color)
      .attr('size', 8)
      .attr('transform', 'translate(7,7) rotate(180)')
  } else {
    svg.append('path')
      .attr('d', d3.symbol().type(symbol))
      .attr('fill', color)
      .attr('size', 8)
      .attr('transform', 'translate(7,7)')
  }


  if (local === 'Outros Municípios') {
    text
      .text(local)
      .style('color', simpleGray)
      .style('font-size', '9px')
      .style('margin', '0')
  } else {
    text
      .text(local)
      .style('color', color)
      .style('font-size', '9px')
      .style('margin', '0')
  }

}

const dispersionChart = (
  data: chartProps[],
  firstIndicator: string,
  secondIndicator: string,
  year: string,
  firstIndicatorFormat: string,
  firstIndicatorDecPlaces: string,
  secondIndicatorFormat: string,
  secondIndicatorDecPlaces: string,
) => {
  const margin = { top: 25, right: 20, bottom: 45, left: 40 };
  const height = 600;
  const width = 700;

  chart.svg = d3
    .select('#chart-dispersion')
    .attr('viewBox', [0, 0, width, height]);

  chart.data = data;

  chart.yIndicator = firstIndicator;

  chart.xIndicator = secondIndicator;
  chart.year = year;

  chart.yIndicatorFormat = firstIndicatorFormat
  chart.yIndicatorDecPlaces = firstIndicatorDecPlaces
  chart.xIndicatorFormat = secondIndicatorFormat
  chart.xIndicatorDecPlaces = secondIndicatorDecPlaces


  d3.selectAll('.chart-dispersion-legends').remove();
  chart.svg.selectAll('g').remove();
  chart.svg.selectAll('text').remove();

  const legend = d3.select('#chart-dispersion-legend')

  legends.map(l => chartLegend({element: legend, symbol: l.symbol, local: l.local, color: l.color}))

  const colorPallet = (type) => {
    switch (true) {
      case type === 'country':
        return citySelected;
      case type === 'state':
        return azure;
      case type === 'macro-region':
        return purple;
      case type === 'city':
        return athensGray2;
      case type === 'city-selected':
        return mineShaft;
      case type === 'health-region':
        return paradiso;
      default:
        break;
    }
  }

  const color = d3.scaleOrdinal(
    data.map((d) => d.category),
    data.map((d) => colorPallet(d.category))
  );

  const shapeType = (type: string) => {
    switch (true) {
      case type === 'country':
        return d3.symbolSquare;
      case type === 'state':
        return d3.symbolSquare;
      case type === 'macro-region':
        return d3.symbolStar;
      case type === 'city' || type === 'city-selected':
        return d3.symbolCircle;
      case type === 'health-region':
        return d3.symbolWye;
      default:
        break;
    }
  };

  const shape = d3.scaleOrdinal(
    data.map((d) => d.category),
    data.map((d) => d3.symbol().type(shapeType(d.category)!)())
  );

  const yMin = Math.min(...data.map(d => d.y).filter(d => d >= 0))
  const yMax = Math.max(...data.map(d => d.y).filter(d => d >= 0))
  const xMin = Math.min(...data.map(d => d.x).filter(d => d >= 0))
  const xMax = Math.max(...data.map(d => d.x).filter(d => d >= 0))

  chart.xScale = d3.scaleLinear()
    .domain([xMin, xMax])
    .nice()
    .range([margin.left, width - margin.right]);
  chart.yScale = d3
    .scaleLinear()
    .domain([yMin, yMax])
    .nice()
    .range([height - margin.bottom, margin.top]);

  const x = d3
    .scaleLinear()
    .domain([xMin, xMax])
    .nice()
    .range([margin.left, width - margin.right]);

  const y = d3
    .scaleLinear()
    .domain([yMin, yMax])
    .nice()
    .range([height - margin.bottom, margin.top]);

  const rotateControl = (type: string) => {
    if(type === 'state') {
      return 45;
    } else if(type === 'health-region') {
      return 180;
    } else {
      return 0
    }
  }

  const xAxis = (g) =>
    g
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x)
        .ticks(width /150)
        .tickFormat(d => (d === xMin || d === xMax ? null : `${d}`.replace('.', ','))))
      .call((g) => g.select('.domain').remove())
      .call(g => g.selectAll('.tick line').attr('stroke-opacity', 0))
      .call((g) =>
        g
          .append('text')
          .attr('x', width)
          .attr('y', margin.bottom - 4)
          .attr('fill', 'currentColor')
          .attr('text-anchor', 'end')
          .text(data.x)
      );

  const yAxis = (g) =>
    g
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y)
        .ticks(height / 80)
        .tickFormat(d => (d === yMin || d === yMax ? null : `${d}`.replace('.', ',')))
      )
      .call((g) => g.select('.domain').remove())
      .call(g => g.selectAll('.tick line').attr('stroke-opacity', 0))
      .call((g) =>
        g
          .append('text')
          .attr('x', -margin.left)
          .attr('y', 10)
          .attr('fill', 'currentColor')
          .attr('text-anchor', 'start')
          .text(data.y)
      );

  const grid = (g) =>
    g
      .attr('stroke', 'currentColor')
      .attr('stroke-opacity', 0.1)
      .attr('stroke-dasharray', 4)
      .call((g) =>
        g
          .append('g')
          .selectAll('line')
          .data(x.ticks())
          .join('line')
          .classed('vertical-line-grid', true)
          .attr('x1', (d) => 0.5 + x(d))
          .attr('x2', (d) => 0.5 + x(d))
          .attr('y1', margin.top)
          .attr('y2', height - margin.bottom)
      )
      .call((g) =>
        g
          .append('g')
          .selectAll('line')
          .data(y.ticks())
          .join('line')
          .classed('horizontal-line-grid', true)
          .attr('y1', (d) => 0.5 + y(d))
          .attr('y2', (d) => 0.5 + y(d))
          .attr('x1', margin.left)
          .attr('x2', width - margin.right)
      )
      .call((g) => g.select('.vertical-line-grid:first-child').remove())
      .call((g) => g.select('.vertical-line-grid:last-child').remove())
      .call((g) => g.select('.horizontal-line-grid:first-child').attr('stroke-dasharray', 0))
      .call((g) => g.select('.horizontal-line-grid:last-child').remove())

  chart.svg.append('g').call(xAxis);

  chart.svg.append('g').call(yAxis);

  chart.svg.append('g').call(grid);

  const titleY = {
    x: chart.margin.left / 2 - 32,
    y:
        (chart.height - chart.margin.top - chart.margin.bottom) / 2 +
        chart.margin.top,
  };

  const titleX = {
    x:
        (chart.width - chart.margin.right - chart.margin.left) / 2 +
        chart.margin.left,
    y: chart.height - chart.margin.bottom / 2 + 20,
  };

  chart.svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('font-size', '1.1rem')
    .attr('font-weight', '700')
    .attr('color', textColor)
    .attr('transform', `translate(${titleY.x}, ${titleY.y}) rotate(-90)`)
    .text(firstIndicator)

  chart.svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('font-size', '1.1rem')
    .attr('font-weight', '700')
    .attr('color', textColor)
    .attr('transform', `translate(${titleX.x}, ${titleX.y})`)
    .text(secondIndicator);

  const others = data.filter(d => d.category === 'city')

  const important = data.filter(d => d.category !== 'city')


  chart.svg
    .append('g')
    .attr('stroke-width', 1.5)
    .attr('font-size', 10)
    .selectAll('path')
    .data(others)
    .join('path')
    .filter(d => d.x !== -1 && d.y !== -1)
    .filter(d => typeof d.x !== 'undefined' && typeof d.y !== 'undefined')
    .attr('id', (d) => `point-${d.id}`)
    .attr('class', 'chart-points')
    .attr('fill', (d) => color(d.category)!)
    .attr('d', (d) => shape(d.category))
    .attr('transform', (d) => `translate(${x(d.x)},${y(d.y)}) rotate(${rotateControl(d.category)})`)
    .on('mouseenter', (e) => showDispersionTooltip(e))
    .on('mouseleave', (e) => hideDispersionTooltip(e))

  chart.svg
    .append('g')
    .attr('stroke-width', 1.5)
    .attr('font-size', 10)
    .selectAll('path')
    .data(important)
    .join('path')
    .filter(d => d.x !== -1 && d.y !== -1)
    .filter(d => typeof d.x !== 'undefined' && typeof d.y !== 'undefined')
    .attr('id', (d) => `point-${d.id}`)
    .attr('class', 'chart-points')
    .attr('fill', (d) => color(d.category)!)
    .attr('d', (d) => shape(d.category))
    .attr('transform', (d) => `translate(${x(d.x)},${y(d.y)}) rotate(${rotateControl(d.category)})`)
    .on('mouseenter', (e) => showDispersionTooltip(e))
    .on('mouseleave', (e) => hideDispersionTooltip(e))

  return true;
};

export default dispersionChart;
