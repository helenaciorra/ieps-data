import React from 'react';
import { ArrowLeftIcon } from '../../../../components/icons';
import { HomeTitle } from '../../../../components/typography';
import { NavLinksEnum } from '../../../../store/ui/ui.types';
import HomePresentationSubTitle from '../HomePresentationSubTitle';
import HomePresentationDecoration from '../HomePresentationDecoration';
import * as S from './HomePresentation.css';

type Props = {
  selectedUrl: NavLinksEnum,
};

const TITLES = {
  defalt:
    'O IEPS Data facilita o acesso a dados e indicadores de saúde de todo Brasil.',
  [NavLinksEnum.VISUALIZATIONS]: 'Explore indicadores de saúde de todo Brasil.',
  [NavLinksEnum.ABOUT]:
    'Conheça o Instituto de Estudos para Políticas de Saúde.',
  [NavLinksEnum.DATA_DOWNLOAD]:
    'Acesse e baixe os dados completos do IEPS Data.',
  [NavLinksEnum.LOCAL_HEATH_PANORAMA]:
    'Acesse um panorama dos indicadores de saúde por município e região de saúde.',
  [NavLinksEnum.METHOD_DOCUMENTATION]:
    'Entenda a fonte e a metodologia dos indicadores de saúde do IEPS Data.',
  [NavLinksEnum.PROJECTS_GALLERY]:
    'Conheça outros projetos de visualização de dados de saúde.',
  [NavLinksEnum.PRODUCTIONS]:
    'Conheça outros projetos de visualização de dados de saúde.',
};

const HomePresentation = ({ selectedUrl }: Props) => {
  const renderHomeKnowMore = () => {
    if (selectedUrl !== NavLinksEnum.HOME) {
      return null;
    }

    return (
      <S.TextBlock>
        <S.TextCta>
          <p>
            Apesar de ricos e granulares, os dados de saúde existentes estão dispersos em sistemas de informação diferentes, 
            o que dificulta consultas e comparações  importantes. Esta plataforma reúne indicadores de <strong>diversos temas</strong> desde 
            2010 e disponibiliza <strong>visualizações, documentações e bases de dados</strong> prontas para download. <br/> <br/>Os indicadores aqui 
            presentes foram <strong>escolhidos</strong> e <strong>tratados</strong> após consultas a <strong>especialistas</strong> e 
            continuarão sendo aperfeiçoados e expandidos com o mesmo rigor técnico. O objetivo é contribuir para que gestores, 
            comunicadores, pesquisadores e a população em geral <strong>acessem</strong> e <strong>entendam</strong> a saúde de 
            seus locais de interesse.
          </p>
        </S.TextCta>
        <S.Video>
           <iframe
              width="550"
              height="315"
              src="https://www.youtube.com/embed/2frYDG16t4Y"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
        </S.Video>
      </S.TextBlock>
    );
  };

  return (
    <S.HomePresentation>
      <HomeTitle isHome={selectedUrl === NavLinksEnum.HOME}>{TITLES[selectedUrl] || TITLES.defalt}</HomeTitle>
      {renderHomeKnowMore()}
      <HomePresentationSubTitle selectedUrl={selectedUrl} />
      <HomePresentationDecoration selectedUrl={selectedUrl} />
    </S.HomePresentation>
  );
};

export default HomePresentation;
