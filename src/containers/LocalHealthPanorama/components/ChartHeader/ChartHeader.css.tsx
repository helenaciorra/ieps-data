import styled from 'styled-components';
import { paleSky } from '../../../../constants/theme';

export const ChartHeader = styled.div`
  align-items: center;
  display: flex;
  margin-top: 20px;
  padding-left: 15px;
  width: 100%;
`;

export const ChartTitle = styled.span`
  align-items: center;
  color: ${paleSky};
  display: flex;
  font-size: 0.9rem;
  text-transform: uppercase;

  > svg {
    margin-left: 0.5rem;
  }
`;
