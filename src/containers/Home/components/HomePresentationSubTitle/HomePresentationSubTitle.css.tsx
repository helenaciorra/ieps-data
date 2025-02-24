import styled from 'styled-components';
import { black, white } from '../../../../constants/theme';

export const HomePresentationSubTitle = styled.div`
  width: 39.5rem;
`;

export const Text = styled.p`
  color: ${({ hasContrast }) => (hasContrast ? black : white)};
  font-weight: 300;
  font-size: 2.2rem;
  line-height: 3.2rem;
`;
