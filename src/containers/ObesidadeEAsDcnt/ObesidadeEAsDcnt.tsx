import React, { useEffect } from 'react';
import GlobalStyle from '../../global.css';
import * as S from './ObesidadeEAsDcnt.css';
import Head from '../../components/Head';

let timer;

const ObesidadeEAsDcnt = ({ location }) => {
  useEffect(() => {
    if (location.href.includes('#conditionTerms')) {
      clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Head siteTitle="A EPIDEMIA DE OBESIDADE E AS DCNT"></Head>
      <S.webDCNT>
        <iframe src="https://rezendelfm.github.io/obesidade-e-as-dcnt/"></iframe>
      </S.webDCNT>
    </>
  );
};

export default ObesidadeEAsDcnt;
