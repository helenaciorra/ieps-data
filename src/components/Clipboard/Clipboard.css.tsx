import styled, { css } from 'styled-components';
import { black } from '../../constants/theme';

const setColor = ({ success, error }) => {
  if (error && !success) {
    return css`
      background-color: rgba(249, 0, 0, 0.8);
    `;
  }

  return css`
    background-color: rgba(151, 196, 113, 0.8);
  `;
};

export const Clipboard = styled.div`
  position: relative;
`;

export const Children = styled.span``;

export const Message = styled.p`
  color: ${black};
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(25%, -100%);
  padding: 5px;
  font-size: 12px;
  border-radius: 3px;
  ${setColor};
`;
