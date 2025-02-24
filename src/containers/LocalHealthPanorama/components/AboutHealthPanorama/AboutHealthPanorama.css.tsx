import styled from 'styled-components';
import {
  ghost,
  emperor,
  orange,
  pageContentTitle,
} from '../../../../constants/theme';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 47px 0 5rem 0;
  width: 100%;
`;

export const Title = styled.h1`
  color: ${orange};
  font-size: ${pageContentTitle};
`;

export const Content = styled.div`
  max-width: 651px;
  padding-left: 1.6rem;
`;

export const Line = styled.div`
  border: 0.5px solid ${ghost};
  height: 0;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 182px;
`;

export const Text = styled.p`
  color: ${emperor};
  font-size: 1.6rem;
  line-height: 2.4rem;
`;
