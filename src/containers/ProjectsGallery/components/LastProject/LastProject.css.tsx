import styled from 'styled-components';
import { black, emperor, supernova, white } from '../../../../constants/theme';

export const Container = styled.div`
  background: ${white};
  border-radius: 10px;
  box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.22);
  display: flex;
  justify-content: space-between;
  margin-left: 60px;
  margin-top: 36px;
  padding: 24px;
  height: 390px;
  width: 770px;
`;

export const Wrapper = styled.div`
  margin-left: 26px;
  max-width: 300px;
`;

export const Tag = styled.div`
  align-items: center;
  background: ${supernova};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  padding: 4px;
  width: 130px;

  span {
    color: ${black};
    font-size: 1.2rem;
  }
`;

export const Title = styled.h3`
  color: ${black};
  font-size: 2.4rem;
  font-weight: 700;
  margin-top: 20px;
`;

export const Description = styled.p`
  color: ${emperor};
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin-top: 27px;
`;

export const ImageContainer = styled.figure`
  img {
    height: 343px;
    object-fit: cover;
    width: 343px;
  }
`;
