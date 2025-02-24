import styled from 'styled-components';
import { alto, white } from '../../../../constants/theme';

export const Container = styled.div``;

export const Wrapper = styled.div`
  margin: 1.5rem auto 0 auto;
  background: ${white};
  border-radius: 1rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  height: 650px;
  width: 930px;
`;

export const Content = styled.div`
  background: ${white};
  border-radius: 1rem;
  height: 100%;
  display: grid;
  grid-template-rows: 7.4rem 1fr;
  position: relative;
`;

export const WrapperHeader = styled.div`
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  height: 100%;
  width: 100%;
`;

export const WrapperContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-left: 3rem;
  height: 100%;
  width: 100%;

  > div:not(div:last-child) {
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.12);
  }
`;

export const MapAndPopulation = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding-left: 1.5rem;

  #map-and-population-container {
    position: relative;
  }
`;

export const AttentionAndMortality = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const ResourcesAndExpanses = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const Separator = styled.hr`
  bottom: 0;
  border-top: 1px dashed ${alto};
  left: 5px;
  position: absolute;
  width: 90%;
`;
