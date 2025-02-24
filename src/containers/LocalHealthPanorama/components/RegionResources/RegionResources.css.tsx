import styled from 'styled-components';
import {
  alto,
  emperor,
  getPanoramaDataColors,
  paradiso,
} from '../../../../constants/theme';

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 23px;
  padding: 0 36px;
  width: 100%;
`;

export const Column = styled.div``;

export const TopBox = styled.div``;

export const Icon = styled.div`
  margin-bottom: 10px;
`;

export const BottomBox = styled.div`
  margin-top: 31px;
`;

export const TextHighlight = styled.div`
  color: ${paradiso};
  font-size: 1.8rem;
  font-weight: 700;
`;

export const Subtitle = styled.div`
  color: ${emperor};
  font-size: 1.1rem;
  margin-top: 4px;

  > strong {
    display: inline-block;
    width: 100px;
    margin-bottom: 0.5rem;
  }
`;

export const AdditionalInfo = styled.div`
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

export const Separator = styled.hr`
  bottom: 0;
  border-top: 1px dashed ${alto};
  left: 15px;
  position: absolute;
  width: 90%;
`;
