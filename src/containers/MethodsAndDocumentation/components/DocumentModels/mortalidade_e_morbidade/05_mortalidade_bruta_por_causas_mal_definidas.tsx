import React from 'react';
import Section from './componentes/Section';

import * as S from './styles';

import formulaImage from './img/05.png';
import { textColor } from '../../../../../constants/theme';

export type GraphLevelContentProps = {
  title: string,
  content?: string | null,
};

export const MortalidadeBrutaPorCausasMalDefinidas = () => {
  return (
    <div>
      <div style={{ maxWidth: '600px' }}>
        <S.PageTitle>
          Mortalidade Bruta por Causas Mal Definidas (%)
        </S.PageTitle>
      </div>

      <Section title={'Indicador'}>
        <S.Paragraphy>
          Permite avaliar a qualidade das  informações sobre causa do óbito.
        </S.Paragraphy>
      </Section>

      <Section title={'Interpretação'}>
        <S.Paragraphy>
          Este indicador permite analisar variações geográficas e temporais no percentual de óbitos por causas mal 
          definidas. É usado para avaliar a qualidade geral dos dados de mortalidade, bem como das condições de 
          prestação de serviços de saúde¹.
        </S.Paragraphy>
      </Section>

      <Section title={'Usos'}>
        <S.Paragraphy>
          Este indicador permite analisar variações geográficas e temporais no percentual de óbitos por causas mal 
          definidas. É usado para avaliar a qualidade geral dos dados de mortalidade, bem como das condições de 
          prestação de serviços de saúde¹.
        </S.Paragraphy>
      </Section>

      <Section title={'Limitações'}>
        <S.Paragraphy>
          O uso de dados de mortalidade derivados de sistemas de registro contínuo está condicionado a correções, 
          devido à subenumeração de óbitos, frequente em áreas menos desenvolvidas². Além disso, a proporção de 
          causas mal definidas tende a estar subestimada em áreas com baixa cobertura de informação sobre mortalidade¹.
        </S.Paragraphy>
      </Section>

      <Section title={'Óbitos por causas mal definidas'}>
        <S.Paragraphy>
          Um dos campos a serem preenchidos em uma declaração de óbito (DO) é a causa básica do óbito, definida como 
          “a doença ou lesão que iniciou a cadeia de acontecimentos que conduziram diretamente à morte ou as 
          circunstâncias do acidente ou violência que produziram a lesão fatal”³. 
        </S.Paragraphy>
        <S.Paragraphy>
          Visto que dados sobre causas de óbito são fundamentais para se conhecer o perfil epidemiológico da 
          população⁴, e que, segundo recomendações do Ministério da Saúde, é desejável que o percentual de óbitos 
          por CMD não passe de 10%⁵, um alto percentual de óbitos com CMD pode comprometer a qualidade dessas 
          informações. Além disso, apesar do aumento na cobertura e qualidade dos dados do SIM nos últimos anos, 
          ainda existe desigualdade na qualidade das informações sobre causas de óbito entre as 
          regiões do Brasil⁴,⁶-⁸.
        </S.Paragraphy>
        <S.Paragraphy>
          {`Existem definições distintas em relação a quais causas constituem as CMD. 
          Considera-se, aqui, as correspondentes ao Capítulo XVIII da CID-10: "Sintomas, Sinais e Achados Anormais 
          de Exames Clínicos e de Laboratório Não Classificados em Outra Parte" (códigos R00-R99)”. Esta definição 
          corresponde à Lista 3, dentre as disponíveis para download pelo TabNet, além de também aparecer nas 
          definições da OMS⁹.`}
        </S.Paragraphy>
        <S.Paragraphy>
          Como forma de lidar com este problema, além da melhora na notificação dos 
          óbitos e cobertura dos dados do SIM, existem iniciativas que buscam investigar os óbitos já registrados 
          por CMD e com isso reclassificar a causa básica de óbito para uma causa bem definida. Um exemplo é a 
          utilização de formulários preconizados para a investigação da causa básica de óbito e a utilização de 
          autópsias verbais, como documentado por Cunha⁴ em uma investigação realizada em 27 municípios do Estado 
          da Bahia.
        </S.Paragraphy>
        <S.Paragraphy>
          Outro exemplo de iniciativa de reclassificação internacional é feita pelo 
          “Carga Global de Doenças” (Global Burden of Diseases, GBD), um estudo de mortalidade por inúmeras causas e 
          fatores de risco em diversos países do mundo realizada pelo Instituto para Métricas de Saúde e Avaliação 
          (Institute for Health Metrics and Evaluation, IHME).  A edição de 2015¹⁰ do projeto inclui a definição 
          dos chamados “códigos lixo” (garbage codes). Entram nessa categoria óbitos onde a causa básica apontada 
          não seria suficiente para levar ao óbito (ex: dor nas costas), além das CMD (considerando as causas R00-R99, 
          à exceção da R95). Os métodos de redistribuição são baseados num algoritmo proposto na edição de 2013¹¹ do projeto.
        </S.Paragraphy>
      </Section>

      <Section title={'Implicações'}>
        <S.Paragraphy>
          É desejável que o número de óbitos com causa básica definida como CMD seja reduzido ao mínimo possível. 
          É importante destacar que, quando há uma melhora no reporte de causas básicas, isso pode gerar uma falsa 
          impressão de piora nos indicadores de mortalidade para certos tipos de doença, principalmente em comparações temporais.
        </S.Paragraphy>
      </Section>

      <Section title={'Fonte dos Dados'}>
        <S.Paragraphy>
          Sistema de Informações sobre Mortalidade (SIM), TabNet/DATASUS.
        </S.Paragraphy>
      </Section>
      <Section title="Link">
        Mortalidade -{' '}
        <S.Link
          target="_blank"
          href="sftp://ftp.datasus.gov.br/dissemin/publicos/SIM/CID10/DORES/"
        >
          sftp://ftp.datasus.gov.br/dissemin/publicos/SIM/CID10/DORES/
        </S.Link>
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
            Utilizou-se uma lista de CMD com base na definição da OMS⁸. As  informações individuais de óbitos 
            disponibilizadas nos microdados foram somadas ao nível de município-ano. Depois, foi dividido o número 
            de óbitos por causas mal definidas de residentes pelo número total de óbitos por residentes.
          </S.Li>
          <S.Li>
            Foi realizado o cálculo da taxa conforme a seguinte fórmula:
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
            Verificou-se posteriormente que a base resultante é compatível com os números de óbitos totais 
            por município disponibilizados pelo TabNet/DATASUS.
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
              ¹ Brasil, Ministério da Saúde. Indicadores de mortalidade C . 8 Mortalidade proporcional por causas mal 
              definidas. [Internet] [citado 11 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://tabnet.datasus.gov.br/cgi/idb2000/fqc08.htm"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://tabnet.datasus.gov.br/cgi/idb2000/fqc08.htm
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ² Brasil, Ministério da Saúde. Rede Interagencial de Informações para Saúde (RIPSA). A.9 Taxa Bruta de 
              Mortalidade. Ficha de qualificação [Internet] [citado 11 de outubro de 2021].{' '}
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ³ Brasil, Ministério da Saúde. A Declaração de Óbito documento [Internet] 
              [citado 13 de outubro de 2021]. Disponível em:
              <a
                href="https://portalarquivos.saude.gov.br/images/pdf/2015/agosto/14/Declaracao-de-Obito-WEB.pdf"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://portalarquivos.saude.gov.br/images/pdf/2015/agosto/14/Declaracao-de-Obito-WEB.pdf
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁴ Cunha CC da, Vasconcelos AMN, Souza M de FM de, França E. Avaliação da investigação de óbitos por 
              causas mal definidas no estado da Bahia, Brasil, em 2010. Cien Saude Colet. 2019;24(5):1831–44. 
              doi: 10.1590/1413-81232018245.14852017.{' '}
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁵ Brasil, Ministério da Saúde. Manual para Investigação do Óbito com Causa Mal Definida. 
              Vol. Série A. N, Book. 2009.{' '}
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁶ França E, De Abreu DX, Rao C, Lopez AD. Evaluation of cause-of-death statistics for Brazil, 2002-2004. 
              Int J Epidemiol. 2008;37(4):891–901. doi:10.1093/ije/dyn121.{' '}
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁷ De Lima EEC, Queiroz BL. Evolution of the deaths registry system in brazil: Associations with changes 
              in the mortality profile, under-registration of death counts, And ill-defined causes of death | A evolução 
              do sistema de registro de mortalidade no Brasil: Mudanças no perfil de. Cad Saude Publica. 2014;30(8):1721–30.{' '}
              <a
                href="https://doi.org/10.1590/0102-311X00131113"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://doi.org/10.1590/0102-311X00131113
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁸ de Frias PG, Pereira PMH, de Andrade CLT, de Lira PIC, Szwarcwald CL. Evaluation of data on mortality 
              and live births in Pernambuco State, Brazil. Cad Saude Publica. 2010;26(4):671–81.{' '}
              <a
                href="https://doi.org/10.1590/S0102-311X2010000400010"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://doi.org/10.1590/S0102-311X2010000400010
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁹ Observatory GH, Observatory GH. Proportion of certified deaths due to ill-defined and unknown conditions. 
              2021. [Internet] [citado 11 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://www.who.int/data/gho/indicator-metadata-registry/imr-details/1215"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://www.who.int/data/gho/indicator-metadata-registry/imr-details/1215
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ¹⁰ Global, regional, and national life expectancy, all-cause mortality, and cause-specific mortality for 
              249 causes of death, 1980–2015: a systematic analysis for the Global Burden of Disease Study 2015 
              (The Lancet (2016) 33(10053) (1459–1544)(S0140673616310121)(10.1016/S0140-6736(16)31012-1)). 
              Vol. 389, The Lancet. 2017. p. e1. doi:{' '}
              <a
                href="https://doi.org/10.1016/S0140-6736(16)31012-1"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://doi.org/10.1016/S0140-6736(16)31012-1
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ¹¹ Naghavi M, Makela S, Foreman K, O’Brien J, Pourmalek F, Lozano R. Algorithms for enhancing public 
              health utility of national causes-of-death data. Popul Health Metr. 2010;8(1):1–14.{' '}
            </S.ReferenciaLink>
          </div>
        </div>
      </Section>
    </div>
  );
};
