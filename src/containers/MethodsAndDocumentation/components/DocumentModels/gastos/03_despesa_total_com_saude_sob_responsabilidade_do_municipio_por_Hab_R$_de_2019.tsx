import React from 'react';
import Section from './componentes/Section';

import * as S from './styles';

import formulaImage from './img/03.png';
import formulaImage2 from './img/03_02.png';
import { textColor } from '../../../../../constants/theme';

export const DespesaTotalComSaudeSobResponsabilidadeDoMunicipioPorHabDe2019 = () => {
  return (
    <div>
      <div style={{ maxWidth: '600px' }}>
        <S.PageTitle>
          Despesa Total com Saúde Sob Responsabilidade do Município (por Hab., R$ de 2021)
        </S.PageTitle>
      </div>

      <Section title={'Indicador'}>
        <S.Paragraphy>
          Despesa total com saúde, sob responsabilidade do município, por habitante.
        </S.Paragraphy>
      </Section>

      <Section title={'Interpretação'}>
        <S.Paragraphy>
          Representa a despesa total com Saúde, inclusive aquela financiada por outras esferas de governo, por habitante. 
          Conforme Nota Técnica do Ministério da Saúde¹, este indicador resulta do gasto em saúde, por habitante, 
          advindo de todas as fontes, quer sejam impostos, transferências do SUS (União, Estados e outros municípios), 
          operações de créditos e outras.
        </S.Paragraphy>
      </Section>

      <Section title={'Usos'}>
        <S.Paragraphy>
          Este indicador permite analisar variações geográficas e temporais do gasto com ações e serviços públicos de 
          saúde por habitante, conforme levantado pela RIPSA², bem como subsidiar processos de planejamento, gestão 
          e avaliação de políticas públicas de saúde.
        </S.Paragraphy>
      </Section>

      <Section title={'Limitações'}>
        <S.Paragraphy>
          Como ressaltado pelo CONASS³, este indicador depende da qualidade do preenchimento e agilidade na atualização 
          do SIOPS. Eventuais falhas exigem cautela na interpretação. Além disso, os dados de população disponíveis na 
          base do TabNet do SIOPS não são os mesmos disponibilizados pelo TabNet. Os valores disponibilizados pelo 
          TabNet consistem na despesa empenhada, quando a fase mais indicada para retratar a aplicação de recursos 
          é a despesa liquidada.
        </S.Paragraphy>
      </Section>

      <Section title={'Fonte dos Dados'}>
        <S.Paragraphy>
          TabNet do Sistema de Informações sobre Orçamento Público em Saúde (SIOPS), Ipeadata
        </S.Paragraphy>
      </Section>

      <Section title="Link">
        <S.Link
          target="_blank"
          href="https://siops-asp.datasus.gov.br/CGI/tabcgi.exe?SIOPS/serhist/municipio/mIndicadores.def"
        >
          https://siops-asp.datasus.gov.br/CGI/tabcgi.exe?SIOPS/serhist/municipio/mIndicadores.def
        </S.Link>
        <br/>
        <S.Link
          target="_blank"
          href="https://www.ipeadata.gov.br/Default.aspx"
        >
          https://www.ipeadata.gov.br/Default.aspx
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
            Foi realizado o cálculo conforme a seguinte fórmula:
            <div style={{ textAlign: 'center' }}>
              <img src={formulaImage} alt="Fórmula" />
            </div>
          </S.Li>
          <S.Li>
            Os valores foram trazidos a preços constantes de 2022 utilizando o Índice Nacional de Preços ao Consumidor Amplo (IPCA).
          </S.Li>
          <S.Li>
            Para melhor compreensão deste indicador, segue uma breve linha do tempo sobre o histórico do financiamento público da saúde no Brasil:
          </S.Li>
        </S.Ol>
      </Section>

      <Section title="BREVE HISTÓRICO DO FINANCIAMENTO PÚBLICO DA SAÚDE">
          <div style={{ textAlign: 'center', marginTop:12 }}>
            <img src={formulaImage2} alt="Fórmula" />
          </div>
          <S.Paragraphy>
            A EC n. 29/2000¹ aglutinou uma série de propostas legislativas cujo objetivo era assegurar a vinculação de 
            recursos para o SUS. Desse modo, ela definiu montantes mínimos a serem aplicados pela União, estados e 
            municípios em Ações e Serviços Públicos de Saúde (ASPS). Para a União, os recursos a serem aplicados em 2000 
            seriam o montante empenhado no exercício de 1999 acrescido de, no mínimo, 5%. A partir daí, o valor mínimo 
            seria apurado no ano anterior e corrigido pela variação nominal do PIB. Os estados e o Distrito Federal 
            deveriam aplicar, no mínimo, 12% da receita vinculada; ao passo que os municípios deveriam aplicar 15%, e, 
            em 2000, o percentual mínimo a ser aplicado seria de 7% para esses entes da federação⁷.  
          </S.Paragraphy>
          <S.Paragraphy>
            Segundo Piola et al.⁸, a EC n. 29 teve impactos diferenciados em cada ente da federação e foi bem-sucedida 
            na busca do objetivo de atender ao princípio constitucional (Constituição Federal de 1988) da 
            descentralização, ampliando a participação de estados e municípios no financiamento das ações e serviços 
            de saúde.  
          </S.Paragraphy>
          <S.Paragraphy>
            Todavia, tal dispositivo não definiu o que estaria incluído no conceito de ASPS, o que se 
            tentou resolver mediante a Resolução n. 322/2003 do CNS. Entretanto, nem todos os atores e gestores públicos 
            reconheceram-na como um instrumento suficiente para a definição do que são ASPS⁸.  
          </S.Paragraphy>
          <S.Paragraphy>
            Como explicado 
            anteriormente, a EC n. 29 foi finalmente regulamentada pela Lei Complementar n. 141/2012, a qual estabeleceu 
            diretrizes para a definição das ações e serviços de saúde: I. sejam destinadas às ações e serviços públicos 
            de saúde de acesso universal, igualitário e gratuito; II. estejam em conformidade com objetivos e metas 
            explicitados nos Planos de Saúde de cada ente da Federação; e III. sejam de responsabilidade específica do 
            setor da saúde, não se aplicando a despesas relacionadas a outras políticas públicas que atuam sobre 
            determinantes sociais e econômicos, ainda que incidentes sobre as condições de saúde da população. Além disso, 
            tal dispositivo legal previu que as despesas com ações e serviços públicos de saúde realizadas pela União, 
            pelos Estados, pelo Distrito Federal e pelos Municípios deveriam ser financiadas com recursos movimentados 
            por meio dos respectivos fundos de saúde, o que significa que os gestores do SUS terão maior controle sobre 
            a aplicação dos recursos próprios para fins de apuração dos gastos⁹.  
          </S.Paragraphy>
          <S.Paragraphy>
            Em seguida, o Decreto 
            n. 7.827/2012¹⁰ regulamentou os procedimentos de condicionamento e restabelecimento das transferências de 
            recursos provenientes das receitas de que trata o inciso II do caput do art. 158; as alíneas “a” e “b” do 
            inciso I e o inciso II do caput  do art. 159 da Constituição Federal, dispondo sobre os procedimentos de 
            suspensão e restabelecimento das transferências voluntárias da União, nos casos de descumprimento da 
            aplicação dos recursos em ações e serviços públicos de saúde de que trata a Lei Complementar n. 141, 
            de 13 de janeiro de 2012. Tratou, também, da institucionalização do SIOPS – a qual foi refinada pela 
            Portaria n. 53/2013⁹.   
          </S.Paragraphy>
          <S.Paragraphy>
            Posteriormente, a Emenda Constitucional n. 86 de 17 de março de 2015¹¹ 
            incluiu o § 9º ao art. 166 da CF/1988, determinando que as emendas individuais propostas pelos parlamentares 
            ao PLOA seriam aprovadas no limite de 1,2% da Receita Corrente Líquida (RCL) prevista no projeto encaminhado 
            pelo Poder Executivo, sendo que 0,6%, ou seja, metade desse valor, deve ser destinado pelos parlamentares a 
            ações e serviços públicos de saúde (ASPS). Além disso, a EC n. 86/2015 também incluiu o § 10 ao mesmo artigo, 
            segundo o qual a execução do montante destinado às ASPS, inclusive custeio, seria computada para fins do 
            cumprimento do inciso I do § 2° do art. 198 da CF/1988, vedada a destinação para o pagamento de pessoal ou 
            encargos sociais – isto é, esse montante seria contabilizado na apuração da aplicação mínima do governo 
            federal com ASPS (piso federal da saúde). Ademais, com a EC n. 86/2015, o valor mínimo para ASPS deixou de 
            ser o valor empenhado no ano anterior corrigido pela variação nominal do produto interno bruto (PIB) e 
            passou a ser, a partir de 2016 até 2020, o valor correspondente a percentuais progressivos da RCL. Mais 
            precisamente: 13,2% em 2016; 13,7% em 2017; 14,1% em 2018; 14,5% em 2019; e 15% em 2020¹².  
          </S.Paragraphy>
          <S.Paragraphy>
            A EC 
            n. 86 também instituiu a impositividade na execução das Emendas Parlamentares (EPs), o que aumentou a execução 
            orçamentária e financeira das emendas individuais e de bancada inseridas no anexo Prioridades e Metas da LDO. 
            Todavia, em 2016, 2017 e 2018, além de empenhar as despesas impositivas em valor superior ao limite estabelecido 
            pela EC n. 86/2015, o Ministério da Saúde (MS) empenhou, por outros tipos de EPs, não impositivas, um valor 
            bastante elevado. Como as EPs fazem parte dos recursos que compõem a aplicaçã o mínima do MS, a EC 
            n. 86 acabou por provocar uma maior participação do Congresso na alocação dos recursos para saúde, 
            levantando questionamentos acerca da eficiência e da equidade dessa distribuição¹².   
          </S.Paragraphy>
          <S.Paragraphy>
            Mais recentemente, 
            a Emenda Constitucional n. 95 de 2016¹³ congelou em termos reais as despesas primárias da União e estabeleceu 
            uma nova regra de apuração das despesas pela ótica da execução financeira, introduzindo o chamado Novo 
            Regime Fiscal (NRF). Tal emenda teve efeito sobre o volume de recursos efetivamente disponibilizados para o 
            SUS, tanto pela imposição do teto geral de gastos, quanto pela forma de apuração do piso federal de despesas 
            com ASPS – o qual foi congelado em valor equivalente a 15% da receita corrente líquida de 2017 para o 
            período 2018-2036¹⁴.  
          </S.Paragraphy>
          <S.Paragraphy>
            Por fim, a Portaria n. 3.992 de 2017¹⁵ alterou a Portaria de Consolidação 
            n. 6/GM/MS, de 28 de setembro de 2017, que trata das normas sobre o financiamento e a transferência dos 
            recursos federais para as ações e os serviços de saúde do Sistema Único de Saúde. A Portaria de Consolidação 
            n. 6 havia incorporado o texto da Portaria n. 204/2007. Desde a Portaria n. 204/2007, o financiamento e as 
            transferências dos recursos federais para ASPS eram realizados através de seis blocos de financiamento ou 
            blocos financeiros. Para receber os recursos federais, o Ministério da Saúde, por meio do Fundo Nacional de 
            Saúde, abria para cada bloco uma conta bancária e, no caso do bloco de investimento, uma conta financeira 
            para cada um dos projetos aprovados com plano de aplicação e prestação de contas específicas, o que muitas 
            vezes poderia ser confundido com a transferência de recursos financeiros realizada por meio de convênios.  
          </S.Paragraphy>
          <S.Paragraphy>
            A partir da Portaria n. 3.992/2017, os recursos destinados à manutenção das ASPS já implantados e 
            ao funcionamento dos órgãos e estabelecimentos responsáveis – ações continuadas – passaram a ser 
            transferidos para uma só conta-corrente no Bloco de Custeio. Já os recursos para investimento em 
            saúde – estruturação e ampliação da oferta de ASPS (reformas, obras e equipamentos) – passaram a ser 
            transferidos para uma só conta-corrente no Bloco de Investimento¹⁶.  
          </S.Paragraphy>
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
              ¹ Brasil. Emenda Constitucional n° 29, de 13 de setembro de 2000 [Internet]. [citado 25 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc29.htm."
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc29.htm.
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ² Brasil. Ministério da Saúde. Composição dos indicadores municipais calculados automaticamente pelo SIOPS 
              após a declaração de dados contábeis, pelos municípios, a partir do SIOPS 2007 semestral [Internet]. 
              [citado 25 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://siops.datasus.gov.br/Documentacao/NT%20apresenta%C3%A7%C3%A3o%20Indicadores%20-%20a%20partir%20do%201%C2%BA%20semestre%20de%20%202007.pdf."
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://siops.datasus.gov.br/Documentacao/NT%20apresenta%C3%A7%C3%A3o%20Indicadores%20-%20a%20partir%20do%201%C2%BA%20semestre%20de%20%202007.pdf.
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ³ Brasil. Conselho Nacional de Saúde. Resolução n° 322, de 08 de maio de 2003 [Internet]. [citado 25 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://bvsms.saude.gov.br/bvs/saudelegis/cns/2003/res0322_08_05_2003.html."
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://bvsms.saude.gov.br/bvs/saudelegis/cns/2003/res0322_08_05_2003.html.
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁴ Brasil. Lei Complementar n° 141, de 13 de maio de 2012 [Internet]. [citado 25 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp141.htm."
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp141.htm.
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁵ CONASS. Guia de Apoio à Gestão Estadual do SUS. Despesa total em saúde por habitante e percentual dos 
              recursos próprios gastos em saúde [Internet]. [citado 25 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://www.conass.org.br/guiainformacao/notas_tecnicas/NT-4-desp-tot-PC-e-perc-rec-prop-saude.pdf."
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://www.conass.org.br/guiainformacao/notas_tecnicas/NT-4-desp-tot-PC-e-perc-rec-prop-saude.pdf.
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁶ Tasca, R. e Benevides, R. P. S. SUS: desafios para tornar um sistema universal e subfinanciado eficiente 
              in Ocké-Reis, C. O. (organizador) Avaliação da eficiência do gasto público no SUS. 
              Brasília: IPEA/CONASS/OPAS. 2021, no prelo.{' '}
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁷ Servo, L. M. et al. Financiamento e gasto público de saúde: histórico e tendências. In: Melamed, C.; Piola, 
              S. (Org.). Políticas públicas e financiamento federal do Sistema Único de Saúde. Brasília: Ipea, 2011.{' '}
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁸ Piola, Sérgio F., et al. Financiamento público da saúde: uma história à procura de rumo. No. 1846. 
              Texto para discussão, 2013.{' '}
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ⁹ CONASS. Guia de Apoio à Gestão Estadual do SUS. Gestão Financeira [Internet]. 
              [citado 25 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://www.conass.org.br/guiainformacao/gestao-financeira/#. 2016."
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://www.conass.org.br/guiainformacao/gestao-financeira/#. 2016.
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ¹⁰ Brasil. Decreto n° 7.827, de 16 de outubro de 2012 [Internet]. [citado 25 de outubro de 2021]. 
              Disponível em:{' '}
              <a
                href="https://www.conass.org.br/guiainformacao/notas_tecnicas/NT-4-desp-tot-PC-e-perc-rec-prop-saude.pdf."
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://www.conass.org.br/guiainformacao/notas_tecnicas/NT-4-desp-tot-PC-e-perc-rec-prop-saude.pdf.
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ¹¹ Brasil. Emenda Constitucional n° 86 de 17 de março de 2015 [Internet]. 
              [citado 25 de outubro de 2021]. Disponível em:{' '}
              <a
                href="https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc86.htm."
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc86.htm.
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ¹² Piola, S.; Vieira, F. As emendas parlamentares e a alocação de recursos federais no Sistema Único de 
              Saúde. IPEA: Texto para Discussão 2497. Rio de Janeiro, 2019.{' '}
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ¹³ Brasil. Emenda Constitucional n° 95, de 15 de dezembro de 2016 [Internet]. 
              [citado 25 de outubro de 2021]. Disponível em{' '}
              <a
                href="https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc95.htm."
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc95.htm.
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ¹⁴ VIEIRA, F. S. et al. Controvérsias sobre o Novo Regime Fiscal e a apuração do gasto mínimo 
              constitucional com saúde. Ipea, 2018.{' '}
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ¹⁵ Brasil. Portaria n° 3.992, de 28 de dezembro de 2017 [Internet]. [citado 25 de outubro de 2021]. 
              Disponível em{' '}
              <a
                href="https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prt3992_28_12_2017.html."
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prt3992_28_12_2017.html.
              </a>
            </S.ReferenciaLink>
            <S.ReferenciaLink>
              ¹⁶ CNM; CONASEMS. Mudanças no financiamento da saúde. 2018 [Internet]. [citado 25 de outubro de 2021]. 
              Disponível em:{' '}
              <a
                href="https://www.conasems.org.br/wp-content/uploads/2018/08/Mudan%C3%A7as-no-Financiamento-da-Sa%C3%BAde.pdf."
                target="_blank"
                rel="noreferrer"
                style={{ color: `${textColor}`, textDecoration: 'none' }}
              >
                https://www.conasems.org.br/wp-content/uploads/2018/08/Mudan%C3%A7as-no-Financiamento-da-Sa%C3%BAde.pdf.
              </a>
            </S.ReferenciaLink>
          </div>
        </div>
      </Section>
    </div>
  );
};
