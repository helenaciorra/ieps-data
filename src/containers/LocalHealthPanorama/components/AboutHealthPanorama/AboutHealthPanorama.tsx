import React from 'react';
import * as S from './AboutHealthPanorama.css';

const AboutHealthPanorama = () => {
  return (
    <S.Container>
      <S.Title>Sobre o Panorama de Saúde Local</S.Title>
      <S.Content>
        <S.Line />
        <S.Text>
          O Panorama de Saúde Local oferece uma visão resumida da saúde de
          municípios e regiões de saúde, cobrindo cinco dimensões: dados
          sociodemográficos, atenção básica, mortalidade e morbidade, despesas
          com saúde e recursos da região de saúde. O Panorama permite comparar
          cada indicador do local e ano selecionados com o seu respectivo estado
          e o país. Mais explicações sobre os indicadores se encontram na seção
          Métodos e Documentação do site.
          <br />
          <br />
          A expectativa de vida ao nascer, o percentual da população com 65 anos
          ou mais e o percentual dos domicílios com saneamento básico compõem a
          seção de indicadores socioedemográficos do panorama. Quanto à atenção
          básica, são disponibilizados dados sobre a cobertura da Atenção
          Básica, a cobertura vacinal contra a Poliomielite e o percentual de
          nascidos vivos com atendimento pré-natal adequado. A mortalidade
          ajustada por causas evitáveis e as hospitalizações por condições
          sensíveis à atenção primária (CSAP) refletem resumidamente o perfil de
          mortalidade e morbidade do local.
          <br />
          <br />
          Em respeito ao princípio organizativo da regionalização do SUS, os
          indicadores no bloco de recursos — médicos, enfermeiros, leitos totais
          do SUS e leitos não vinculados ao SUS, normalizados pelas populações
          locais — são apresentados no nível das regiões de saúde. Por fim, as
          despesas com saúde por habitante comparam a despesa total dos
          municípios por habitante (barra transparente), com a despesa com
          recursos próprios dos municípios por habitante (barra cheia).
        </S.Text>
      </S.Content>
    </S.Container>
  );
};

export default AboutHealthPanorama;
