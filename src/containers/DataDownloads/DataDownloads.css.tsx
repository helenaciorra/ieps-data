import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { supernova, white } from '../../constants/theme';

export const DataDownloads = styled.div`
  margin: 0 auto 7.5rem auto;
  max-width: 70rem;
`;

export const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 4rem;
  margin-top: 1.5rem;
  padding-right: 1.5rem;
`;

export const Main = styled.div`
  background-color: ${white};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 2.5rem 1.5rem 2.5rem 3rem;
`;

export const InfoBlock = styled.div`
  width: 50rem;
`;

export const ActionBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DownloadBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  align-items: center;
  color: ${white};
  display: flex;
  font-size: 16px;
  margin-bottom: 2.5rem;
  margin-top: 3rem;
`;

export const TextInline = styled.p`
  align-items: center;
  color: ${white};
  display: inline-block;
  font-size: 16px;
  margin-bottom: 2.5rem;
  margin-top: 3rem;
`;

export const Link = styled(GatsbyLink)`
  align-items: center;
  color: ${white};
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
`;

export const Button = styled.button`
  background: ${supernova};
  border: none;
  border-radius: 4px;
  color: ${white};
  font-weight: 400;
  font-size: 16px;
  outline: none;
  padding: 12px;
`;

export const DownloadSize = styled.span`
  color: ${white};
  font-size: 10px;
  text-align: right;
  margin-top: 5px;
`;
