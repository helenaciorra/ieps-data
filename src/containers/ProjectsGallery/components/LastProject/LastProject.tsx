import React from 'react';

import lastProjectCoverImg from '../../assets/image.png';
import RedirectButton from '../RedirectButton';
import * as S from './LastProject.css';

interface Props {
  title: string;
  description: string;
  projectUrl: string;
  img: string;
  imgAlt: string;
  isNew: boolean;
}

const LastProject = ({
  title,
  description,
  projectUrl,
  img,
  imgAlt,
  isNew,
}: Props) => {
  return (
    <S.Container>
      <S.Wrapper>
        {isNew ? (
          <S.Tag>
            <span>Último projeto inserido</span>
          </S.Tag>
        ) : (
          <></>
        )}
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <RedirectButton projectUrl={projectUrl} inversedColors={true} />
      </S.Wrapper>
      <S.ImageContainer>
        <img src={img} alt={imgAlt} />
      </S.ImageContainer>
    </S.Container>
  );
};

export default LastProject;
