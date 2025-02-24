import formulaImage from './img/01.png';

export const atencaoPrimariaCoberturaAtencaoBasica = {
  pageTitle: 'Cobertura da Atenção Básica (%)',
  indicadorTitle: 'Indicador',
  indicadorContent:
    'Cobertura populacional estimada na Atenção Básica, dada pelo percentual da população residente coberta por equipes da Estratégia Saúde da Família e por equipes de Atenção Básica equivalentes.',
  interpretacaoTitle: 'Interpretação',
  interpretacaoContent:
    'Mede o acesso aos serviços da Estratégia Saúde da Família para a população de determinada localidade geográfica. Logo, quanto maior o indicador, maior o potencial de acesso à atenção básica e de oferta de ações e serviços básicos para a população.',
  usosTitle: 'Usos',
  usosContent:
    'Este indicador permite a verificação, por território, da disponibilidade de profissionais da atenção básica à saúde, com a indicação de áreas com maior e menor cobertura de equipes da Estratégia Saúde da Família, conforme especificado pelo IDSUS¹ . Além disso, possibilita o exame da distribuição da cobertura da atenção básica do ponto de vista geográfico e temporal, com a indicação de eventuais desigualdades e tendências passíveis de estudo e aprofundamento. Por fim, fornece dados para a elaboração e avaliação de políticas públicas na área de saúde.',
  limitacoesTitle: 'Limitações',
  limitacoesContent:
    'Este indicador trata somente da existência de equipes da Estratégia de Saúde da Família, tal como levantado pelo IDSUS¹, não mensurando portanto a qualidade ou o volume do trabalho realizado pelas essas equipes. Além disso, como o indicador faz uso de valores referentes somente ao mês de dezembro, o resultado encontrado pode não ser representativo da situação mais comumente encontrada no município ao longo do ano.',
  dataSourceTitle: 'Fonte dos Dados',
  dataSourceContent: 'E-Gestor, Informação e Gestão da Atenção Básica, e CNES.',
  linkTitle: 'Link',
  linkUrl:
    'https://egestorab.saude.gov.br/paginas/acessoPublico/relatorios/relHistoricoCoberturaAB.xhtml',
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
      item: 'Utilizou-se como fonte de dados primária a cobertura populacional estimada do E-Gestor, ao nível do município-mês e referente ao mês de dezembro de cada ano. Foi realizado o cálculo conforme a seguinte fórmula (segundo Nota Metodológica²  do Ministério da Saúde):',
      image: `${formulaImage}`,
      explain: [
        'n° eSF: quantidade de equipes de Saúde da Família com códigos 1 a 3, 12 a 15, 24 a 39 vinculadas aos estabelecimentos de saúde instituídas em sua respectiva portaria e cadastradas no SCNES. As equipes de 24 a 38 são ponderadas conforme Portaria nº 703/2011 (24 a 26 = 1 equipe; 27 a 29 = 2 equipes; 30 a 32 = 3 equipes; 33 a 35 = 0,85 equipe; 36 a 38 = 0,6 equipe);',
        'nº eAB param.: quantidade de equipes de Atenção Básica parametrizadas com códigos de 16 a 21 vinculadas aos estabelecimentos de saúde instituídas em sua respectiva portaria e cadastradas no SCNES. As equipes são ponderadas conforme Portaria nº 576/2011 (16 e 19 = 1 equipe; 17 e 20 = 2 equipes; 18 e 21 = 3 equipes);',
        'nº eSF equivalentes: o mínimo de 60h de carga horária ambulatorial médica e mínimo de 40h de carga horária ambulatorial de enfermagem na Atenção Básica equivale a uma equipe. Considera-se sempre o menor valor entre os quocientes, desde que o resultado seja no mínimo 1;',
        'Parâmetro: considera-se o valor de 3.450 indivíduos cobertos por equipe de Saúde da Família, e 3.000 indivíduos cobertos pelas equipes de atenção básica parametrizadas e equipes equivalentes, resultados da média aritmética entre os valores mínimo e máximo definidos na PNAB 2011;',
        'Estimativa Populacional: considera-se a estimativa do ano anterior e atualizada no mês de janeiro.',
      ],
    },
    {
      item: 'A média ponderada pela população disponibilizada pelo E-gestor foi utilizada para calcular a cobertura ao nível da região de saúde, da macrorregião de saúde, do estado e do Brasil.',
      explain: [],
    },
    {
      item: 'Além disso, considerou-se 100% como valor máximo, como indicado em Nota Metodológica²  do Ministério da Saúde.',
      explain: [],
    },
    {
      item: 'Por fim, foram utilizadas somente as estimativas referentes ao mês de dezembro de cada ano, conforme recomendado em Nota Metodológica²  do Ministério da Saúde.',
      explain: [],
    },
    {
      item: 'Mais informações sobre a metodologia de cálculo e dados do E-Gestor podem ser encontradas em Nota Técnica³  e Nota Metodológica⁴  do Ministério da Saúde.',
      explain: [],
    },
  ],
  referenciasTitle: 'Referências',
  referenciasLinks: [
    {
      text: '¹  Brasil. Ministério da Saúde. IDSUS: fichas técnicas dos indicadores [Internet]. [citado 22 de setembro de 2021]. Disponível em: ',
      url: 'https://idsus.saude.gov.br/assets/detalhadas.pdf',
    },
    {
      text: '² Brasil. Ministério da Saúde. Nota Metodológica: Cobertura da Atenção Básica [Internet]. [citado 22 de setembro de 2021]. Disponível em: ',
      url: 'https://egestorab.saude.gov.br/paginas/acessoPublico/relatorios/nota_tecnica/nota_metodologica_AB.pdf',
    },
    {
      text: '³ Brasil. Ministério da Saúde. Nota técnica: Cobertura da Atenção Básica [Internet]. [citado 22 de setembro de 2021].  Disponível em:',
      url: 'https://egestorab.saude.gov.br/paginas/acessoPublico/relatorios/nota_tecnica/nota_tecnica_relatorio_de_cobertura_AB.pdf',
    },
    {
      text: '⁴ Brasil. Ministério da Saúde. Nota Metodológica: Adaptação ao método de cálculo para os meses de maio, junho e julho de 2020 [Internet]. [citado 22 de setembro de 2021]. Disponível em:  ',
      url: 'https://egestorab.saude.gov.br/paginas/acessoPublico/relatorios/nota_tecnica/nota_metodologica_AB_adaptada.pdf',
    },
  ],
};
