import styled from 'styled-components';
import MEDIA from '../../../helpers/mediaTemplates';

export const Layout = styled.div`
  overflow: hidden;
  ${MEDIA.MIN_DESKTOP_LG`
    min-height: 1000px;
  `};
`;
