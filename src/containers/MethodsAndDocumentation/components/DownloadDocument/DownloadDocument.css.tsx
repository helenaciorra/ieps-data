import styled from 'styled-components';
import { orangeLight, supernova, white } from '../../../../constants/theme';

interface DownloadButtonProps {
  isDisabled: boolean;
}

export const DownloadDocument = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0 4rem;
  width: 100%;
`;

export const SubTitle = styled.div`
  color: ${white};
  font-size: 1.6rem;
  line-height: 1.6;
  max-width: 41rem;
`;

export const DownloadBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const DownloadFormat = styled.div`
  color: ${white};
  font-size: 1rem;
  margin-right: 1.5rem;
  width: 5rem;
`;

// eslint-disable-next-line prettier/prettier
export const DownloadButton = styled.button<DownloadButtonProps>`
  background-color: ${({ isDisabled }) =>
    isDisabled ? orangeLight : supernova};
  border: none;
  border-radius: 5px;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  color: ${white};
  outline: none;
  padding: 1rem 3rem;
`;
