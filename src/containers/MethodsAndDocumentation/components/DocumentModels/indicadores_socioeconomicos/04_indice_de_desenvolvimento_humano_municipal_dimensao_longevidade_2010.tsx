import React from 'react';
import Section from './componentes/Section';

import * as S from './styles';

import formulaImage from './img/04.png';
import { textColor } from '../../../../../constants/theme';

export const IndiceDesenvolvimentoHumanoMunicipalDimensaoLongevidade = () => {
  return (
    <div>
      <div style={{ maxWidth: '600px' }}>
        <S.PageTitle>
          Índice de Desenvolvimento Humano Municipal - dimensão Longevidade (2010)
        </S.PageTitle>
      </div>

      <Section title={'Indicador'}>
        <S.Paragraphy>
          Índice de Desenvolvimento Humano Municipal (IDHM), especificamente a dimensão “Longevidade”.
        </S.Paragraphy>
      </Section>

      <Section title={'Interpretação'}>
        <S.Paragraphy>
          O IDH é uma medida que avalia o progresso em três dimensões: renda, educação e saúde. Ao nível municipal, 
          calcula-se o IDHM, formulado considerando as dimensões: longevidade, educação e renda. A dimensão “Longevidade” 
          do IDHM refere-se à expectativa de vida ao nascer. O indicador refere-se ao número médio de anos que se espera 
          que uma pessoa viva a partir de seu nascimento em uma determinada localidade e em determinado ano, mantidos os 
          padrões de mortalidade observados no período¹.
        </S.Paragraphy>
        <div className="alert">
            <div className="alert-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9V9ZM9 4.5C8.85781 4.50008 8.71721 4.52994 8.58726 4.58767C8.45731 4.64539 8.3409 4.7297 8.24551 4.83515C8.15013 4.9406 8.07789 5.06487 8.03345 5.19994C7.98901 5.33501 7.97336 5.47789 7.9875 5.61937L8.38125 9.56475C8.39448 9.71974 8.4654 9.86413 8.57997 9.96934C8.69455 10.0746 8.84444 10.1329 9 10.1329C9.15556 10.1329 9.30545 10.0746 9.42003 9.96934C9.5346 9.86413 9.60552 9.71974 9.61875 9.56475L10.0125 5.61937C10.0266 5.47789 10.011 5.33501 9.96655 5.19994C9.92211 5.06487 9.84987 4.9406 9.75449 4.83515C9.6591 4.7297 9.54269 4.64539 9.41274 4.58767C9.28279 4.52994 9.14219 4.50008 9 4.5V4.5ZM9.00225 11.25C8.70388 11.25 8.41773 11.3685 8.20675 11.5795C7.99578 11.7905 7.87725 12.0766 7.87725 12.375C7.87725 12.6734 7.99578 12.9595 8.20675 13.1705C8.41773 13.3815 8.70388 13.5 9.00225 13.5C9.30062 13.5 9.58677 13.3815 9.79774 13.1705C10.0087 12.9595 10.1272 12.6734 10.1272 12.375C10.1272 12.0766 10.0087 11.7905 9.79774 11.5795C9.58677 11.3685 9.30062 11.25 9.00225 11.25Z"
                  fill="#34679A"
                ></path>
              </svg>
            </div>
            <div className="alert-text">
              <strong className="alert-text-title">
                Cuidado na interpretação!
              </strong>
              <p className="alert-text-paragraph">
                Indicador disponível para o ano de 2010, repetido para os outros anos.
              </p>
            </div>
          </div>
      </Section>

      <Section title={'Usos'}>
        <S.Paragraphy>
          Esta dimensão do IDHM sintetiza condições gerais de saúde de uma população¹.
        </S.Paragraphy>
      </Section>

      <Section title={'Limitações'}>
        <S.Paragraphy>
          Não são conhecidas estatísticas vitais fidedignas para todos os recortes espaciais. No caso de municípios, 
          utiliza-se o padrão estadual de mortalidade¹.
        </S.Paragraphy>
      </Section>

      <Section title={'Fonte dos Dados'}>
        <S.Paragraphy>
          Atlas Brasil
        </S.Paragraphy>
      </Section>

      <Section title="Link">
        <S.Link
          target="_blank"
          href="https://www.atlasbrasil.org.br/acervo/biblioteca"
        >
          https://www.atlasbrasil.org.br/acervo/biblioteca
        </S.Link>
      </Section>

      <Section title="Período disponibilizado">
        <S.Paragraphy>2010.</S.Paragraphy>
      </Section>

      <Section title="NÍVEIS GEOGRÁFICOS DISPONIBILIZADOS">
        <S.Ul>
          <S.Li>Brasil</S.Li>
          <S.Li>Estado</S.Li>
          <S.Li>
            Macrorregião de Saúde (117)
              <S.Ol>
                <S.Li>Fonte: SAGE.</S.Li>
              </S.Ol>
          </S.Li>
          <S.Li>
            Região de Saúde (450)
              <S.Ol>
                <S.Li>Fonte: SAGE.</S.Li>
              </S.Ol>
          </S.Li>
          <S.Li>
            Município (5.570)
              <S.Ol>
                <S.Li>Fonte: IBGE.</S.Li>
              </S.Ol>
          </S.Li>
        </S.Ul>
      </Section>

      <Section title="Fórmula de Cálculo">
        <S.Ol>
          <S.Li>
            Para os níveis municipal, estadual e federal, utilizou-se os valores já calculados do IDHM, dimensão 
            “Longevidade”, fornecidos pelo Atlas Brasil¹.
          </S.Li>
          <S.Li>
            Para os níveis da Região e Macrorregião de Saúde, seguiu-se metodologia de agregação proposta e adotada pelo 
            PROADESS, descrita em Rabelais et al. (2015)². A metodologia consiste na agregação do indicador municipal 
            ponderado pelas respectivas razões entre o total de residentes dos municípios e o total de residentes da 
            Região ou Macrorregião de Saúde².
          </S.Li>
          <S.Li>
            Foi realizado o cálculo, com base em dados de expectativa de vida, conforme a seguinte fórmula:
            <div style={{ textAlign: 'center' }}>
              <img src={formulaImage} alt="Fórmula" />
            </div>
            <p>em que:</p>
            <S.Ul>
              <S.Li>g: corresponde à unidade geográfica;</S.Li>
              <S.Li>Valor máximo ref = 85 anos¹;</S.Li>
              <S.Li>Valor mínimo ref = 25 anos¹.</S.Li>
            </S.Ul>
          </S.Li>
        </S.Ol>
      </Section>

      <Section title="REFERÊNCIAS">
        <div>
          <div className="alert alert-reference">
            <div className="alert-icon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9V9ZM9 4.5C8.85781 4.50008 8.71721 4.52994 8.58726 4.58767C8.45731 4.64539 8.3409 4.7297 8.24551 4.83515C8.15013 4.9406 8.07789 5.06487 8.03345 5.19994C7.98901 5.33501 7.97336 5.47789 7.9875 5.61937L8.38125 9.56475C8.39448 9.71974 8.4654 9.86413 8.57997 9.96934C8.69455 10.0746 8.84444 10.1329 9 10.1329C9.15556 10.1329 9.30545 10.0746 9.42003 9.96934C9.5346 9.86413 9.60552 9.71974 9.61875 9.56475L10.0125 5.61937C10.0266 5.47789 10.011 5.33501 9.96655 5.19994C9.92211 5.06487 9.84987 4.9406 9.75449 4.83515C9.6591 4.7297 9.54269 4.64539 9.41274 4.58767C9.28279 4.52994 9.14219 4.50008 9 4.5V4.5ZM9.00225 11.25C8.70388 11.25 8.41773 11.3685 8.20675 11.5795C7.99578 11.7905 7.87725 12.0766 7.87725 12.375C7.87725 12.6734 7.99578 12.9595 8.20675 13.1705C8.41773 13.3815 8.70388 13.5 9.00225 13.5C9.30062 13.5 9.58677 13.3815 9.79774 13.1705C10.0087 12.9595 10.1272 12.6734 10.1272 12.375C10.1272 12.0766 10.0087 11.7905 9.79774 11.5795C9.58677 11.3685 9.30062 11.25 9.00225 11.25Z"
                  fill="#34679A"
                ></path>
              </svg>
            </div>
            <div className="alert-text">
              <strong className="alert-text-paragraph">
                Toda a documentação do IEPS Data é baseada em documentos
                oficiais e referências acadêmicas. Aqui está a lista das
                principais referências utilizadas na redação deste documento.
              </strong>
            </div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <S.ReferenciaLink>
              ¹ Atlas do Desenvolvimento Humano. Índice de Desenvolvimento Humano Municipal - IDHM. Metodologia. [Internet] 
              [citado 23 de novembro de 2021]. Disponível em:{' '}
              <a
                href="https://www.atlasbrasil.org.br/acervo/atlas"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://www.atlasbrasil.org.br/acervo/atlas
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ² Rabelais Duarte CM, de Moraes Pedroso M, Bellido JG, da Silva Moreira R, Viacava F. Regionalização e 
              desenvolvimento humano: Uma proposta de tipologia de Regiões de Saúde no Brasil. Cad Saude Publica. 
              2015;31(6):1163–74.{' '}
            </S.ReferenciaLink>
          </div>
        </div>
      </Section>
    </div>
  );
};
