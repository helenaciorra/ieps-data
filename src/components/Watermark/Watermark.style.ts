/* eslint-disable prettier/prettier */
import styled from 'styled-components';

interface Props {
  showUp: boolean;
}

export const Container = styled.div<Props>`
  position: absolute;
  display: ${({ showUp }) => showUp ? 'flex' : 'none'};
  width: 100%;
  height: 100%;
  border-radius: 0rem 0rem 1rem 1rem;
  padding-left: 0.5rem;
  padding-top: 0.9rem;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  > div {
    opacity: 0.4;
  }
`;
