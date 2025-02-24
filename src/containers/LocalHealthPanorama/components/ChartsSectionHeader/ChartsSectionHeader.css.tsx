import styled, { css } from 'styled-components';
import { paleSky } from '../../../../constants/theme';

export const Container = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 18px 35px;
`;

export const Selects = styled.div`
  align-items: center;
  display: flex;

  > #select-city {
    width: 380px;
    margin-right: 10px;
  }

  > #select-year {
    width: 130px;
  }
  .city-select {
    min-width: 38rem;
  }
`;

export const Buttons = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
`;

export const SwitchContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;

  > p {
    display: inline-block;
    color: ${paleSky};
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.2rem;
    margin-bottom: 0;
    text-transform: uppercase;
    width: 90px;
  }
`;

export const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  margin-left: 50px;
  height: 100%;

  > button + button {
    margin-left: 16px;
  }
`;

const buttonStyle = css`
  align-items: flex-start;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  outline: transparent;

  > svg {
    height: 16px;
    width: 16px;
  }
`;

export const DownloadButton = styled.button`
  ${buttonStyle}
`;

export const SharedButton = styled.button`
  ${buttonStyle}
`;

export const InfoButton = styled.button`
  ${buttonStyle}
`;
