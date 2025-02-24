/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import {
  amber,
  athensGray,
  bilobaFlower,
  chelseaGem,
  crail,
  downriver,
  eastBay,
  emperor,
  ghost,
  jambalaya,
  marzipan,
  moonRaker2,
  paleSky,
  pizazz,
  scrollSilver,
  shipCove,
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

  #packing-indicator{
    width: 550px;
    margin-right: 6px;
  }

  #packing-location{
    width: 300px;
    margin-right: 6px;
  }

  #packing-year{
    width: 130px;
    margin-right: 6px;
  }

  #packing-granularity{
    width: 200px;
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
  padding-left: 24px;
  width: 930px;
`;

export const InfoWrapper = styled.div`
  width: 290px;
`;

export const ChartWrapper = styled.div`
  align-items: center;
  background: ${athensGray};
  border-radius: 0px 10px 10px 0px;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  width: calc(100% - 272px);

  #visualization-border {
    background: ${white};
    position: absolute;
    left: 0px;
    height: 100%;
    width: 17px;
  }

  #chart-packing {
    height: 100%;
    width: 100%;
  }

  #stacked-bar-category-1,
  .node-category-1 {
    fill: ${jambalaya};
  }

  #stacked-bar-category-2,
  .node-category-2 {
    fill: ${chelseaGem};
  }

  #stacked-bar-category-3,
  .node-category-3 {
    fill: ${pizazz};
  }

  #stacked-bar-category-4,
  .node-category-4 {
    fill: ${amber};
  }

  #stacked-bar-category-5,
  .node-category-5 {
    fill: ${marzipan};
  }

  #stacked-bar-category-6,
  .node-category-6 {
    fill: ${moonRaker2};
  }

  #stacked-bar-category-7,
  .node-category-7 {
    fill: ${bilobaFlower};
  }

  #stacked-bar-category-8,
  .node-category-8 {
    fill: ${shipCove};
  }

  #stacked-bar-category-9,
  .node-category-9 {
    fill: ${eastBay};
  }

  #stacked-bar-category-10,
  .node-category-10 {
    fill: ${downriver};
  }

  .node-level-2 {
    fill: ${white};
    opacity: 0.3;
  }

  .node-label {
    fill: ${white};
    font-size: 1.1rem;
    font-weight: 600;
    pointer-events: none;
  }

  .node-label-category-3,
  .node-label-category-4,
  .node-label-category-5,
  .node-label-category-6 {
      fill: ${textColor};
  }

  #chart-packing-scale > #chart-stack-axis text {
    color: ${textColor};
    font-size: 0.8em;
  }

  .stacked-bar {
    stroke: ${white};
    stroke-width: 1.5;
  }

  .stacked-bar-label {
    fill: ${white};
    font-size: 0.5em;
    font-weight: 600;
    pointer-events: none;
  }

  #chart-stacked-bar-tooltip div {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 0.25rem;
    color: ${textColor};
    font-size: 1.4rem;
    padding: 1.25rem 1.25rem;
    text-align: justify;
  }

  .highlighted-tooltip-text {
    font-weight: bold;
    text-decoration: underline;
  }

  .tooltip-category-1 div {
    border: 2px solid ${jambalaya};
  }

  .tooltip-category-2 div {
    border: 2px solid ${chelseaGem};
  }

  .tooltip-category-3 div {
    border: 2px solid ${pizazz};
  }

  .tooltip-category-4 div {
    border: 2px solid ${amber};
  }

  .tooltip-category-5 div {
    border: 2px solid ${marzipan};
  }

  .tooltip-category-6 div {
    border: 2px solid ${moonRaker2};
  }

  .tooltip-category-7 div {
    border: 2px solid ${bilobaFlower};
  }

  .tooltip-category-8 div {
    border: 2px solid ${shipCove};
  }

  .tooltip-category-9 div {
    border: 2px solid ${eastBay};
  }

  .tooltip-category-10 div {
    border: 2px solid ${downriver};
  }

  #circle-tooltip-area {
    fill: ${white};
    opacity: 0.95;
  }

  .tooltip-category-1 #circle-tooltip-area {
    stroke: ${jambalaya};
  }

  .tooltip-category-2 #circle-tooltip-area {
    stroke: ${chelseaGem};
  }

  .tooltip-category-3 #circle-tooltip-area {
    stroke: ${pizazz};
  }

  .tooltip-category-4 #circle-tooltip-area {
    stroke: ${amber};
  }

  .tooltip-category-5 #circle-tooltip-area {
    stroke: ${marzipan};
  }

  .tooltip-category-6 #circle-tooltip-area {
    stroke: ${moonRaker2};
  }

  .tooltip-category-7 #circle-tooltip-area {
    stroke: ${bilobaFlower};
  }

  .tooltip-category-8 #circle-tooltip-area {
    stroke: ${shipCove};
  }

  .tooltip-category-9 #circle-tooltip-area {
    stroke: ${eastBay};
  }

  .tooltip-category-10 #circle-tooltip-area {
    stroke: ${downriver};
  }

  .tooltip-category-1 .circle-tooltip-title-area {
    fill: ${jambalaya};
    stroke: ${jambalaya};
  }

  .tooltip-category-2 .circle-tooltip-title-area {
    fill: ${chelseaGem};
    stroke: ${chelseaGem};
  }

  .tooltip-category-3 .circle-tooltip-title-area {
    fill: ${pizazz};
    stroke: ${pizazz};
  }

  .tooltip-category-4 .circle-tooltip-title-area {
    fill: ${amber};
    stroke: ${amber};
  }

  .tooltip-category-5 .circle-tooltip-title-area {
    fill: ${marzipan};
    stroke: ${marzipan};
  }

  .tooltip-category-6 .circle-tooltip-title-area {
    fill: ${moonRaker2};
    stroke: ${moonRaker2};
  }

  .tooltip-category-7 .circle-tooltip-title-area {
    fill: ${bilobaFlower};
    stroke: ${bilobaFlower};
  }

  .tooltip-category-8 .circle-tooltip-title-area {
    fill: ${shipCove};
    stroke: ${shipCove};
  }

  .tooltip-category-9 .circle-tooltip-title-area {
    fill: ${eastBay};
    stroke: ${eastBay};
  }

  .tooltip-category-10 .circle-tooltip-title-area {
    fill: ${downriver};
    stroke: ${downriver};
  }

  .circle-tooltip-title {
    fill: ${textColor};
    font-size: 1.4rem;
    font-weight: bold;
  }
  .tooltip-category-1 .circle-tooltip-title,
  .tooltip-category-2 .circle-tooltip-title,
  .tooltip-category-9 .circle-tooltip-title,
  .tooltip-category-10 .circle-tooltip-title {
    fill: ${white};
  }

  .circle-tooltip-label,
  .circle-tooltip-value {
    fill: ${textColor};
    width: 200px;
    font-size: 0.9em;
    color: ${textColor};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .circle-tooltip-value {
    fill: ${textColor};
    font-weight: bold;
  }
`;

export const ScaleWrapper = styled.div`
  background: ${white};
  border-radius: 10px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.12));
  height: 510px;
  left: 0px;
  position: absolute;
  top: 18px;
  width: 85px;

  > svg {
    height: 100%;
    width: 100%;
  }
`;

export const TogglePopulationContainer = styled.div`
  align-items: center;
  background: ${white};
  border-radius: 5px;
  bottom: 9px;
  display: flex;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.12));
  height: 37px;
  justify-content: space-between;
  padding: 0px 8px;
  position: absolute;
  right: 9px;
  width: 89px;

  > span {
    font-size: 0.8rem;
    margin-bottom: 4px;
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

export const AlertMessageWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 150px;
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
