import styled from 'styled-components';
import { alto, black, white } from '../../../../constants/theme';

export const Container = styled.div`
  background: ${white};
  border: 1px solid ${alto};
  border-radius: 4px;
  width: 370px;
`;

export const CoverImg = styled.figure`
  > img {
    border-radius: 4px 4px 0px 0px;
    object-fit: cover;
    width: 100%;
    height: 198px;
  }
`;

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Title = styled.span`
  color: ${black};
  font-size: 2rem;
  font-weight: 600;
`;

export const Description = styled.div`
  color: ${black};
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin: 12px 0;
`;
