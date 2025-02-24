import styled from 'styled-components';
import { cityDefault, ghost, orange, white } from '../../constants/theme';

interface PinWrapperProps {
  x: number;
  y: number;
  isLoadingUfMapData?: boolean;
}

export const UfMapChart = styled.div`
  display: flex;
  flex-direction: column;
  height: 25rem;
  position: relative;

  svg {
    fill: ${cityDefault};
    stroke: ${white};
  }
`;

export const MapBlock = styled.div`
  flex: 1;
`;

export const EmptyText = styled.p`
  color: ${ghost};
  max-width: 20rem;
  margin: 5rem auto 0 auto;
`;

// eslint-disable-next-line prettier/prettier
export const PinWrapper = styled.div<PinWrapperProps>`
  display: ${({ isLoadingUfMapData }) =>
    isLoadingUfMapData ? 'none' : 'inherit'};
  left: ${({ x }) => `${x}px`};
  position: absolute;
  top: ${({ y }) => `${y}px`};

  #map-pin > path {
    fill: ${orange};
    stroke: ${white};
  }
`;
