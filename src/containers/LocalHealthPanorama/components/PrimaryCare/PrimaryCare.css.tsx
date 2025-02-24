import styled from 'styled-components';
import {
  alto,
  emperor,
  getPanoramaDataColors,
} from '../../../../constants/theme';

export const Container = styled.div`
  position: relative;
`;

export const ChartContainer = styled.div`
  position: relative;
  margin-top: 18px;
`;

export const ChartInfo = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  width: 100%;
`;

export const Label = styled.span`
  display: inline-block;
  color: ${emperor};
  font-size: 1.1rem;
  width: 220px;
`;

export const Percentage = styled.strong`
  color: ${getPanoramaDataColors};
  font-size: 1.8rem;
`;

export const Chart = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6px;
  width: 100%;

  .chart-primary-care {
    width: 300px;
    height: 42px;
  }
`;

export const Separator = styled.hr`
  bottom: 0;
  border-top: 1px dashed ${alto};
  left: 15px;
  position: absolute;
  width: 90%;
`;
