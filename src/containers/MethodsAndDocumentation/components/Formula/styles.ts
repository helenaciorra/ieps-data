import styled from 'styled-components';

export const Formula = styled.ol`
  margin-top: 20px;
  margin-left: 20px;
`;

export const Detail = styled.li`
  margin-left: 40px;
  margin-bottom: 6px;

  &::marker {
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
  }
`;
