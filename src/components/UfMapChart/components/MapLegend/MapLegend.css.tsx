import styled from 'styled-components';
import {
  azure,
  emperor,
  orange,
  osloGray,
  paradiso,
  purple,
} from '../../../../constants/theme';

export const MapLegend = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Legend = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const Label = styled.div`
  color: ${osloGray};
  font-size: 1rem;
  width: 8rem;
`;

export const Value = styled.div`
  align-items: center;
  display: flex;
  font-size: 1rem;
`;

const COLORS = {
  country: emperor,
  estado: azure,
  noMacro: purple,
  noRegiao: paradiso,
  nomemun: orange,
};

export const ValueText = styled.span`
  display: inline-block;
  color: ${({ icon }: { icon: string }) => COLORS[icon]};
  margin-left: 5px;
  width: 100px;
`;
