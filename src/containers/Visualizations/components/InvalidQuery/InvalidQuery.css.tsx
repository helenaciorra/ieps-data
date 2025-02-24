import styled from 'styled-components';
import {
  pageContentTitle,
  paradiso,
  paradisoDark,
  white,
} from '../../../../constants/theme';

export const Container = styled.div`
  padding: 0 3rem;
`;

export const Title = styled.h3`
  color: ${paradiso};
  font-size: ${pageContentTitle};
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 2rem;
`;

export const Text = styled.p``;

export const CopyBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 3rem auto;
  max-width: 32.5rem;
`;

export const CloseButton = styled.button`
  background-color: ${paradiso};
  border: none;
  color: ${white};
  outline: none;
  padding: 1rem;
  &:hover {
    background-color: ${paradisoDark};
    cursor: pointer;
  }
`;

export const Footer = styled.footer``;
