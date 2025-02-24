import styled from 'styled-components';
import { white, theme as themeObj } from '../../../constants/theme';
import { Themes } from '../../../store/types';

const setBackgroundColor = ({ theme }: { theme: Themes }) => {
  return themeObj.palette[theme || 'home'].main;
};

export const Button = styled.button`
  background: ${setBackgroundColor};
  border: none;
  border-radius: 4px;
  color: ${white};
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  outline: none;
  padding: 10px 12px;
  &:hover {
    cursor: pointer;
  }
`;
