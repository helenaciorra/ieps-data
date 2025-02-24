import styled, { css } from 'styled-components';
import { ghost, textColor, theme } from '../../../../constants/theme';

type Props = {
  selected?: boolean,
  divider?: boolean,
};

const setSelected = ({ selected }: Props) => {
  if (selected) {
    return css`
      background: ${theme.palette.downloads.main};
      color: ${theme.palette.white};
    `;
  }

  return css`
    background: none;
    color: ${textColor};
  `;
};

const setDivider = ({ divider }: Props) => {
  if (divider) {
    return css`
      border-top: 1px solid ${ghost};
      font-weight: 600;
    `;
  }

  return css`
    border: none;
    font-weight: 400;
  `;
};

export const IndicatorBlocksSelector = styled.ul`
  list-style: none;
  margin-right: 3rem;
`;

export const IndicatorBlock = styled.li`
  align-items: center;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  padding: 1rem;
  ${setSelected}
  ${setDivider};
  button {
    margin-right: 5px;
  }
`;
