import React from 'react';
import Section from './componentes/Section';

import * as S from './styles';

import formulaImage from './img/01.png';
import { textColor } from '../../../../../constants/theme';

export const MedicosUnicamenteIdentificadosPorLocalidadePor1000Hab = () => {
  return (
    <div>
      <div style={{ maxWidth: '600px' }}>
        <S.PageTitle>
          Médicos (por 1.000 Hab.)
        </S.PageTitle>
      </div>

      <Section title={'Indicador'}>
        <S.Paragraphy>
          Número de médicos unicamente identificados, por 1.000 habitantes, por localidade geográfica e ano.
        </S.Paragraphy>
      </Section>

      <Section title={'Interpretação'}>
        <S.Paragraphy>
          Mede a disponibilidade de recursos humanos de saúde — médicos, nesse caso — para a população residente de 
          determinada localidade geográfica. Logo, quanto maior a quantidade de médicos (por 1.000 habitantes), maior 
          o potencial de oferta de serviços de saúde e de acesso a esses serviços.
        </S.Paragraphy>
      </Section>

      <Section title={'Usos'}>
        <S.Paragraphy>
          Este indicador permite a verificação, por território, da disponibilidade de médicos, com a indicação de 
          áreas com maior e menor cobertura desses profissionais, conforme especificado pelo IDSUS¹ para indicador 
          semelhante de cobertura. Além disso, possibilita o exame da distribuição de médicos do ponto de vista 
          geográfico e temporal, com a indicação de eventuais desigualdades e tendências passíveis de estudo e 
          aprofundamento. Por fim, fornece dados para a elaboração e avaliação de políticas públicas na área de saúde.
        </S.Paragraphy>
      </Section>

      <Section title={'Limitações'}>
        <S.Paragraphy>
          Os serviços de saúde devem atualizar seus dados no CNES a cada seis meses. Caso esse prazo não seja cumprido, 
          os dados serão considerados desativados, segundo a Portaria nº 118/2014². Santos³ e Costa⁴ realizaram estudos 
          utilizando dados sobre a distribuição de profissionais, cadastrados no CNES por estabelecimento, e puderam 
          constatar as limitações, no que diz respeito à fragilidade de dados para uma parcela dos estabelecimentos 
          analisados. Medeiros e Calvo⁵, ao descreverem a distribuição dos serviços públicos de fisioterapia cadastrados 
          na média complexidade ambulatorial em Santa Catarina, observaram que o CNES estava desatualizado e sem 
          preenchimento, principalmente em relação à quantidade de profissionais e tipo de equipamentos.
        </S.Paragraphy>
      </Section>

      <Section title={'Fonte dos Dados'}>
        <S.Paragraphy>
          Cadastro Nacional de Estabelecimentos de Saúde (CNES), base de profissionais de saúde (PF), TabNet/DATASUS.
        </S.Paragraphy>
      </Section>

      <Section title="Link">
        Médicos -{' '}
        <S.Link
          target="_blank"
          href="sftp://ftp.datasus.gov.br/dissemin/publicos/CNES/200508_/Dados/PF/"
        >
          sftp://ftp.datasus.gov.br/dissemin/publicos/CNES/200508_/Dados/PF/
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
            Utilizou-se os microdados de profissionais de saúde da base “PF” do CNES, em que os dados são disponibilizados 
            no nível de ocupações de saúde, e dados de população municipal obtidos do TabNet/DATASUS.
          </S.Li>
          <S.Li>
            A variável que simula o CPF dos profissionais (“CPF_PROF”) permite que diferentes ocupações sejam associadas 
            a um mesmo indivíduo. Portanto, mesmo se um profissional possuir dois ou mais vínculos, ele será contado 
            apenas uma vez utilizando essa variável. Dessa forma, os médicos foram unicamente identificados dentro de 
            uma localidade e agregados para a região-ano em questão.
          </S.Li>
          <S.Li>
            Foram consideradas as classificações brasileiras de ocupação (CBO) de médicos descritas pelo DATASUS⁶.
          </S.Li>
          <S.Li>
            Para cada ano, foram utilizadas as informações de ocupações do CNES do mês de dezembro.
          </S.Li>
          <S.Li>
            Foi realizado o cálculo da taxa por 1.000 habitantes conforme a seguinte fórmula:
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
              ¹ Brasil, Ministério da Saúde. IDSUS: fichas técnicas dos indicadores. Indicador n°1 Cobertura estimada da 
              população residente pelas equipes da atenção básica à saúde [Internet]. 
              [citado 13 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://idsus.saude.gov.br/ficha1s.html"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://idsus.saude.gov.br/ficha1s.html
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ² Brasil, Ministério da Saúde Portaria 118, 18 de fevereiro de 2014. [Internet]. 
              [citado 13 de outubro de 2021]. Disponível em:{' '}
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
              ³ Santos FAS, Gouveia GC, Martelli PJL, Vasconcelos EMR. Acupuntura no sistema único de saúde e a inserção 
              de profissionais não-médicos. Rev Bras Fisioter. 2009;13(4):330–4.{' '}
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁴ Costa LR, Costa JLR, Oishi J, Driusso P. Distribuição de fisioterapeutas entre estabelecimentos públicos 
              e privados nos diferentes níveis de complexidade de atenção à saúde. Brazilian J Phys Ther. 2012;16(5):422–30.{' '}
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁵ Almeida G De, Medeiros R. Serviços públicos de média complexidade ambulatorial em fisioterapia vinculados 
              ao sistema único de saúde em Santa Catarina. Rev Saúde Pública Santa Catarina. 2014;7(2):7–16.{' '}
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁶ Brasil, Ministério da Saúde. CBO 2002. [Internet]. [citado 13 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://tabnet.datasus.gov.br/cgi/cnes/CBO%202002.htm"
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://tabnet.datasus.gov.br/cgi/cnes/CBO%202002.htm
              </a>
            </S.ReferenciaLink>
          </div>
        </div>
      </Section>
    </div>
  );
};
