/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { emperor } from '../../constants/theme';

interface Props {
  showUp: boolean;
  isBgColor: boolean;
  textAlign: 'center' | 'flex-start';
  paddingLeft: string;
}

export const Container = styled.div<Props>`
  display: ${({ showUp }) => showUp ? 'flex' : 'none'};
  background: ${({ isBgColor }) => isBgColor ? '#E6E9EC' : 'none'};
  width: 100%;
  height: 4.5rem;
  border-radius: 0rem 0rem 1rem 1rem;
  padding-left:  ${({ paddingLeft }) => paddingLeft};
  justify-content: flex-start;
  z-index: 1000;

  > div {
    > svg {
      width: 30px;
      height: 29px;
    }
    > div {
      > svg {
        width: 70px;
        height: 20px;
      }
    }
  }
`;

export const Text = styled.span`
  width: 200px;
  color: ${emperor};
  display: block;
  font-size: 1.1rem;
  margin-top: 4px;
`;
