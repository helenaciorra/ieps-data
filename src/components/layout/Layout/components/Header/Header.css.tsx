import styled from 'styled-components';
import { appLeftPadding } from '../../../../../constants/theme';
// import MEDIA from '../../../../../helpers/mediaTemplates';

const setHeaderMargin = ({ isDataPage }) => {
  if (isDataPage) {
    return '4rem 0';
  }
  return '6rem 0';
};

export const Header = styled.header`
  padding: ${setHeaderMargin};
  padding-left: ${appLeftPadding};
  position: relative;
`;

// just to help setting the background position
export const BackgroundRuler = styled.div`
  position: absolute;
  z-index: -1;
  right: 0px;
  top: -21px;
  height: 450px;
  width: 225px;
`;
