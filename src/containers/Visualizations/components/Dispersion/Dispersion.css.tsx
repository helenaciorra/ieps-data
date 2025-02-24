/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import {
  athensGray2,
  azure,
  burntSienna,
  chicago,
  crail,
  emperor,
  ghost,
  mineShaft,
  paleSky,
  paradiso,
  purple,
  scrollSilver,
  simpleGray,
  textColor,
  white,
} from '../../../../constants/theme';

interface TrProps {
  local?: string;
}

export const Header = styled.div`
  margin: 0.5rem 0;
  align-items: center;
  display: flex;
`;

export const IndicatorsContainer = styled.div`
  margin-left: 0rem;
  width: 1000px;

  > div:first-child {
    margin-bottom: 8px;
  }
`;

export const line = styled.div`
  align-items: center;
  display: flex;
  width: 100%;

  #dispersion-indicator-1{
    width: 350px;
    margin-right: 6px;
  }

  #dispersion-indicator-2{
    width: 350px;
  }

  #dispersion-location{
    width: 450px;
    margin-right: 6px;
  }

  #dispersion-year{
    width: 130px;
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
  align-items: center;
  background: ${white};
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  width: 640px;

  #chart-dispersion-legend{
    display: flex;
    align-items: center;
    height: 20px;
    padding-left: 20px;
    width: 100%;

    > div:not(div:last-child) {
      margin-right: 9px;
    }
  }

  #chart-dispersion {
    height: 100%;
    width: 100%;
  }

  #tooltip-area {
    fill: ${white};
    stroke-width: 0.75;
    opacity: 0.95;
  }

  .tooltip-level-city {
      stroke: ${paleSky};
  }

  .tooltip-level-city-selected {
      stroke: ${mineShaft};
  }

  .tooltip-level-state {
    stroke: ${azure};
  }

  .tooltip-level-health-region {
    stroke: ${paradiso};
  }

  .tooltip-level-macro-region {
    stroke: ${purple};
  }

  .tooltip-level-country {
    stroke: ${burntSienna};
  }

  #tooltip-line {
    stroke: ${paleSky};
    stroke-dasharray: 1, 1;
  }

  .tooltip-indicator-label,
  .tooltip-indicator-value {
      fill: ${chicago};
      font-size: 0.7em;
      line-height: 2rem;
  }

  .tooltip-title {
    font-size: 1em;
    font-weight: bold;
  }

  .tooltip-title-city {
    fill: ${paleSky};
  }

  .tooltip-title-city-selected {
    fill: ${mineShaft};
  }

  .tooltip-title-state {
    fill: ${azure};
  }

  .tooltip-title-health-region {
    fill: ${paradiso};
  }

  .tooltip-title-macro-region {
    fill: ${purple};
  }

  .tooltip-title-country {
    fill: ${burntSienna};
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
`

export const TableContainer = styled.div`
  margin-top: 34px;
  margin-left: 7rem;
  width: 769px;
`;

export const Table = styled.table`
  width: 100%;

  > thead {
    #header-row-dispersion-table {
      border-bottom: 1px solid ${textColor};
      > td {
        color: ${textColor};
        font-size: 1rem;
        font-weight: 700;
        line-height: 12px;
        padding: 5px 36px;
      }
    }

    .table-header-indicator {
      > div {
        display: flex;
        justify-content: center;
      }
      text-align: center;
    }
  }

  > tbody {
    tr:nth-of-type(2n+1) {
      background: ${athensGray2};
    }
    .table-body-indicators{
      text-align: center;
    }
  }
`;

const lineColor = {
  'country': burntSienna,
  'macro-region': purple,
  'state': azure,
  'health-region': paradiso,
}

export const Tr = styled.tr<TrProps>`
  > td {
    color: ${({ local }) => local ? `${lineColor[local]}`: `${textColor}`};;
    font-size: 1.2rem;
    font-weight: ${({ local }) => local !== 'city' ? 700: 400};
    line-height: 18px;
    padding: 5px 36px;
  }
`;

export const TablePagination = styled.div`
  align-items: center;
  display: flex;
  height: 128px;
  justify-content: center;
  width: 769px;
`;
