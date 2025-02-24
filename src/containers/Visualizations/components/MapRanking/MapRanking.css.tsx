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
  whiteRock,
} from '../../../../constants/theme';

interface TooltipProps {
  isTooltip: boolean;
  color: string;
}

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
  width: calc(100% - 274px);

  #visualizations-map {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    height: 100%;
    width: calc(100% - 40px);
    z-index: 15;

    > svg {
      height: 450px;
      width: 500px;
    }
  }

  #range-indicator-bg {
    background: ${white};
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    height: 506px;
    left: 0px;
    position: absolute;
    top: 18px;
    width: 37px;
  }

  #visualizations-border {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 15px;
    height: 100%;
    background: ${white};
  }
`;

export const Tooltip = styled.div<TooltipProps>`
  align-items: center;
  background: ${white};
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  border: 1px solid ${({ color }) => color};
  display: flex;
  height: 45px;
  justify-content: space-between;
  padding: 0px 18px;
  opacity: ${({ isTooltip }) => isTooltip ? 1 : 0};
  position: absolute;
  right: 9px;
  top: 9px;
  width: 180px;



  transition: ease-in-out opacity;

  > span {
    font-size: 1.4rem;
    font-weight: 700;
  }

  #percentage-tooltip {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${textColor}
  }
`;

export const RangeIndicator = styled.div`
  align-items: center;
  display: flex;
  height: 506px;
  justify-content: center;
  left: 0px;
  position: absolute;
  top: 18px;
  width: 100px;

  > svg {
    height: 100%;
    width: 100%;
  }

  #tooltip-area {
    fill: ${white};
    stroke-width: 0.75;
    opacity: 0.95;
  }

  .tooltip-text {
    fill: ${textColor};
    font-size: 1rem;
  }

  .tooltip-category-1 {
      stroke: ${jambalaya};
  }

  .tooltip-category-2 {
      stroke: ${chelseaGem};
  }

  .tooltip-category-3 {
      stroke: ${pizazz};
  }

  .tooltip-category-4 {
      stroke: ${amber};
  }

  .tooltip-category-5 {
      stroke: ${marzipan};
  }

  .tooltip-category-6 {
      stroke: ${whiteRock};
  }

  .tooltip-category-7 {
      stroke: ${moonRaker2};
  }

  .tooltip-category-8 {
      stroke: ${bilobaFlower};
  }

  .tooltip-category-9 {
      stroke: ${shipCove};
  }

  .tooltip-category-10 {
      stroke: ${eastBay};
  }
`;

const mapColorBox = css`
  height: 12px;
  width: 12.36px;
`;

export const IndicatorColorPalette = styled.div`
  background: ${white};
  bottom: 9px;
  border-radius: 5px;
  height: 37px;
  padding: 0px 7px;
  padding-top: 14px;
  position: absolute;
  right: 9px;
  width: 150px;

  span {
    color: ${textColor};
    font-size: 8px;
    position: absolute;
    top: -8px;
  }

  > #indicator-percentage-colors {
    display: flex;
    width: 100%;
  }

  #color-01 {
    ${mapColorBox}
    background: ${jambalaya};
    position: relative;
  }

  #color-02 {
    ${mapColorBox}
    background: ${chelseaGem};
  }

  #color-03 {
    ${mapColorBox}
    background: ${pizazz};
  }

  #color-04 {
    ${mapColorBox}
    background: ${amber};
  }

  #color-05 {
    ${mapColorBox}
    background: ${marzipan};
  }

  #color-06 {
    ${mapColorBox}
    background: ${whiteRock};
    position: relative;
  }

  #color-07 {
    ${mapColorBox}
    background: ${moonRaker2};
  }

  #color-08 {
    ${mapColorBox}
    background: ${bilobaFlower};
  }

  #color-09 {
    ${mapColorBox}
    background: ${shipCove};
  }

  #color-10 {
    ${mapColorBox}
    background: ${eastBay};
  }

  #color-11 {
    ${mapColorBox}
    background: ${downriver};
    position: relative;
  }
`;

export const ScaleWrapper = styled.div`
  background: ${white};
  border-radius: 10px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.12));
  height: 510px;
  left: -17px;
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
