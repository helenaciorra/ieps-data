import React from 'react';
import Section from './componentes/Section';

import * as S from './styles';

import formulaImage from './img/03.png';
import { textColor } from '../../../../../constants/theme';

export const PerDaPopulacaoCom04Anos = () => {
  return (
    <div>
      <div style={{ maxWidth: '600px' }}>
        <S.PageTitle>
          % da População com 0-4 anos
        </S.PageTitle>
      </div>

      <Section title={'Indicador'}>
        <S.Paragraphy>
          Percentual da população entre 0 e 4 anos de idade.
        </S.Paragraphy>
      </Section>

      <Section title={'Interpretação'}>
        <S.Paragraphy>
          Este indicador está associado aos níveis de fecundidade e natalidade, que repercutem na estrutura etária da 
          população, conforme especificado pela RIPSA¹. Regiões com reduzidas taxas de fecundidade apresentam menor 
          percentual de crianças abaixo de cinco anos de idade.
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
                A taxa de mortalidade bruta reflete a composição etária da população local. Taxas ajustadas são mais recomendadas para fins de comparações.
              </p>
            </div>
          </div>
      </Section>

      <Section title={'Usos'}>
        <S.Paragraphy>
          Este indicador permite analisar variações geográficas e temporais na distribuição de crianças menores de 5 anos, 
          tal como levantado pela RIPSA¹. A lém disso, pode contribuir para o planejamento, gestão e avaliação de 
          políticas públicas relativas a temas como saúde, educação e assistência social de crianças em idade pré-escolar
        </S.Paragraphy>
      </Section>

      <Section title={'Limitações'}>
        <S.Paragraphy>
          As estimativas populacionais replicam tendências observadas no passado e estão, portanto, sujeitas a erro, 
          além de não serem substitutas de Contagens Populacionais e Censos Demográficos, conforme Nota Técnica do 
          TabNet/DATASUS². Deve-se também considerar a não realização do Censo 2020, sendo o último levantamento datado 
          de 2010. Além disso, há a subnotificação de óbitos e nascimentos, especialmente em áreas menos desenvolvidas 
          e pequenos municípios³. Municípios de pequeno porte estão mais sujeitos a erros em decorrência do impacto por 
          variações nos componentes demográficos (fecundidade, mortalidade e migração) e devem ser utilizados com cautela. 
          Ademais, destaca-se que dois dos maiores desafios no cálculo de estimativas populacionais dizem respeito à 
          subnotificação de dados de nascimento e mortalidade e a migrações.
        </S.Paragraphy>
      </Section>

      <Section title={'Subnotificação de óbitos e nascimentos'}>
        <S.Paragraphy>
          Estimativas referentes a contingentes populacionais estão sujeitas a limitações nas coberturas das informações 
          de nascimentos e de óbitos. Estas estimativas são atualmente realizadas utilizando como base estatísticas do 
          Registro Civil e estatísticas do Ministério da Saúde (provenientes do Sistema de Informações sobre Mortalidade 
          [SIM] e do Sistema de Informações sobre Nascidos Vivos [SINASC]). 
        </S.Paragraphy>
        <S.Paragraphy>
          A partir de 1973, o IBGE passou a ser responsável pela coleta, em todo território nacional, dos dados sobre 
          eventos vitais registrados em cartórios⁴. Desde então, a despeito de melhorias, como o fim da cobrança pela 
          emissão da certidão em 1997 e a progressiva diminuição de registros tardios (que atualmente não ultrapassa 
          três anos), ainda existe um problema de sub-registro de informações relacionado, principalmente, à pobreza, 
          exclusão social e longas distâncias entre o lugar de ocorrência do evento vital e o cartório mais próximo⁴,⁵. 
          Esse problema, contudo, vem sendo superado nos últimos anos com um aumento na cobertura dos dados provenientes 
          de informações do Registro Civil. No caso das estimativas populacionais realizadas pelo TabNet/DATASUS, as 
          estatísticas oficiais de população divulgadas pelo IBGE e utilizadas para convergência fazem uso de dados de 
          Registro Civil⁴. 
        </S.Paragraphy>
        <S.Paragraphy>
          Outra importante fonte de informação acerca de eventos vitais são os Sistemas de Informação no âmbito do 
          Ministério da Saúde (SIM e SINASC). Um dos objetivos de criação destas bases de dados seria justamente cobrir 
          lacunas deixadas pelo Registro Civil⁶. Ocorreu, entretanto, que essas novas fontes apresentaram as mesmas 
          limitações referentes à subnotificação que os dados do Registro Civil, ainda que o problema venha sendo 
          superado e a cobertura de informações se torne cada vez mais completa. Para o ano de 2015, estimativas apontam 
          que o indicador de cobertura do SIM para o Brasil foi de 97,2% (mínimo de 91,2% no Amapá). Em relação ao SINASC, 
          a cobertura estimada foi de 97,7% para o Brasil (mínimo de 93,6% em Roraima)⁴.
        </S.Paragraphy>
        <S.Paragraphy>
          Atualmente, após parceria firmada entre o IBGE e o Ministério da Saúde, o pareamento das duas bases de dados 
          tem sido realizado tendo em vista o objetivo futuro de integração entre os sistemas⁴.
        </S.Paragraphy>
      </Section>

      <Section title={'Migrações'}>
        <S.Paragraphy>
          Outro aspecto importante na estimação de contingentes populacionais, as migrações internas e sua mensuração 
          são amplamente debatidas em publicação de Oliveira e Oliveira⁷. Segundo os autores, embora as perspectivas à 
          época a respeito do estudo de fenômenos migratórios utilizando dados do Censo e da Pesquisa Nacional por Amostra 
          de Domicílios Contínua (PNAD Contínua) fossem animadoras, a não realização do Censo demográfico em 2020 
          fragiliza a estimação desse componente com maior precisão.
        </S.Paragraphy>
      </Section>

      <Section title={'Fonte dos Dados'}>
        <S.Paragraphy>
          TabNet/DATASUS.
        </S.Paragraphy>
      </Section>

      <Section title="Link">
        <S.Link
          target="_blank"
          href="https://tabnet.datasus.gov.br/cgi/tabcgi.exe?popsvs/cnv/popbr.def"
        >
          https://tabnet.datasus.gov.br/cgi/tabcgi.exe?popsvs/cnv/popbr.def
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
            Utilizou-se a metodologia para estimativas anuais de população municipal por idade e sexo conforme publicado 
            em Nota Técnica do TabNet/DATASUS², que incorpora três premissas básicas:
            <S.Ul>
              <S.Li>
                Convergência com estatísticas oficiais de população divulgadas pelo IBGE para os anos de 2018 e 2019;
              </S.Li>
              <S.Li>
                Compatibilização Territorial, em que considera-se alterações territoriais oriundas de alterações de 
                território e criação de novos municípios ao longo do tempo para todo o período analisado pelo IEPS Data;
              </S.Li>
              <S.Li>
                Compatibilização Metodológica, em que garante-se que as estimativas geradas sejam 
                estatisticamente compatíveis ao longo do tempo.
              </S.Li>
            </S.Ul>
          </S.Li>
          <S.Li>
            Foi realizado o cálculo do percentual da população entre 0 e 4 anos conforme a seguinte fórmula:
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
              ¹ Brasil, Ministério da Saúde. Rede Interagencial de Informações para Saúde (RIPSA). Proporção de menores 
              de 5 anos de idade na população - A. 13 -. 2012. [Internet] [citado 15 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://fichas.ripsa.org.br/2012/a-14/?l=pt_BR."
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://fichas.ripsa.org.br/2012/a-14/?l=pt_BR.
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ² Brasil, Ministério da Saúde. População Residente - Estudo de Estimativas Populacionais por Município 
              2000-2015 - Brasil [Internet][citado 15 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://tabnet.datasus.gov.br/cgi/tabcgi.exe?novapop/cnv/popbr.def"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://tabnet.datasus.gov.br/cgi/tabcgi.exe?novapop/cnv/popbr.def
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ³ Brasil, Ministério da Saúde. Rede Interagencial de Informações para Saúde (RIPSA). A. 9 Taxa Bruta de 
              Mortalidade. Ficha de qualificação. Ministério da Saúde [Internet][citado 15 de outubro de 2021]. 
              Disponível em:{' '}
              <a
                href="https://tabnet.datasus.gov.br/cgi/idb2000/fqa09.htm"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://tabnet.datasus.gov.br/cgi/idb2000/fqa09.htm
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁴ de Oliveira, Antônio Tadeu Ribeiro. Sistemas de estatísticas vitais no Brasil: avanços, perspectivas e 
              desafios. IBGE, Coordenação de População e Indicadores Sociais. 2018; ISBN:978-85-240-4459-5{' '}
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁵ Oliveira LAP de, Simões CC da S. O IBGE e as pesquisas populacionais. Rev Bras Estud Popul. 2005;22(2):291–302.{' '}
              <a
                href="https://doi.org/10.1590/S0102-30982005000200007"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://doi.org/10.1590/S0102-30982005000200007
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁶ Jorge MHP de M, Laurenti R, Gotlieb SLD. Análise da qualidade das estatísticas vitais brasileiras: a 
              experiência de implantação do SIM e do SINASC. Cien Saude Colet. 2007;12(3):643–54.{' '}
              <a
                href="https://doi.org/10.1590/S1413-81232007000300014"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://doi.org/10.1590/S1413-81232007000300014
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁷ de Oliveira, Antônio Tadeu Ribeiro; de Oliveira, Luiz Antonio Pinto. Reflexões sobre os deslocamentos 
              populacionais no Brasil [Internet]. IBGE, Estudos e análises. 2011. ISBN:978-85-240-4191-4{' '}
            </S.ReferenciaLink>
          </div>
        </div>
      </Section>
    </div>
  );
};
