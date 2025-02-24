import styled from 'styled-components';
import {
  orange,
  white
} from '../../../../constants/theme';

type Props = {
  isHidden: boolean;
}

export const Container = styled.div<Props>`
  position: absolute;
  top: 100px;
  left: calc(50% - 250px);
  z-index: 50;
  width: 500px;
  height: 80px;
  display: ${({isHidden}) => isHidden ? 'none' : 'flex'};
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px;
  background: ${orange};
  border-radius: 8px;
`;

export const Text = styled.span`
  color: ${white};
  font-size: 1.6rem;
`;

export const Close = styled.button`
  color: ${white};
  font-size: 1.6rem;
  font-weight: 700;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;