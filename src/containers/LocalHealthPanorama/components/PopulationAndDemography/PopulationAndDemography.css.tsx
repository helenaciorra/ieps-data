import styled from 'styled-components';
import {
  emperor,
  getPanoramaDataColors,
  ghost,
} from '../../../../constants/theme';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 19px;
  width: 100%;

  > div + div {
    margin-top: 31px;
  }
`;

export const InfoBox = styled.div`
  align-items: center;
  display: flex;
`;

export const TextHighlight = styled.div`
  color: ${getPanoramaDataColors};
  font-size: 1.8rem;
  font-weight: 700;
`;

export const Subtitle = styled.div`
  width: 200px;
  color: ${emperor};
  display: block;
  font-size: 1.1rem;
  margin-top: 4px;
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

export const SvgContainer = styled.div`
  margin-right: 15px;

  > svg {
    fill: ${ghost};
    height: 45px;
    width: 45px;
  }
`;

export const DataContainer = styled.div``;
