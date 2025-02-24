export const coberturaVacinalDeMeningococoC = {
  pageTitle: 'Cobertura Vacinal de Meningococo C (%)',
  indicadorTitle: 'Indicador',
  indicadorContent:
    'Cobertura vacinal estimada de Meningococo C, considerando a população-alvo. <br><br> A doença meningocócica é uma infecção aguda. Cinco sorogrupos de meningococo causam a maioria dos casos da doença: A, B, C, W e Y, sendo o sorogrupo C o mais comum no Brasil. A doença pode provocar meningite (inflamação das membranas que recobrem o cérebro), meningococemia (infecção generalizada) e rapidamente levar o paciente a óbito. No seu esquema de vacinação, uma dose deve ser aplicada aos três meses de vida; outra, aos cinco meses e a dose de reforço, aos doze meses. Em 2020, a vacina ACWY, imunizante conjugado que protege contra os sorotipos A, C, W e Y, passou a ser disponibilizada no SUS para aplicação em crianças de 11 e 12 anos¹.',
  interpretacaoTitle: 'Interpretação',
  interpretacaoContent:
    'Estima o nível de proteção vacinal da população-alvo contra a doença selecionada, evitável por imunização.',
  populacaoTitle: 'População-alvo',
  populacaoContent: 'Crianças até 30 dias.',
  coberturaTitle: 'Cobertura com',
  coberturaContent: 'Três doses.',
  metaTitle: 'Meta de Cobertura',
  metaContent: '95%.',
  usosTitle: 'Usos',
  usosContent:
    'Este indicador permite a análise das variações geográficas e temporais na cobertura vacinal de Meningococo C, recomendada pelo Programa Nacional de Imunização (PNI), na respectiva população-alvo, conforme especificado pelo IDSUS². Além disso, possibilita a identificação de situações de insuficiência passíveis de maior estudo e intervenção, incluindo municípios que alcançam ou não as metas epidemiológicas; e contribui para a avaliação e para o planejamento dos programas de vacinação. Ademais, fornece dados para a elaboração e avaliação de políticas públicas relativas à atenção à saúde da criança e ao controle de doenças evitáveis por imunização.',
  limitacoesTitle: 'Limitações',
  limitacoesContent:
    'Há possibilidade de que valores médios elevados encubram territórios com baixa cobertura em determinados grupos populacionais, tal como levantado pelo IDSUS². Além disso, há possibilidade de que o registro de doses de vacina aplicadas contenha imprecisões, sobretudo em campanhas de vacinação. Ademais, doses utilizadas para outros fins que não a vacinação – como recipientes quebrados – são consideradas para o cálculo do indicador. A vacinação da população não residente aos postos de vacinação, principalmente em campanhas, dificulta a avaliação da cobertura vacinal e pode levar a coberturas que ultrapassem 100%. Por fim, os dados demográficos utilizados para estimar a população-alvo podem conter imprecisões.  ',
  dataSourceTitle: 'Fonte dos Dados',
  dataSourceContent:
    'Dados do Programa Nacional de Imunizações (PNI), TabNet/DATASUS.',
  linkTitle: 'Link',
  linkUrl: 'https://tabnet.datasus.gov.br/cgi/dhdat.exe?bd_pni/cpnibr.def',
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
      item: 'Utilizou-se para o cálculo da cobertura o número de doses aplicadas da dose indicada (1ª, 2ª, 3ª dose ou dose única, conforme a vacina) dividido pela população-alvo, multiplicado por 100.',
      explain: [],
    },
  ],
  referenciasTitle: 'Referências',
  referenciasLinks: [
    {
      text: '¹Nunes, L. Cobertura Vacinal do Brasil 2020. 2021;1–65. Disponível em:',
      url: 'https://ieps.org.br/wp-content/uploads/2021/05/Panorama_IEPS_01.pdf.',
    },
    {
      text: '²Brasil. Ministério da Saúde. IDSUS: fichas técnicas dos indicadores [Internet]. [citado 22 de setembro de 2021]. Disponível em:',
      url: 'https://idsus.saude.gov.br/assets/detalhadas.pdf.',
    },
  ],
};
