import styled, { css, DefaultTheme } from 'styled-components';
import { azure, textColor } from '../../../../constants/theme';

type TitleProps = {
  showContent?: boolean,
};

const iconModifiers = {
  arrowUp: (theme: DefaultTheme) => css`
    &:before {
      rotate: 0deg;
    }
  `,
  arrowDown: (theme: DefaultTheme) => css`
    &:before {
      rotate: 180deg;
    }
  `,
};

export const Title =
  styled.span <
  TitleProps >
  `
  ${({ theme, showContent }) => css`
    color: ${azure};
    font-size: 10px;
    line-height: 18px;
    text-transform: uppercase;
    cursor: pointer;

    &:before {
      content: '△';
      display: inline-block;
      vertical-align: middle;
      color: ${azure};
      margin-right: 7px;
      transition: rotate 0.7s;
    }
    ${showContent && iconModifiers.arrowUp(theme)}
    ${!showContent && iconModifiers.arrowDown(theme)}
  `}
`;

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${textColor};
`;
