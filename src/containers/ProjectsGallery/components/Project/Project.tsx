import React from 'react';
import RedirectButton from '../RedirectButton';

import projectCoverImg from '../../assets/projectCover.png';

import * as S from './Project.css';

interface Props {
  title: string;
  description: string;
  projectUrl: string;
  img: string;
  imgAlt: string;
}

const Project = ({ title, description, projectUrl, img, imgAlt }: Props) => {
  return (
    <S.Container>
      <S.CoverImg>
        <img src={projectCoverImg} alt={imgAlt} />
      </S.CoverImg>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <RedirectButton projectUrl={projectUrl} />
      </S.Wrapper>
    </S.Container>
  );
};

export default Project;
