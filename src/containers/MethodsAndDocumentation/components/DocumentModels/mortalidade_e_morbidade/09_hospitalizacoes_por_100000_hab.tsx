import React from 'react';
import Section from './componentes/Section';

import * as S from './styles';

import formulaImage from './img/09.png';
import { textColor } from '../../../../../constants/theme';

export type GraphLevelContentProps = {
  title: string,
  content?: string | null,
};

export const HospitalizacoesPor100000Hab = () => {
  return (
    <div>
      <div style={{ maxWidth: '600px' }}>
        <S.PageTitle>
          Hospitalizações (por 100.000 Hab.)
        </S.PageTitle>
      </div>

      <Section title={'Indicador'}>
        <S.Paragraphy>
          Taxa de hospitalizações por 100.000 habitantes, realizadas no âmbito do Sistema Único de Saúde (SUS), 
          considerando o local de residência.
        </S.Paragraphy>
      </Section>

      <Section title={'Interpretação'}>
        <S.Paragraphy>
          Reflete o acesso de residentes de um determinado local a hospitalizações pelo SUS em um ano . A taxa também é 
          influenciada  por fatores como o perfil de morbidade e a composição etária de determinada população¹.
        </S.Paragraphy>
      </Section>

      <Section title={'Usos'}>
        <S.Paragraphy>
          Este indicador permite analisar variações geográficas e temporais na distribuição de internações 
          hospitalares pelo SUS. Além disso, permite identificar situações de desigualdade e contribuir para avaliar a 
          adequação do volume de internações às necessidades da população atendida, tendo em vista o perfil de 
          morbidade e composição etária local¹.
        </S.Paragraphy>
      </Section>

      <Section title={'Limitações'}>
        <S.Paragraphy>
          Hospitalizações, aqui, são restritas àquelas que ocorrem no âmbito do SUS (seja em hospitais públicos ou 
          privados conveniados), não sendo contabilizadas hospitalizações realizadas na saúde suplementar 
          (cooperativa médica, medicina de grupo, auto-gestão e seguradora), assistência prestada a servidores públicos 
          civis e militares, nem as referentes a recursos próprios da unidade de internação e a serviços prestados 
          mediante desembolso direto¹. Pode, ainda, não incluir todas as internações efetivamente realizadas pelo SUS. 
          Há a possibilidade de subnotificação do número de internações, além de problemas na identificação de 
          reinternações e transferências do mesmo paciente ¹-². Ademais, pacientes podem informar como município de 
          residência aquele no qual foram atendidos, por temerem não receber o atendimento no local escolhido³.
        </S.Paragraphy>
      </Section>

      <Section title={'Fonte dos Dados'}>
        <S.Paragraphy>
          Sistema de Informações Hospitalares (SIH), TabNet/DATASUS.
        </S.Paragraphy>
      </Section>

      <Section title="Link">
        Hospitalizações -{' '}
        <S.Link
          target="_blank"
          href="sftp://ftp.datasus.gov.br/dissemin/publicos/SIHSUS/200801_/Dados/"
        >
          sftp://ftp.datasus.gov.br/dissemin/publicos/SIHSUS/200801_/Dados/
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
            Utilizou-se as informações individuais de hospitalizações disponibilizadas nos microdados, que foram 
            somadas ao nível de município-ano, considerando o município de residência do paciente, e dados de 
            população municipal disponibilizados pelo TabNet/DATASUS.
          </S.Li>
          <S.Li>
            Utilizou-se apenas as Autorizações de Internação Hospitalar (AIH) aceitas (base “RD”). Ao final de cada mês, 
            pacientes que permaneceram internados são re-inseridos na base com o mesmo número de AIH de origem, porém 
            com a variável de identificação indicando que a observação corresponde a uma internação em curso (“IDENT” = 5)². 
            Na internação original, esta variável aparece como sendo igual a 1, portanto foram filtradas apenas as 
            observações com “IDENT” = 1. Caso ocorra uma re-internação após três dias de alta, uma nova sequência de 
            AIH é gerada e contabiliza-se como uma nova internação².
          </S.Li>
          <S.Li>
            Foi realizado o cálculo da taxa de hospitalizações por 100.000 habitantes conforme a seguinte fórmula:
            <div style={{ textAlign: 'center' }}>
              <img src={formulaImage} alt="Fórmula" />
            </div>
            <p>em que:</p>
            <S.Ul>
              <S.Li>g: corresponde à unidade geográfica;</S.Li>
              <S.Li>a: corresponde ao ano.</S.Li>
            </S.Ul>
          </S.Li>
          <S.Li style={{marginTop: 12}}>
            Verificou-se posteriormente que estas estimativas correspondem aos dados de internações do TabNet/DATASUS⁴.
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
              ¹ Brasil, Ministério da Saúde. Número de internações hospitalares ( SUS ) por habitante - F.3 [Internet]. 
              [citado 07 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://fichas.ripsa.org.br/2012/f-3/?l=pt_BR"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://fichas.ripsa.org.br/2012/f-3/?l=pt_BR
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ² Cerqueira DRC, Alves PP, Coelho DSC, Reis MVM, Lima AS, Análise L, et al. Uma Análise da Base de Dados 
              do Sistema de Informação Hospitalar entre 2001 e 2018. 2019; 160 p.{' '}
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ³ Aguiar FP, Melo ECP, Oliveira EXG de, Carvalho MS, Pinheiro RS. Confiabilidade da informação sobre 
              município de residência no Sistema de Informações Hospitalares - Sistema Único de Saúde para análise do 
              fluxo de pacientes no atendimento do câncer de mama e do colo do útero. Cad Saúde Coletiva. 2013;21(2):197–200.{' '}
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁴ Brasil, Ministério da Saúde. Internações Hospitalares do SUS - por local de internação [Internet]. 
              [citado 22 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://tabnet.datasus.gov.br/cgi/deftohtm.exe?sih/cnv/sxuf.def"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://tabnet.datasus.gov.br/cgi/deftohtm.exe?sih/cnv/sxuf.def
              </a>
            </S.ReferenciaLink>
          </div>
        </div>
      </Section>
    </div>
  );
};
