import styled from 'styled-components';
import {
  orange,
  orangeDark,
  pageContentTitle,
  white,
} from '../../../../constants/theme';

export const ReportError = styled.div`
  padding: 0 3rem;
`;

export const Title = styled.h3`
  color: ${orange};
  font-size: ${pageContentTitle};
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 2rem;
`;

export const Text = styled.p``;

export const CopyBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 3rem auto;
  max-width: 32.5rem;
`;

export const CopyButton = styled.button`
  background-color: ${orange};
  border: none;
  color: ${white};
  outline: none;
  padding: 1rem;
  &:hover {
    background-color: ${orangeDark};
    cursor: pointer;
  }
`;

export const Footer = styled.footer``;
