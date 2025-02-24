import styled, { css } from 'styled-components';
import { geyser, paleSky, white } from '../../constants/theme';

export const Container = styled.div``;

const buttonStyle = css`
  background: ${white};
  border: 0.5px solid ${geyser};
  color: ${paleSky};
  cursor: pointer;
  font-size: 1.4rem;
  outline: transparent;
  padding: 4px 8px;
`;

export const FirstPage = styled.button`
  ${buttonStyle}
  border-radius: 4px 0px 0px 4px;
`;

export const Page = styled.button`
  ${buttonStyle}
`;

export const LastPage = styled.button`
  ${buttonStyle}
  border-radius: 0px 4px 4px 0px;
`;
