import styled, { css, DefaultTheme } from 'styled-components';
import { athensGray2, white } from '../../../../constants/theme';

type RowColorProps = {
  grayColor?: boolean,
};

export const Table = styled.table`
  font-size: 14px;
  table-layout: fixed;
  width: 100%;
`;

export const TableHeader = styled.thead`
  background-color: rgb(103, 149, 203);
  th {
    padding: 5px 15px;
    color: ${white};
    text-align: left;
  }
`;

export const TableBody = styled.tbody`
  td {
    padding: 5px 15px;
    color: ${white};
    text-align: left;
  }
`;

const rowBackgroundColorModifier = {
  gray: (theme: DefaultTheme) => css`
    background-color: ${athensGray2};
  `,
  white: (theme: DefaultTheme) => css`
    background-color: ${white};
  `,
};

export const TableRow =
  styled.tr <
  RowColorProps >
  `
  ${({ theme, grayColor }) => css`
    ${!grayColor && rowBackgroundColorModifier.gray(theme)}
    ${grayColor && rowBackgroundColorModifier.white(theme)}
  `}
`;
