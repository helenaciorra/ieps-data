import styled from 'styled-components';
import { black, paleSky, trout, white } from '../../constants/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const Warpper = styled.div`
  margin: 0 auto;
`;

export const Subtitle = styled.div`
  width: 100%;
  margin-left: 11rem;
  margin-top: 2rem;

  h2 {
    color: ${black};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
  }
`;

export const ProjectsList = styled.div`
  max-width: 770px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  margin-top: 55px;
  margin-left: 60px;
`;

export const Footer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 145px;
  width: 770px;
  margin-left: 60px;
`;

export const ButtonShowMore = styled.button`
  background: ${paleSky};
  border-radius: 4px;
  border: none;
  color: ${white};
  cursor: pointer;
  font-size: 1.6rem;
  padding: 8px 12px;
  outline: transparent;
  transition: 0.2s background;

  &:hover {
    background: ${trout};
  }
`;
