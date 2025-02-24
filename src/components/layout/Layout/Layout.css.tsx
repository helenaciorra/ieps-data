import styled from 'styled-components';
import { athensGray, supernova, zIndexOverlay } from '../../../constants/theme';
import { NavLinksEnum } from '../../../store/ui/ui.types';

const THEME_MAP = {
  [NavLinksEnum.ABOUT]: 'about',
  [NavLinksEnum.DATA_DOWNLOAD]: 'downloads',
  [NavLinksEnum.HOME]: 'home',
  [NavLinksEnum.METHOD_DOCUMENTATION]: 'methods',
  [NavLinksEnum.LOCAL_HEATH_PANORAMA]: 'panorama',
  [NavLinksEnum.PROJECTS_GALLERY]: 'projects_gallery',
  [NavLinksEnum.PRODUCTIONS]: 'productions',
  [NavLinksEnum.VISUALIZATIONS]: 'visualization',
};

const setBackground = ({ theme, location }) => {
  const themeKey = THEME_MAP[location.pathname];
  const color = theme.palette[themeKey]?.main;
  return color || supernova;
};

export const Layout = styled.div`
  background-color: ${athensGray};
  overflow-x: hidden;
  position: relative;
  width: 100%;
  z-index: 0;
  &::before {
    content: '';
    background: ${setBackground};
    border-radius: 0 0 1000rem 1000rem;
    position: absolute;
    z-index: -1;
    left: -200px;
    top: -331px;
    height: 870px;
    width: 1740px;
  }
`;

export const Body = styled.main`
  display: flex;
  min-height: 60rem;
  position: relative;
  padding-left: 5rem;
`;

export const Aside = styled.aside`
  position: absolute;
  left: 0;
  top: -1rem;
  z-index: ${zIndexOverlay};
`;

export const Main = styled.div`
  width: 100%;
`;
