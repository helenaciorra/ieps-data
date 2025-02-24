/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { orange, white } from '../../constants/theme';

type Props = {
  hide: boolean;
  position: {
    x: number,
    y: number,
  }
}

export const Container = styled.div<Props>`
  display: ${({hide})  => hide ? 'block' : 'none'};
  position: absolute;
  top: ${({ position }) => (position.y - 119) }px;
  left: ${({ position }) => (position.x)}px;
  background-color: ${orange};
  width: 110px;
  border-radius: 5px;
  padding: 3px 8px 8px;
  z-index: 10;
`;

export const Text = styled.span`
  font-size: 9px;
  color: ${white};
  line-height: 1;
`;
