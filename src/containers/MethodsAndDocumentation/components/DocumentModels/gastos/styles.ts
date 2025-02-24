import styled from 'styled-components';
import { azure, textColor } from '../../../../../constants/theme';

export const PageTitle = styled.h1`
  color: ${azure};
  margin-bottom: 3rem;
  font-size: 2.4rem;
  line-height: 2.8rem;
  display: block;
`;

export const Paragraphy = styled.p`
  line-height: 24px;
  color: ${textColor};
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${textColor};
`;

export const Ul = styled.ul`
  margin-top: 2px;
`;

export const Ol = styled.ol`
  margin-top: 2px;
`;

export const Li = styled.li`
  margin-left: 18px;
`;

export const ReferenciaLink = styled.p`
  font-size: 11.8px;
`;
