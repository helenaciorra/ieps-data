/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import {
  alto2,
  azure2,
  chicago,
  crail,
  emperor,
  ghost,
  oracle,
  orange,
  paleSky,
  poloBlue,
  purple,
  scrollSilver,
  simpleGray,
  textColor,
  white,
} from '../../../../constants/theme';

export const Header = styled.div`
  margin: 0.5rem 0;
  align-items: center;
  display: flex;
`;

export const IndicatorsContainer = styled.div`
  width: 1000px;

  > div:first-child {
    margin-bottom: 8px;
  }
`;

export const line = styled.div`
  align-items: center;
  display: flex;
  width: 100%;

  #time-line-indicator{
    width: 550px;
    margin-right: 6px;
  }

  #time-line-location{
    width: 300px;
    margin-right: 6px;
  }

  #time-line-granularity{
    width: 200px;
    margin-right: 6px;
  }

  #time-line-state{
    width: 230px;
    margin-right: 6px;
  }
`;

export const ChartContainer = styled.div`
  align-items: center;
  background: ${white};
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  display: flex;
  height: 540px;
  justify-content: center;
  margin-top: 21px;
  padding: 24px;
  width: 930px;
`;

export const InfoWrapper = styled.div``;

export const ChartWrapper = styled.div`
  /* align-items: center; */
  background: ${white};
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  width: 650px;

  #chart-time-line {
    height: 100%;
    width: 100%;
  }
  #chart-x-axis line,
  #chart-y-axis line,
  #chart-y-axis path {
      display: none;
  }

  #chart-x-axis path {
      stroke: ${alto2};
  }

  #chart-x-axis text,
  #chart-y-axis text {
      color: ${chicago};
      font-size: 1rem;
  }

  .chart-gridline {
    fill: none;
    stroke: ${alto2};
    stroke-dasharray: 3;
  }

  .chart-line {
    fill: none;
    stroke-width: 1;
  }

  .line-level-city {
    stroke: ${poloBlue};
  }

  .line-level-state {
    stroke: ${azure2};
  }

  .line-level-region {
    stroke: ${oracle};
  }

  .line-level-macro_region {
    stroke: ${purple};
  }

  .line-level-country {
    stroke: ${orange};
  }

  .chart-year-line {
    stroke: ${alto2};
    opacity: 0;
  }

  .square-level-state {
    fill: ${white};
    stroke: ${azure2};
    stroke-width: 1.5;
  }

  .square-level-region {
    fill: ${white};
    stroke: ${oracle};
    stroke-width: 1.5;
  }

  .square-level-macro_region {
    fill: ${white};
    stroke: ${purple};
    stroke-width: 1.5;
  }

  .square-level-country {
    fill: ${white};
    stroke: ${orange};
    stroke-width: 1.5;
  }

  .chart-circle-text {
    fill: ${white};
    font-weight: bold;
    font-size: 1rem;
  }

  .line-label-level-city,
  .line-details-level-city {
    color: ${textColor};
    fill: ${textColor};
    white-space: nowrap;
  }

  .line-label-level-state,
  .line-details-level-state,
  .square-level-state.highlighted-square {
    color: ${azure2};
    fill: ${azure2};
    white-space: nowrap;
  }

  .line-label-level-region,
  .line-details-level-region,
  .square-level-region.highlighted-square {
    color: ${oracle};
    fill: ${oracle};
    white-space: nowrap;
  }

  .line-label-level-macro_region,
  .line-details-level-macro_region,
  .square-level-macro_region.highlighted-square {
    color: ${purple};
    fill: ${purple};
    white-space: nowrap;
  }

  .line-label-level-animation {
    animation: text-loop 1s infinite normal cubic-bezier(0,.25,.99,.25);
    animation-duration: 8s;
  }

  @keyframes text-loop {
    from {
      transform: translateX(10px);
    }
    to {
      transform: translateX(-300px);
    }
  }

  .line-label-level-country,
  .line-details-level-country,
  .square-level-country.highlighted-square {
      fill: ${orange};
  }

  .line-label-selected-level {
      text-decoration: underline;
  }
`;

export const ChartLegend = styled.div`
  display: flex;
  width: 400px;
  margin-left: 2.3rem;
  align-items: center;
  justify-content: flex-start;

  > div + div {
    margin-left: 20px;
  }

  > div {
    >span {
      font-size: 0.9rem;
    }
  }

  #time-line-legend-country{
    display: inline-block;
    width: 4rem;
    color: ${orange};
  }
  #time-line-legend-state{
    display: inline-block;
    width: 5rem;
    color: ${azure2};
  }
  #time-line-legend-macro-region{
    display: inline-block;
    width: 7rem;
    color: ${purple};
  }
  #time-line-legend-health-region{
    display: inline-block;
    width: 9rem;
    color: ${oracle};
  }
  #time-line-legend-city{
    display: inline-block;
    width: 11rem;
    color: ${textColor};
  }

  #time-line-legend-country::after{
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background:  ${orange};
    margin-left: 4px;
    border-radius: 50%;
  }
  #time-line-legend-state::after{
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background:  ${azure2};
    margin-left: 4px;
    border-radius: 50%;
  }
  #time-line-legend-macro-region::after{
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background:  ${purple};
    margin-left: 4px;
    border-radius: 50%;
  }
  #time-line-legend-health-region::after{
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background:  ${oracle};
    margin-left: 4px;
    border-radius: 50%;
  }
  #time-line-legend-city::after{
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background:  ${textColor};
    margin-left: 4px;
    border-radius: 50%;
  }
`;

export const MessageWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;

  > span {
    font-size: 1.2rem;
    color: ${paleSky};
  }
`;

export const SideText = styled.div`
  width: 231px;
  height: 460px;

  margin-left: 21px;
  background: white;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 18px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${scrollSilver};
    border-radius: 16px;
    border: 8px solid ${white};
  }
`;

export const TextWrapper = styled.div`
  > p {
    color: ${emperor};
    font-size: 1.1rem;
    line-height: 16px;
  }
`;

export const Title = styled.span`
  color: ${simpleGray};
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 12px;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const WarningText = styled.span`
  color: ${crail};
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 12px;
  margin-bottom: 16px;
`;

export const Quote = styled.div`
  > p {
    border-left: 2px solid ${crail};
    color: ${emperor};
    display: inline-block;
    font-size: 1.1rem;
    line-height: 12px;
    padding-left: 14px;
  }
`;

export const Source = styled.p`
  color: ${emperor};
  font-size: 0.9rem;
  line-height: 13px;
  font-style: italic;
  margin-bottom: 16px;
`;

export const Separator = styled.p`
  color: ${ghost};
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 13px;
  font-style: italic;
  margin-bottom: 22px;
  letter-spacing: 0.1px;
`;

export const LineSeparator = styled.div`
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 0%,
    rgba(196, 196, 196, 0.3) 100%
  );
  border-bottom: 0.5px solid ${paleSky};
  height: 5px;
  margin-left: 21px;
  width: 205px;
`;

export const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  height: 39px;
  margin-left: 21px;

  > button + button {
    margin-left: 16px;
  }
`;

const buttonStyle = css`
  align-items: flex-start;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  outline: transparent;

  > svg {
    height: 16px;
    width: 16px;
  }
`;

export const DownloadButton = styled.button`
  ${buttonStyle}
`;

export const SharedButton = styled.button`
  ${buttonStyle}
`;

export const InfoButton = styled.button`
  ${buttonStyle}
`;

export const DocButton = styled.button`
  ${buttonStyle}
`;
