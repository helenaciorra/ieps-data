import React from 'react';
import Section from './componentes/Section';

import * as S from './styles';

import formulaImage from './img/02.png';
import { textColor } from '../../../../../constants/theme';

export type GraphLevelContentProps = {
  title: string,
  content?: string | null,
};

export const MortalidadeBrutaPor100000Hab = () => {
  return (
    <div>
      <div style={{ maxWidth: '600px' }}>
        <S.PageTitle>
          {'Mortalidade Infantil (por 1.000 Nascidos Vivos) 2'}
        </S.PageTitle>
      </div>

      <Section title={'Indicador'}>
        <S.Paragraphy>
          {
            'Taxa de mortalidade infantil (óbitos de crianças menores de 1 ano) por 1.000 nascidos vivos por UF e ano, dada pela soma dos óbitos ocorridos nos períodos neonatal precoce (0-6 dias de vida), neonatal tardio (7-27 dias) e pós-neonatal (28-364 dias).'
          }
        </S.Paragraphy>
      </Section>

      <Section title={'Interpretação'}>
        <S.Paragraphy>
          {
            'Estima o risco de um nascido vivo morrer durante o seu primeiro ano de vida, conforme especificado pela RIPSA¹. Costuma-se classificar o valor da taxa como alto (50 por mil ou mais), médio (20 a 49) e baixo (menos de 20), parâmetros estes que necessitam revisão periódica, em função de mudanças no perfil epidemiológico. Altas taxas de mortalidade infantil refletem, de maneira geral, baixos níveis de saúde, de desenvolvimento socioeconômico e de condições de vida. Contudo, taxas reduzidas podem encobrir más condições de vida em segmentos sociais específicos.'
          }
        </S.Paragraphy>
      </Section>

      <Section title={'Usos'}>
        <S.Paragraphy>
          {
            'Este indicador permite analisar variações populacionais, entre UF e temporais da mortalidade infantil, identificando situações de desigualdade e tendências que demandem ações e estudos específicos, tal como levantado pelo TabNet/DATASUS².'
          }
        </S.Paragraphy>
      </Section>

      <Section title={'Limitações'}>
        <S.Paragraphy>
          {
            'Conforme consta na documentação do TabNet/DATASUS², calcular a taxa de forma direta, a partir de dados derivados de sistemas de registro contínuo, pode exigir correções da subenumeração de óbitos infantis e de nascidos vivos. Nesse sentido, Almeida³ destaca questões relativas à definição dos eventos, como nascido vivo, nascido morto, óbito fetal e aborto⁴, problemas com a operacionalização dos sistemas por parte das Secretarias de Saúde (que são responsáveis pelo registro das informações e envio ao MS) e falta de registro nas fontes de informações oficiais (como hospitais, cartórios, etc.)⁵.'
          }
        </S.Paragraphy>
        <S.Paragraphy>
          {
            'Além disso, definir mortalidade infantil como todos os óbitos menores de um ano de vida não permite enxergar tendências de mudança nos componentes da mortalidade infantil, isto é, não é possível distinguir tendências específicas como, por exemplo, uma concentração dos óbitos nos primeiros dias de vida (período neonatal precoce). Essa característica implica numa valorização dos indicadores de mortalidade infantil mais granulares como neonatal e perinatal, que refletem melhor a atenção pré-natal, ao parto e o recém-nascido. Existe uma limitação adicional relacionada à mortalidade neonatal precoce (entre 0 e 6 dias completos) na medida em que ela pode estar subestimada pela exclusão de óbitos declarados como natimortos, mas ocorridos, na verdade, pouco após o parto.'
          }
        </S.Paragraphy>
      </Section>
      <Section title={'Taxa de mortalidade infantil'}>
        <S.Paragraphy>
          {
            'Um dos métodos de correção de indicadores de mortalidade infantil, utilizando dados do Ministério da Saúde – Sistema de Informação de Mortalidade (SIM) e Sistema de Informações de Nascidos Vivos (SINASC) – ou dados de eventos vitais registrados em cartório, baseia-se em buscas ativas de óbitos e nascimentos⁶. O TabNet/DATASUS disponibiliza, para o período 2000-2013, estimativas de óbito por idade e sexo corrigidas pela busca ativa. Contudo, a última Busca Ativa foi realizada em 2014, com o objetivo de captar óbitos ocorridos em 2012, em uma amostra de municípios das regiões Norte e Nordeste, e dos estados de Minas Gerais, Mato Grosso e Goiás⁷.'
          }
        </S.Paragraphy>
        <S.Paragraphy>
          {
            'Tendo em vista as limitações acima mencionadas,  optou-se por disponibilizar os dados de Mortalidade Infantil apenas ao nível estadual, utilizando dados da série de Projeções da População (revisão de 2018) do Instituto Brasileiro de Geografia e Estatística (IBGE)⁸.'
          }
        </S.Paragraphy>
        <S.Paragraphy>
          {
            'O IBGE elabora projeções populacionais para diferentes níveis geográficos do Brasil utilizando o método das componentes demográficas desde 1975. Durante períodos intercensitários, as projeções são a principal fonte de informação populacional disponível, fornecendo ainda indicadores demográficos prospectivos. Em 2018, foi lançada a última revisão da Projeção, incorporando resultados do Censo de 2010 e informações sobre componentes do crescimento demográfico à revisão de 2013. Um dos indicadores presentes na projeção é a Taxa de Mortalidade Infantil.'
          }
        </S.Paragraphy>
      </Section>
      <Section title={'Fonte dos Dados'}>
        <S.Paragraphy>
          {'Instituto Brasileiro de Geografia e Estatística (IBGE).'}
        </S.Paragraphy>
      </Section>
      <Section title="Link">
        <S.Link
          target="_blank"
          href="https://www.ibge.gov.br/estatisticas/sociais/populacao/9109-projecao-da-populacao.html?=&t=downloads"
        >
          {
            'https://www.ibge.gov.br/estatisticas/sociais/populacao/9109-projecao-da-populacao.html?=&t=downloads'
          }
        </S.Link>
      </Section>
      <Section title="Período disponibilizado">
        <S.Paragraphy>{'2010 a 2023.'}</S.Paragraphy>
      </Section>
      <Section title="NÍVEIS GEOGRÁFICOS DISPONIBILIZADOS">
        <S.Ul>
          <S.Li>Brasil</S.Li>
          <S.Li>Estado</S.Li>
        </S.Ul>
      </Section>
      <Section title="Fórmula de Cálculo">
        <S.Ol>
          <S.Li>
            {
              'Utilizou-se os nascimentos ano a ano, aplicando-se as taxas específicas de fecundidade a mulheres de 15 a 49 anos projetadas (segundo o Relatório Metodológico8  da revisão de 2018).'
            }
          </S.Li>
          <S.Li>
            {
              'Após as devidas estimações e correções, foi realizado o cálculo da taxa de mortalidade infantil conforme a seguinte fórmula:'
            }
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
              ¹ Brasil, Ministério da Saúde. C.1 Taxa de mortalidade infantil
              [Internet]. [citado 07 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://tabnet.datasus.gov.br/cgi/idb2012/c01b.htm"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://tabnet.datasus.gov.br/cgi/idb2012/c01b.htm
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ² Brasil, Ministério da Saúde. DATASUS. Indicadores de
              Mortalidade: Taxa de Mortalidade Infantil - Ficha de qualificação
              [Internet] [citado 07 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://tabnet.datasus.gov.br/cgi/idb2000/fqc01.htm"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://tabnet.datasus.gov.br/cgi/idb2000/fqc01.htm
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ³ Almeida W da S de. Estimação da mortalidade infantil nos
              municípios brasileiros. Fiocruz. 2016 [Tese de Doutorado].
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁴ OPAS. Salas de Situação em Saúde: [Internet]. [citado 07 de
              outubro de 2021]. Disponível em:{' '}
              <a
                href="https://www.paho.org/bra/index.php?option=com_docman&view=download&alias=958-salas-situacao-em-saude-compartilhando-as-experiencias-do-brasil-8&category_slug=informacao-e-analise-saude-096&Itemid=965"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://www.paho.org/bra/index.php?option=com_docman&view=download&alias=958-salas-situacao-em-saude-compartilhando-as-experiencias-do-brasil-8&category_slug=informacao-e-analise-saude-096&Itemid=965
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁵ De Frias PG, Pereira PMH, De Andrade CLT, Szwarcwald CL. Sistema
              de Informações sobre Mortalidade: Estudo de caso em municípios com
              precariedade dos dados. Cad. Saúde Pública. 2008;24(10):2257–66.{' '}
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁶ Szwarcwald CL, Morais Neto OL De, Frias PG De, Souza Jr. PRB De,
              Cortez-Escalante JJ, Lima R, et al. Busca ativa de óbitos e
              nascimentos no Nordeste e na Amazônia Legal: Estimação da
              mortalidade infantil nos municípios brasileiros. Saúde Brasil 2010
              uma análise da situação saúde e evidências selecionadas impacto
              ações vigilância em saúde 2011;(2):99–114.{' '}
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁷ Almeida W da S, Szwarcwald CL. Adequação das informações de
              mortalidade e correção dos óbitos informados a partir da Pesquisa
              de Busca Ativa. Ciência e Saúde Coletiva. 2017;22(10):3193–203.{' '}
              <a
                href="https://doi.org/10.1590/1413-812320172210.12002016"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://doi.org/10.1590/1413-812320172210.12002016
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁷ Almeida W da S, Szwarcwald CL. Adequação das informações de
              mortalidade e correção dos óbitos informados a partir da Pesquisa
              de Busca Ativa. Ciência e Saúde Coletiva. 2017;22(10):3193–203.{' '}
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁸ IBGE. Projeções da população: Brasil e unidades da Federação,
              revisão 2018. Vol. 40. 2018..{' '}
            </S.ReferenciaLink>
          </div>
        </div>
      </Section>
    </div>
  );
};
