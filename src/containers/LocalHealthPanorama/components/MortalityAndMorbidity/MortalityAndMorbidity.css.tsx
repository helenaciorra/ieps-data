import styled from 'styled-components';
import {
  azure,
  citySelected,
  emperor,
  ghost,
  paleSky,
  paradiso,
  silver,
  simpleGray,
  textColor,
  white,
} from '../../../../constants/theme';

export const MortalityAndMorbidity = styled.div``;

export const Title = styled.div`
  > span {
    color: ${emperor};
    display: inline-block;
    font-size: 1.1rem;
    font-weight: 400;
    width: 110px;
  }
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  display: flex;
  margin-top: 15px;
  padding: 0 2.5rem;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  .mortality-symbol {
    stroke: ${white};
    stroke-width: 1.5;
  }

  .mortality-axis path,
  .mortality-axis line {
    stroke: ${paleSky};
  }

  .mortality-axis .tick text {
    fill: ${textColor};
    font-size: 1rem;
  }

  .mortality-axis-label {
    fill: ${paleSky};
    font-size: 1rem;
    text-transform: uppercase;
  }

  .mortality-axis-value {
    fill: ${textColor};
    font-size: 1rem;
  }

  .mortality-axis-value.region-label {
    fill: ${paradiso};
    font-size: 1.8rem;
    font-weight: bold;
  }

  .mortality-axis-value.city-label {
    fill: ${citySelected};
    font-size: 1.8rem;
    font-weight: bold;
  }

  .symbol-country {
    fill: ${ghost};
    stroke: none;
  }

  .symbol-state {
    fill: ${azure};
    stroke: none;
  }

  .symbol-region {
    fill: ${paradiso};
    stroke: none;
  }

  .symbol-city {
    fill: ${citySelected};
    stroke: none;
  }
`;

export const TopInfo = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 20px;
`;

export const PercentLimit = styled.label`
  color: ${silver};
  font-size: 1rem;
  font-weight: 400;
`;

export const Max = styled.label`
  color: ${simpleGray};
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
`;

export const BottomInfo = styled.div`
  align-items: flex-end;
  bottom: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 20px;
`;

export const Min = styled.label`
  color: ${simpleGray};
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
`;
