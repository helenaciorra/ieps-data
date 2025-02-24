import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import {
  appLeftPadding,
  silver,
  textColor,
  white,
} from '../../../constants/theme';

const setCollapseProperties = ({ collapsed }) => {
  if (collapsed) {
    return css`
      max-width: 10rem;
      transition: max-width 0.5s ease-out;
    `;
  }

  return css`
    max-width: 300px;
    transition: max-width 0.5s ease-out;
  `;
};

const setCollapseNavLinkText = ({ collapsed }: { collapsed?: boolean }) => {
  if (collapsed) {
    return css`
      margin-left: 0;
      display: none;
    `;
  }

  return css`
    width: 20rem;
    margin-left: 2rem;
    display: flex;
  `;
};

const setBorderBottom = ({ last, color, highlightOnHover }) => {
  if (highlightOnHover) {
    return css`
      border-bottom: 5px solid ${color};
      &::before {
        border: none !important;
      }
    `;
  }

  if (last) {
    return css`
      border-bottom: 5px solid ${white};
      &::before {
        border: none !important;
      }
    `;
  }

  return css`
    border-bottom: 5px solid ${white};
  `;
};

type setHighlightColorProps = {
  color?: string,
  highlightOnHover?: boolean,
};

const setHighlightColor = ({
  color,
  highlightOnHover,
}: setHighlightColorProps) => {
  if (highlightOnHover) {
    return color;
  }

  return textColor;
};

export const Ul = styled.ul`
  background: ${white};
  border-radius: 0 10px 10px 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  list-style: none;
  padding: 0 1.8rem;
  overflow-x: hidden;
  ${setCollapseProperties};
  li {
    outline-color: transparent;
  }
`;

export const Li = styled.li`
  outline: unset;
  outline-color: transparent;
`;

export const Link = styled(GatsbyLink)`
  color: unset;
  display: flex;
  outline-color: transparent;
  text-decoration: none;
`;

export const NavLink = styled.div`
  align-items: center;
  display: flex;
  outline-color: transparent;
  padding: ${appLeftPadding} 0;
  position: relative;
  /*   width: 215px;  */
  ${setBorderBottom};
  &::before {
    border-bottom: 1px solid ${silver};
    bottom: -5px;
    content: '';
    display: block;
    position: absolute;
    width: 100%;
  }
`;

export const NavLinkIcon = styled.div`
  display: flex;
`;

export const NavLinkText = styled.div`
  color: ${setHighlightColor};
  font-size: 14px;
  overflow-x: hidden;
  overflow-y: hidden;
  ${setCollapseNavLinkText};
`;
