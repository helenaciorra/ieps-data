import React from 'react';
import Section from './componentes/Section';

import * as S from './styles';

import formulaImage from './img/01.png';
import { textColor } from '../../../../../constants/theme';

export const CoberturaPlanosDeSaude = () => {
  return (
    <div>
      <div style={{ maxWidth: '600px' }}>
        <S.PageTitle>
          Cobertura de Planos de Saúde (%)
        </S.PageTitle>
      </div>

      <Section title={'Indicador'}>
        <S.Paragraphy>
          Número de beneficiários de planos de saúde suplementar dividido pela população residente, por localidade geográfica e ano.
        </S.Paragraphy>
      </Section>

      <Section title={'Interpretação'}>
        <S.Paragraphy>
          Estima o percentual da população coberta por planos e seguros de assistência suplementar à saúde (privados). 
          Não foram incluídos planos odontológicos, sendo considerados somente planos médico-hospitalares, ambulatoriais e hospitalares.
        </S.Paragraphy>
      </Section>

      <Section title={'Usos'}>
        <S.Paragraphy>
          Este indicador permite a identificação de variações geográficas e temporais da cobertura de assistência médica 
          suplementar, conforme levantado pela RIPSA¹, bem como o aperfeiçoamento da regulamentação deste setor.
        </S.Paragraphy>
      </Section>

      <Section title={'Limitações'}>
        <S.Paragraphy>
          Não se inclui a população vinculada à instituição patronal de assistência ao servidor público civil e militar, 
          tal como notado pela RIPSA¹. Conforme alertado em Nota Técnica da ANS², as operadoras podem informar indevidamente 
          à ANS o endereço da empresa contratante de plano coletivo, ao invés do endereço residencial do beneficiário. 
          Isto provoca erro na consulta realizada, devido à possibilidade de aumento da quantidade de beneficiários no 
          local de sede da empresa contratante em detrimento do local de residência do beneficiário. Além disso, tendo 
          em vista que as operadoras de planos privados de saúde enviam dados de vínculos de beneficiários aos planos 
          para a ANS, cabe ressaltar que um beneficiário pode possuir mais de um plano e, com isso, constar no sistema 
          tantas vezes quantos forem os vínculos que possuir com planos privados. Portanto, há possibilidade de 
          superestimação do indicador, devido à contagem cumulativa de beneficiários vinculados a mais de um plano ou 
          seguro privado de saúde. A esse respeito, dados da Pesquisa Nacional de Saúde (2019) apontam que 2,75% 
          daqueles que possuíam plano de saúde declararam ter mais de um plano.
        </S.Paragraphy>
      </Section>

      <Section title={'Fonte dos Dados'}>
        <S.Paragraphy>
          Agência Nacional de Saúde Suplementar (ANS), TabNet/DATASUS.
        </S.Paragraphy>
      </Section>

      <Section title="Link">
        Beneficiários Planos de Saúde -{' '}
        <S.Link
          target="_blank"
          href="https://www.ans.gov.br/anstabnet/cgi-bin/dh?dados/tabnet_02.def#"
        >
          https://www.ans.gov.br/anstabnet/cgi-bin/dh?dados/tabnet_02.def#
        </S.Link>
        <br/>
        População -{' '}
        <S.Link
          target="_blank"
          href="https://tabnet.datasus.gov.br/cgi/deftohtm.exe?popsvs/cnv/popbr.def"
        >
          https://tabnet.datasus.gov.br/cgi/deftohtm.exe?popsvs/cnv/popbr.def
        </S.Link>
      </Section>

      <Section title="Período disponibilizado">
        <S.Paragraphy>2010 a 2023.</S.Paragraphy>
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
            Utilizou-se os dados oriundos do Sistema de Informações de Beneficiários (SIB), segundo Nota Técnica² da ANS, 
            disponibilizados por município e trimestre/ano (março, junho, setembro e dezembro), e dados de 
            população municipal obtidos do TabNet/DATASUS.
          </S.Li>
          <S.Li>
            O SIB refere-se ao sistema utilizado pelas operadoras de planos privados de saúde para envio mensal à ANS de 
            dados referentes aos vínculos de beneficiários e aos planos, incluindo movimentação de inclusão, alteração 
            e cancelamento dos mesmos. Também é possível que um mesmo beneficiário possua mais de um plano, constando 
            no sistema mais de uma vez.
          </S.Li>
          <S.Li>
            Considerou-se o número de beneficiários referentes ao mês de dezembro, tal como disponibilizado pela 
            própria ANS, dividido pela população residente.
          </S.Li>
          <S.Li>
            Foi realizado o cálculo da cobertura de Plano de Saúde conforme a seguinte fórmula:
            <div style={{ textAlign: 'center' }}>
              <img src={formulaImage} alt="Fórmula" />
            </div>
            <p>em que:</p>
            <S.Ul>
              <S.Li>g: corresponde à unidade geográfica;</S.Li>
              <S.Li>a: corresponde ao ano.</S.Li>
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
              ¹ Brasil, Ministério da Saúde. Rede Interagencial de Informações para Saúde (RIPSA).Proporção da população 
              coberta por planos privados de saúde - ANS - F.16 - 2012.[Internet] [citado 14 de outubro de 2021] 
              Disponível em:{' '}
              <a
                href="https://idsus.saude.gov.br/assets/detalhadas.pdf"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://idsus.saude.gov.br/assets/detalhadas.pdf
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ² Agência Nacional de Saúde Suplementar (ANS). Nota técnica, Taxa de Cobertura. [Internet] 
              [citado 14 de outubro de 2021] Disponível em:{' '}
              <a
                href="https://www.ans.gov.br/anstabnet/notas_taxa_cobertura.htm."
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://www.ans.gov.br/anstabnet/notas_taxa_cobertura.htm.
              </a>
            </S.ReferenciaLink>
          </div>
        </div>
      </Section>
    </div>
  );
};
