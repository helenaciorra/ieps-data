import React from 'react';
import { theme } from '../../../../constants/theme';
import { NavLinksEnum } from '../../../../store/ui/ui.types';
import AboutDecoration from './components/AboutDecoration';
import DownLoadDecoration from './components/DownLoadDecoration';
import MethodsDecoration from './components/MethodsDecoration';
import PanoramaDecoration from './components/PanoramaDecoration';
import ProjectsDecoration from './components/ProjectsDecoration';
import VisualizationDecoration from './components/VisualizationDecoration';
import ProductionsDecoration from './components/ProductionsDecoration';

import * as S from './HomePresentationDecoration.css';

type Props = {
  selectedUrl: NavLinksEnum,
};

const HomePresentationDecoration = ({ selectedUrl }: Props) => {
  if (selectedUrl === NavLinksEnum.VISUALIZATIONS) {
    return (
      <S.HomePresentationDecoration color={theme.palette.visualization.main}>
        <S.Visualizations>
          <VisualizationDecoration />
        </S.Visualizations>
      </S.HomePresentationDecoration>
    );
  }

  if (selectedUrl === NavLinksEnum.ABOUT) {
    return (
      <S.HomePresentationDecoration color={theme.palette.about.main}>
        <S.About>
          <AboutDecoration />
        </S.About>
      </S.HomePresentationDecoration>
    );
  }

  if (selectedUrl === NavLinksEnum.DATA_DOWNLOAD) {
    return (
      <S.HomePresentationDecoration color={theme.palette.downloads.main}>
        <S.DataDownload>
          <DownLoadDecoration />
        </S.DataDownload>
      </S.HomePresentationDecoration>
    );
  }

  if (selectedUrl === NavLinksEnum.LOCAL_HEATH_PANORAMA) {
    return (
      <S.HomePresentationDecoration color={theme.palette.panorama.main}>
        <S.LocalHealthPanorama>
          <PanoramaDecoration />
        </S.LocalHealthPanorama>
      </S.HomePresentationDecoration>
    );
  }

  if (selectedUrl === NavLinksEnum.METHOD_DOCUMENTATION) {
    return (
      <S.HomePresentationDecoration color={theme.palette.methods.main}>
        <S.MethodsAndDocumentation>
          <MethodsDecoration />
        </S.MethodsAndDocumentation>
      </S.HomePresentationDecoration>
    );
  }

  if (selectedUrl === NavLinksEnum.PROJECTS_GALLERY) {
    return (
      <S.HomePresentationDecoration color={theme.palette.projects_gallery.main}>
        <S.ProjectsGallery>
          <ProjectsDecoration />
        </S.ProjectsGallery>
      </S.HomePresentationDecoration>
    );
  }

  if (selectedUrl === NavLinksEnum.PRODUCTIONS) {
    return (
      <S.HomePresentationDecoration color={theme.palette.productions.main}>
        <S.ProjectsGallery>
          <ProductionsDecoration />
        </S.ProjectsGallery>
      </S.HomePresentationDecoration>
    );
  }

  return <S.HomePresentationDecoration color={theme.palette.home.main} />;
};

export default HomePresentationDecoration;
