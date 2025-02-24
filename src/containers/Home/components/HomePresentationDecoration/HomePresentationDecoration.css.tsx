import styled from 'styled-components';
import { zIndexDefault } from '../../../../constants/theme';
import MEDIA from '../../../../helpers/mediaTemplates';

const backgroundSizeLg = '1800px';

const setBackgroundColor = ({ color }: { color: string }) => color || 'red';

export const HomePresentationDecoration = styled.div`
  background: ${setBackgroundColor};
  border-radius: 1000rem;
  position: absolute;
  transition: background-color 0.1s ease-in;
  z-index: -1;
  overflow: hidden;

  height: 170rem;
  width: 170rem;
  top: -55rem;
  left: -10rem;

  /* 
  ${MEDIA.MIN_DESKTOP_LG`
    left: 200px;
    top: -600px;
    height: ${backgroundSizeLg};
    width: ${backgroundSizeLg};
  `}; */
`;

export const Decoration = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: ${zIndexDefault};
`;

export const Visualizations = styled(Decoration)`
  transform: translate(-50rem, -45rem);
  ${MEDIA.MIN_DESKTOP_LG`
    transform: translate(-10rem, -30rem);
  `};
`;

export const About = styled(Decoration)`
  transform: translate(-53rem, -45rem);
  ${MEDIA.MIN_DESKTOP_LG`
    transform: translate(-30rem, -30rem);
  `};
`;

export const DataDownload = styled(Decoration)`
  transform: translate(-54rem, -46rem);
  ${MEDIA.MIN_DESKTOP_LG`
    transform: translate(-50rem, -30rem);
  `};
`;

export const LocalHealthPanorama = styled(Decoration)`
  transform: translate(-50rem, -45rem);
  ${MEDIA.MIN_DESKTOP_LG`
    transform: translate(-50rem, -30rem);
  `};
`;

export const MethodsAndDocumentation = styled(Decoration)`
  transform: translate(-55rem, -45rem);
  ${MEDIA.MIN_DESKTOP_LG`
    transform: translate(-50rem, -30rem);
  `};
`;

export const ProjectsGallery = styled(Decoration)`
  transform: translate(-51rem, -45rem);
  ${MEDIA.MIN_DESKTOP_LG`
    transform: translate(-8rem, -30rem);
  `};
`;
