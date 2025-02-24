import styled from 'styled-components';
import { theme } from '../../../../constants/theme';

export const DownloadFilter = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const Block = styled.div`
  flex: ${({ flex }: { flex?: string }) => flex ?? '0'};
`;

export const Error = styled.div`
  color: ${theme.palette.red};
  font-size: 12px;
  margin-top: 5px;
`;
