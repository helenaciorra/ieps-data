import formulaImage from './img/03.png';

export const coberturaAgentesComunitariosSaude = {
  pageTitle: 'Cobertura de Agentes Comunitários de Saúde (%)',
  indicadorTitle: 'Indicador',
  indicadorContent:
    'Cobertura populacional estimada por Agentes Comunitários de Saúde vinculados a equipes da Estratégia Saúde da Família, Equipes de Atenção Básica parametrizada ou Equipes de Agentes Comunitários de Saúde, dada pelo percentual da população coberta por esses agentes.',
  interpretacaoTitle: 'Interpretação',
  interpretacaoContent:
    'Mede o acesso aos serviços de Agentes Comunitários de Saúde para a população de determinada localidade geográfica. Logo, quanto maior o valor do indicador, maior o potencial de acesso à atenção básica e de oferta de ações e serviços básicos para a população.',
  usosTitle: 'Usos',
  usosContent:
    'Este indicador permite a verificação, por território, da disponibilidade de agentes comunitários de saúde, com a indicação de áreas com maior e menor cobertura de agentes, conforme especificado pelo IDSUS¹. Além disso, possibilita o exame da distribuição da cobertura da atenção básica do ponto de vista geográfico e temporal, com a indicação de eventuais desigualdades e tendências passíveis de estudo e aprofundamento.',
  limitacoesTitle: 'Limitações',
  limitacoesContent:
    'Este indicador trata tão somente da existência de Agentes Comunitários de Saúde, tal como levantado pelo IDSUS¹, não mensurando portanto a qualidade ou o volume do trabalho realizado por eles. Além disso, como o indicador faz uso de valores referentes somente ao mês de dezembro, o resultado encontrado pode não ser representativo da situação mais comumente encontrada no município ao longo do ano.',
  dataSourceTitle: 'Fonte dos Dados',
  dataSourceContent: 'E-Gestor, Informação e Gestão da Atenção Básica, e CNES.',
  linkTitle: 'Link',
  linkUrl:
    'https://egestorab.saude.gov.br/paginas/acessoPublico/relatorios/relHistoricoCoberturaACS.xhtml',
  periodTitle: 'Período disponibilizado',
  periodContent: '2010 a 2023.',
  graphLevelTitle: 'NÍVEIS GEOGRÁFICOS DISPONIBILIZADOS',
  graphLevelContent: [
    { title: 'Brasil', content: null },
    { title: 'Estado', content: null },
    { title: 'Macrorregião de Saúde (117)', content: 'Fonte: SAGE.' },
    { title: 'Região de Saúde (450)', content: 'Fonte: SAGE.' },
    { title: 'Município (5.570)', content: 'Fonte: IBGE.' },
  ],
  formulaTitle: 'Fórmula de Cálculo',
  formulaContent: [
    {
      item: 'Utilizou-se como fonte de dados primária a cobertura populacional estimada do e-Gestor, ao nível mensal. Foi realizado o cálculo conforme a seguinte forma (segundo Nota Metodológica² do Ministério da Saúde):',
      image: `${formulaImage}`,
      explain: [
        'n° ACS: número de Agentes Comunitários de Saúde (CBO: 515105). São considerados os profissionais lotados em equipes da Estratégia Saúde da Família (códigos 01 a 03, 12 a 15, 24 a 39), Equipe de Atenção Básica (códigos 16 a 21) e Equipe de Agentes Comunitários de Saúde (códigos 04, 10 e 11), desde que vinculadas aos estabelecimentos de saúde instituídas em sua respectiva portaria e cadastradas no SCNES;',
        'Parâmetro: considera-se o valor de 575, resultado da média aritmética entre os valores mínimo e máximo definidos na PNAB 2011;',
        'Estimativa Populacional: considerada-se a estimativa do ano anterior e atualizada no mês de janeiro.',
      ],
    },
    {
      item: 'A média ponderada pela população disponibilizada pelo e-Gestor foi utilizada para calcular a cobertura ao nível da região de saúde, da macrorregião de saúde, do estado e do Brasil.',
      explain: [],
    },
    {
      item: 'Além disso, considerou-se 100% como valor máximo, como indicado em Nota Metodológica² do Ministério da Saúde.',
      explain: [],
    },
    {
      item: 'Por fim, foram utilizadas somente as estimativas referentes ao mês de dezembro de cada ano, conforme recomendado em Nota Metodológica² do Ministério da Saúde.',
      explain: [],
    },
    {
      item: 'Mais informações sobre a metodologia de cálculo e dados do e-Gestor podem ser encontradas em Nota Metodológica² e Nota Técnica³ do Ministério da Saúde.',
      explain: [],
    },
  ],

  referenciasTitle: 'Referências',
  referenciasLinks: [
    {
      text: '¹Brasil. Ministério da Saúde. IDSUS: fichas técnicas dos indicadores [Internet]. [citado 22 de setembro de 2021]. Disponível em:',
      url: 'https://idsus.saude.gov.br/assets/detalhadas.pdf .',
    },
    {
      text: '²Brasil. Ministério da Saúde. Nota Metodológica: Cobertura ACS [Internet]. [citado 21 de setembro de 2021]. Disponível em:',
      url: 'https://egestorab.saude.gov.br/paginas/acessoPublico/relatorios/nota_tecnica/nota_metodologica_ACS.pdf .',
    },
    {
      text: '³Brasil. Ministério da Saúde. Nota Técnica: Cobertura ACS [Internet]. [citado 21 de setembro de 2021]. Disponível em:',
      url: 'https://egestorab.saude.gov.br/paginas/acessoPublico/relatorios/nota_tecnica/nota_tecnica_relatorio_de_cobertura_ACS.pdf .',
    },
  ],
};
