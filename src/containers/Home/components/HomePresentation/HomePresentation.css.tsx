import styled from 'styled-components';

export const HomePresentation = styled.div`
  margin-top: 2rem;
  margin-left: 11.5rem;
`;
export const TextBlock = styled.div`
  display: flex;
`;

export const TextCta = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.5rem;
  width: 50rem;
  height: 34rem;
  padding: 1.4rem;
  margin-right: 2rem;
  text-align: justify;
  text-justify: inter-word;

 @media (width <= 1366px) {
  width: 40rem;
  font-size: 1.6rem;
  margin-right: 0.8rem;
 }
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 2.2rem;
  line-height: 2.5rem;
  max-width: 35rem;
`;

export const Arrow = styled.div`
  display: block;
  margin: 6px;
`;

export const Video = styled.div`
  display: block;
  padding: 1.4rem;
  height: 34rem;

  @media (width <= 1366px) {
    padding: 1.4rem 0.8rem;
  }

  > iframe {
    @media (width <= 1366px) {
      width: 400px;
    }

  }
`;