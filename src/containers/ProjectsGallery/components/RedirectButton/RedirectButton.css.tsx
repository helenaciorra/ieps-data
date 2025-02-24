/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import {
  citySelectedRegion,
  olivine,
  olivineDark,
  white,
} from '../../../../constants/theme';

interface ButtonProps {
  inversedColors?: boolean;
}

export const Button = styled.a<ButtonProps>`
  align-items: center;
  background: ${({ inversedColors }) => inversedColors ? olivine : white};
  border: solid 1px ${({ inversedColors }) => inversedColors ? 'transparent' : olivine};;
  border-radius: 4px;
  color: ${({ inversedColors }) => inversedColors ? white : olivine};
  cursor: pointer;
  display: flex;
  padding: 4px 8px;
  outline: transparent;
  text-decoration: none;
  transition: border-color 0.3s linear;
  width: 200px;


  &:hover {
    border-color: ${citySelectedRegion};
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background: ${({ inversedColors }) => inversedColors ? olivineDark : white};;
  }

  &:visited {
    background: ${({ inversedColors }) => inversedColors ? olivineDark : white};;
  }

  > svg {
    fill: ${({ inversedColors }) => inversedColors ? white : olivine};
    height: 21px;
    margin-right: 4px;
    width: 21px;
  }
`;
