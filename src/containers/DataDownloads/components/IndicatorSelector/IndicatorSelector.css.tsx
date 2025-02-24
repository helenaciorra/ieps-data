import styled from 'styled-components';
import { athensGray } from '../../../../constants/theme';

export const IndicatorSelector = styled.ul`
  list-style: none;
  background-color: ${athensGray};
  border-radius: 3px;
  padding: 1rem;
  height: 30rem;
  overflow-y: auto;
  flex: 1;
`;

export const IndicatorItem = styled.label`
  align-items: center;
  display: flex;
  font-size: 12px;
  margin-bottom: 1.5rem;
  button {
    margin-right: 5px;
  }
`;
