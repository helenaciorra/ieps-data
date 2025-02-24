import styled, { css } from 'styled-components';

const blockDisplay = (props: { block?: boolean }) =>
  props.block &&
  css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `;

export const Block = styled.div`
  ${blockDisplay}
`;
