import styled, { css } from 'styled-components';
import {
  emperor,
  getPanoramaDataColors,
  orange,
} from '../../../../constants/theme';

export const Container = styled.div``;

export const Content = styled.div`
  margin-top: 15px;
`;

export const ChatInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 34px;
`;

export const Title = styled.strong`
  display: inline-block;
  color: ${emperor};
  font-size: 1.1rem;
  font-weight: 800;
  width: 100px;
`;

const textHighlight = css`
  color: ${getPanoramaDataColors};
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 4px;
`;

const AdditionalInfo = css`
  display: flex;
  font-size: 1rem;
  margin-top: 6px;

  > span {
    align-items: center;
    display: flex;

    > svg {
      margin-right: 5px;
    }
  }

  > span + span {
    margin-left: 1rem;
  }
`;

export const TextHighlightTotals = styled.div`
  ${textHighlight}
  opacity: 0.6;
`;

export const AdditionalInfoTotals = styled.div`
  ${AdditionalInfo}

  > span {
    > svg {
      opacity: 0.6;
    }
  }
`;

export const TextHighlightOwners = styled.div`
  ${textHighlight}
`;

export const AdditionalInfoOwners = styled.div`
  ${AdditionalInfo}
`;

export const Chart = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
`;

export const ExpensesSummary = styled.div``;
