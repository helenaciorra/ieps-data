import React from 'react';
import { NavLinksEnum } from '../../../../store/ui/ui.types';
import * as S from './HomePresentationSubTitle.css';

const SUB_TITLES = {
  defalt:
    'Explore o portal para conhecer em mais detalhes e comparar indicadores de saúde de municípios, regiões de saúde e estados.',
  [NavLinksEnum.VISUALIZATIONS]:
    'Visualize e compare a evolução de mais de 40 indicadores de saúde.',
  [NavLinksEnum.ABOUT]: '',
  [NavLinksEnum.DATA_DOWNLOAD]:
    'Ou selecione os dados por local, ano, e grupo de indicadores de seu interesse.',
  [NavLinksEnum.LOCAL_HEATH_PANORAMA]:
    'Tenha uma visão resumida da saúde no local da sua escolha.',
  [NavLinksEnum.METHOD_DOCUMENTATION]:
    'Saiba mais sobre as bases de dados, as limitações e possíveis interpretações dos indicadores de saúde.',
  [NavLinksEnum.PROJECTS_GALLERY]:
    'Explore outras iniciativas de visualização desenvolvidas pelo IEPS e associados.',
};

type Props = {
  selectedUrl: NavLinksEnum,
};

const HomePresentationSubTitle = ({ selectedUrl }: Props) => {
  if (selectedUrl === NavLinksEnum.HOME) {
    return null;
  }

  return (
    <S.HomePresentationSubTitle>
      <S.Text hasContrast={selectedUrl === NavLinksEnum.ABOUT}>
        {SUB_TITLES[selectedUrl]}
      </S.Text>
    </S.HomePresentationSubTitle>
  );
};

export default HomePresentationSubTitle;
