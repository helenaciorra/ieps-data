import React from 'react';
import Section from './componentes/Section';

import * as S from './styles';

import formulaImage from './img/03.png';
import { textColor } from '../../../../../constants/theme';

export type GraphLevelContentProps = {
  title: string,
  content?: string | null,
};

export const MortalidadeBrutaPorCausasEvitaveisPor100000Hab = () => {
  return (
    <div>
      <div style={{ maxWidth: '600px' }}>
        <S.PageTitle>
          Mortalidade Bruta por Causas Evitáveis (por 100.000 Hab.)
        </S.PageTitle>
      </div>

      <Section title={'Indicador'}>
        <S.Paragraphy>
          Taxa de óbitos por causas evitáveis por 100.000 habitantes, considerando o local de residência.
        </S.Paragraphy>
      </Section>

      <Section title={'Interpretação'}>
        <S.Paragraphy>
          Expressa a intensidade com a qual a mortalidade atua sobre uma determinada população. Causas evitáveis 
          representam mortesque poderiam ser evitadas por ações de serviços de saúde. Por se tratar de uma taxa bruta, 
          sem ajuste, a sua utilidade para comparações com outras unidades geográficas e temporais é limitada, 
          em decorrência de diferenças na estrutura etária da população.
        </S.Paragraphy>
      </Section>

      <Section title={'Usos'}>
        <S.Paragraphy>
          Este indicador analisa variações geográficas e temporais da mortalidade por causas evitáveis. Além disso, 
          possibilita o cálculo do crescimento vegetativo ou natural da população, subtraindo-se, da taxa bruta de 
          natalidade, a taxa bruta de mortalidade¹.
        </S.Paragraphy>
      </Section>

      <Section title={'Limitações'}>
        <S.Paragraphy>
          O uso de dados de mortalidade derivados de sistemas de registro contínuo está condicionado a correções, 
          devido à subenumeração de óbitos, frequente em áreas menos desenvolvidas². É possível também que haja 
          problemas na informação de causas de morte, com CIDs não informadas ou mal definidas ou inespecíficas. 
          Além disso, trata-se de taxas brutas, sem padronização etária nem de sexo. Como a taxa é fortemente 
          influenciada pela estrutura etária da população, a análise comparada entre populações de composição 
          distinta exige padronização das estruturas etárias. Conforme especificado pelo TabNet/DATASUS¹, somente as 
          taxas padronizadas devem ser utilizadas para análises comparativas.
        </S.Paragraphy>
      </Section>
      <Section title={'Qualidade dos dados do SIM'}>
        <S.Paragraphy>
          Estimativas referentes ao número de óbitos estão sujeitas a limitações na cobertura do Sistema de 
          Informações sobre Mortalidade (SIM). Estas limitações, segundo IBGE³, na maioria dos casos estão relacionadas a: 
        </S.Paragraphy>
        <S.Paragraphy>
          “(...) exclusão social/vulnerabilidade e as largas distâncias. Seriam indivíduos com dificuldades de acesso 
          devido às suas condições sociais ou por viverem longe dos serviços de saúde. Por outra parte, o 
          problema no fluxo de informações ajuda a explicar as subnotificações, dado que há evidências que uma 
          parcela de eventos ocorridos, para os quais DOs e DNs foram emitidas nas unidades de saúde, é registrada 
          em Cartório sem, contudo, serem consolidadas nos Sistemas de Informação do Ministério.” 
        </S.Paragraphy>
        <S.Paragraphy>
          De forma semelhante, segundo Almeida⁴, a subenumeração de óbitos diz respeito, principalmente, à ocorrência 
          de sepultamentos sem a exigência da Declaração de Óbito (DO), sendo associada à pobreza e prevalente 
          nos municípios rurais e de pequeno porte populacional. A esse respeito, o IBGE realizou um cálculo para 
          estimar a cobertura do SIM no período de 2000-2011, dividindo o número de óbitos notificados ao SIM pelo 
          número estimado pelo IBGE, na população residente em determinado espaço geográfico, no ano considerado. 
          Os resultados indicam que, a despeito de uma melhora progressiva na cobertura durante o período analisado, 
          as regiões Norte e Nordeste ainda possuem uma cobertura mais baixa que as outras regiões, ambas abaixo de 90%⁴. 
          Para o ano de 2015, estimativas realizadas por Trindade, Costa e Oliveira³ apontam que o indicador de cobertura 
          do SIM para o Brasil foi de 97,2% para o Brasil (mínimo de 91,2% no Amapá). 
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
          {
            'sftp://ftp.datasus.gov.br/dissemin/publicos/SIM/CID10/DORES/'
          }
        </S.Link>
        População -{' '}
        <S.Link
          target="_blank"
          href="https://tabnet.datasus.gov.br/cgi/deftohtm.exe?popsvs/cnv/popbr.def"
        >
          {
            'https://tabnet.datasus.gov.br/cgi/deftohtm.exe?popsvs/cnv/popbr.def'
          }
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
            Utilizou-se uma classificação de causas evitáveis baseada na proposta por Nolte e McKee⁸-⁹. As informações 
            individuais de óbitos disponibilizadas nos microdados foram somadas ao nível de município-ano, e dados de 
            população municipal foram obtidos do TabNet/DATASUS.
          </S.Li>
          <S.Li>
            Foi realizado o cálculo da taxa por 100.000 habitantes conforme a seguinte fórmula:
            <div style={{ textAlign: 'center' }}>
              <img src={formulaImage} alt="Fórmula" />
            </div>
            <p>em que:</p>
            <S.Ul>
              <S.Li>c: corresponde à causa;</S.Li>
              <S.Li>g: corresponde à unidade geográfica;</S.Li>
              <S.Li>a: corresponde ao ano.</S.Li>
            </S.Ul>
          </S.Li>
          <S.Li style={{marginTop: 12}}>
            Verificou-se posteriormente que a base resultante é compatível com os números de óbitos totais por 
            município disponibilizados pelo TabNet/DATASUS.
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
              ¹ Brasil, Ministério da Saúde. Taxa Bruta de Mortalidade [Internet]. 
              [citado 07 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://tabnet.datasus.gov.br/tabdata/LivroIDB/2edrev/a10.pdf"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://tabnet.datasus.gov.br/tabdata/LivroIDB/2edrev/a10.pdf
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ² Brasil, Ministério da Saúde. Rede Interagencial de Informações para Saúde (RIPSA). A.9 Taxa Bruta de 
              Mortalidade. Ficha de qualificação [Internet] [citado 07 de outubro de 2021]  Disponível em:{' '}
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
              ³ de Oliveira, Antônio Tadeu Ribeiro. Sistemas de estatísticas vitais no Brasil: avanços, perspectivas e 
              desafios. IBGE, Coordenação de População e Indicadores Sociais. 2018; ISBN:978-85-240-4459-5.
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁴ Almeida W da S de. Estimação da mortalidade infantil nos municípios brasileiros. 
              Fiocruz. 2016 [Tese de Doutorado].{' '}
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁵ Brasil, Ministério da Saúde. Mortalidade proporcional por causas mal definidas. 
              [Internet].[citado 07 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://tabnet.datasus.gov.br/tabdata/LivroIDB/2edrev/c05.pdf"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://tabnet.datasus.gov.br/tabdata/LivroIDB/2edrev/c05.pdf
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁶ Observatory GH, Observatory GH. Proportion of certified deaths due to ill-defined and unknown conditions. 
              2021;9–10. [Internet].[citado 07 de outubro de 2021]. Disponível em:{' '}
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
              ⁷ França EB. Garbage codes assigned as cause-of-death in health statistics. 
              Rev Bras Epidemiol. 2019;22(Suppl 3).{' '}
              <a
                href="https://doi.org/10.1590/1980-549720190001.supl.3"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://doi.org/10.1590/1980-549720190001.supl.3
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁸ Nolte E, McKee M. Measuring the health of nations: Analysis of mortality amenable 
              to health care. Br Med J. 2003;327(7424):1129–32.
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁹ Nolte E, McKee M. Variations in amenable mortality-Trends in 16 high-income nations. 
              Health Policy (New York). 2011;103(1):47–52.
            </S.ReferenciaLink>
          </div>
        </div>
      </Section>
    </div>
  );
};
