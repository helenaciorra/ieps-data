import React from 'react';
import Section from './componentes/Section';

import * as S from './styles';

import formulaImage from './img/06.png';
import { textColor } from '../../../../../constants/theme';

export const LeitosUtiSus = () => {
  return (
    <div>
      <div style={{ maxWidth: '600px' }}>
        <S.PageTitle>
          Leitos de UTI SUS (por 100.000 Hab.)
        </S.PageTitle>
      </div>

      <Section title={'Indicador'}>
        <S.Paragraphy>
          Número de leitos de Unidades de Terapia Intensiva (UTI) do SUS, por 100.000 habitantes, por localidade geográfica e ano.
        </S.Paragraphy>
      </Section>

      <Section title={'Interpretação'}>
        <S.Paragraphy>
          Mede a disponibilidade de leitos hospitalares de UTI conveniados ou contratados pelo SUS para a população residente 
          de determinada localidade geográfica. Logo, quanto maior a quantidade de leitos (por 100.000 habitantes), maior 
          o potencial de oferta hospitalar de serviços de saúde e de acesso a esses serviços. Entretanto, é importante 
          salientar que a quantidade de leitos SUS ofertada não deve ser analisada ao nível municipal, e sim em níveis mais 
          agregados de região e macrorregião de saúde. Sendo assim, é possível que existam municípios sem leitos SUS 
          inseridos em regiões de saúde que provêm essa oferta.
        </S.Paragraphy>
      </Section>

      <Section title={'Usos'}>
        <S.Paragraphy>
          Este indicador permite analisar variações geográficas e temporais da oferta da quantidade de leitos (nesse caso, 
          leitos de UTI do SUS), conforme consta na documentação da RIPSA¹, identificando situações de desigualdade e 
          tendências que demandem ações e estudos específicos. Também é possível, segundo a RIPSA¹, que o indicador 
          subside processos de planejamento, gestão e avaliação de políticas públicas voltadas para a assistência 
          médico-hospitalar de responsabilidade do SUS. Ressalta-se que não é necessário haver leitos em todos os municípios, 
          de forma que o indicador deve ser analisado ao nível de região e macrorregião de saúde.
        </S.Paragraphy>
      </Section>

      <Section title={'Limitações'}>
        <S.Paragraphy>
          Um leito complementar exibido como Leito não-SUS pode tratar-se de leito utilizado no âmbito do SUS, mas que 
          não foi habilitado pelo Ministério da Saúde (isto pode ocorrer em hospitais públicos e privados), segundo a 
          Documentação Oficial do CNES². Sendo assim, é possível que alguns leitos SUS não estejam sendo contabilizados 
          como tais. Sobre a confiabilidade do número de leitos, Rocha et al.³ documentaram, por meio de survey com 2.777 
          hospitais, que os dados do CNES apresentam uma boa confiabilidade quanto ao status de funcionamento, o 
          quantitativo de equipes e as coordenadas geográficas. Entretanto, os dados referentes ao número de leitos 
          cadastrados não apresentam boa confiabilidade – no caso do estudo supracitado, o CNES continha o número correto 
          de leitos de somente 44% dos hospitais visitados. Além disso, os serviços de saúde devem atualizar seus dados 
          no CNES a cada seis meses. Caso esse prazo não seja cumprido, os dados serão considerados desativados, segundo 
          a Portaria nº 118/2014⁴. Não foram encontradas informações acerca da cobertura de estabelecimentos que atendem 
          ao SUS no CNES. Portanto, não é possível ter certeza sobre o quanto da variação encontrada nos dados pode ser 
          atribuída a uma melhora ou piora do cadastro e quanto provêm de uma real mudança no número de leitos.
        </S.Paragraphy>
      </Section>

      <Section title={'Fonte dos Dados'}>
        <S.Paragraphy>
          Cadastro Nacional de Estabelecimentos de Saúde (CNES), base de leitos (LT), TabNet/DATASUS.
        </S.Paragraphy>
      </Section>

      <Section title="Link">
        Leitos -{' '}
        <S.Link
          target="_blank"
          href="sftp://ftp.datasus.gov.br/dissemin/publicos/CNES/200508_/Dados/LT"
        >
          sftp://ftp.datasus.gov.br/dissemin/publicos/CNES/200508_/Dados/LT
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
            Utilizou-se a variável dos microdados que contém a quantidade de leitos do SUS (“QT_SUS”), somada por 
            município-ano, com informações referentes ao mês de dezembro, e dados de população municipal obtidos do TabNet/DATASUS.
          </S.Li>
          <S.Li>
            Utilizou-se a variável dos microdados 5 que contém a quantidade de leitos do SUS (“ QT_SUS”), somada por unidade 
            geográfica-ano, com informações referentes ao mês de dezembro, e dados de população municipal obtidos do TabNet/DATASUS.
            <S.Ul>
              <S.Li>61 - UTI Adulto</S.Li>
              <S.Li>62 - UTI Infantil</S.Li>
              <S.Li>63 - UTI Neonatal</S.Li>
              <S.Li>74 - UTI Adulto Tipo I</S.Li>
              <S.Li>75 - UTI Adulto Tipo II</S.Li>
              <S.Li>76 - UTI Adulto Tipo III</S.Li>
              <S.Li>77 - UTI Pediátrica Tipo I</S.Li>
              <S.Li>78 - UTI Pediátrica Tipo II</S.Li>
              <S.Li>79 - UTI Pediátrica Tipo III</S.Li>
              <S.Li>80 - UTI Neonatal Tipo I</S.Li>
              <S.Li>81 - UTI Neonatal Tipo II</S.Li>
              <S.Li>82 - UTI Neonatal Tipo III</S.Li>
              <S.Li>83 - UTI de Queimados</S.Li>
              <S.Li>85 - UTI Coronariana Tipo II</S.Li>
              <S.Li>86 - UTI Coronariana Tipo III</S.Li>
            </S.Ul>
          </S.Li>
          <S.Li>
            Foi realizado o cálculo da taxa por 100.000 habitantes conforme a seguinte fórmula:
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
              ¹ Brasil, Ministério da Saúde. Número de leitos hospitalares por habitante – CNES/MS – E.3 
              [Internet].[citado 08 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://tabnet.datasus.gov.br/tabdata/LivroIDB/2edrev/e03.pdf"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://tabnet.datasus.gov.br/tabdata/LivroIDB/2edrev/e03.pdf
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ² Wiki, Saúde. Página principal Cadastro Nacional de Estabelecimentos de Saúde. [Internet].[citado 08 de 
              outubro de 2021]. Disponível em:{' '}
              <a
                href="https://wiki.saude.gov.br/cnes/index.php/P%C3%A1gina_principal#Leitos"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://wiki.saude.gov.br/cnes/index.php/P%C3%A1gina_principal#Leitos
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ³ Rocha TAH, Da Silva NC, Barbosa ACQ, Amaral PV, Thumé E, Rocha JV, et al. Cadastro nacional de 
              estabelecimentos de saúde: Evidências sobre a confiabilidade dos dados. Ciência e Saúde Coletiva. 2018;23(1):229–40.{' '}
              <a
                href="https://doi.org/10.1590/1413-81232018231.16672015"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://doi.org/10.1590/1413-81232018231.16672015
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁴ Brasil, Ministério da Saúde. Portaria 118, 18 de fevereiro de 2014 [Internet]. [citado 08 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://bvsms.saude.gov.br/bvs/saudelegis/sas/2014/prt0118_18_02_2014.html"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://bvsms.saude.gov.br/bvs/saudelegis/sas/2014/prt0118_18_02_2014.html
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁵ CNES. Downloads da Documentação Serviços Redes Sociais Sobre o site. Tabelas de Domínio. 2021;10–1. [Internet].[citado 08 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://cnes.datasus.gov.br/pages/downloads/documentacao.jsp"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://cnes.datasus.gov.br/pages/downloads/documentacao.jsp
              </a>
            </S.ReferenciaLink>
          </div>
        </div>
      </Section>
    </div>
  );
};
