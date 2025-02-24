import React from 'react';
import Layout from '../../components/layout/Layout';
import {Title} from '../../components/typography';
import * as S from './Productions.css';
import Head from '../../components/Head';


const Productions = ({location}) => {
  return (
    <Layout location={location}>
      <Head siteTitle="Sobre o IEPS"></Head>
      <S.Block>
        <S.About>
          <S.HeroBlock>
            <Title>Produções</Title>
              <S.SubTitle>
                O IEPS Data nasceu para facilitar o acesso e a interpretação de
                indicadores de saúde no Brasil.
              </S.SubTitle>
          </S.HeroBlock>
        </S.About>
      </S.Block>
    </Layout>
  );
};

export default Productions;
