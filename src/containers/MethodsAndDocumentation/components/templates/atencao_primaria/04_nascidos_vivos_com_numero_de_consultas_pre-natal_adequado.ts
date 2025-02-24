import formulaImage from './img/04.png';

export const nascidosVivosComPreNatalAdequado = {
  pageTitle: 'Nascidos Vivos com Número de Consultas Pré-Natal Adequado (%)',
  indicadorTitle: 'Indicador',
  indicadorContent:
    'Percentual de nascidos vivos cujas mães tiveram acompanhamento pré-natal adequado, ou seja, com seis ou mais consultas, sendo a primeira com início anterior ao terceiro mês de gravidez.',
  interpretacaoTitle: 'Interpretação',
  interpretacaoContent:
    'Estima a cobertura do atendimento pré-natal de gestantes por localidade geográfica e período. Logo, quanto maior o valor do indicador, maior a adequação do acesso ao pré-natal pela população.',
  usosTitle: 'Usos',
  usosContent:
    'Este indicador permite a verificação, por território, das condições de acesso das gestantes à assistência pré-natal, conforme especificado pelo IDSUS¹, possibilitando a identificação de tendências e situações de desigualdade passíveis de estudo e aprofundamento. Ademais, fornece dados para a elaboração e avaliação de políticas públicas relativas à atenção pré-natal, ao parto e ao puerpério.',
  limitacoesTitle: 'Limitações',
  limitacoesContent:
    'Em primeiro lugar, precisa-se enfatizar que a adequação do pré-natal neste indicador está relacionada ao número de consultas e ao período de início destas, sendo portanto uma métrica mais relacionada ao acesso e não à qualidade do pré-natal em si. Há  possibilidade que a gestante cometa um equívoco ao informar o número de consultas, tal como levantado pela RIPSA². Além disso, o indicador não leva em conta as consultas de pré-natal referentes a gestações que deram origem a natimortos e abortos. Tampouco pode representar fidedignamente a população de áreas com baixa cobertura do sistema de informação sobre nascidos vivos. Ademais, o total de nascidos vivos pode ser subenumerado devido à possibilidade de nascidos vivos que morrem logo após o nascimento serem declarados como natimortos. Da mesma forma, partos gemelares implicam contagem cumulativa de mulheres. Por fim, partos prematuros podem provocar uma redução no número de consultas pré-natal.',
  dataSourceTitle: 'Fonte dos Dados',
  dataSourceContent: 'Sistema de Informações sobre Nascidos Vivos (SINASC).',
  linkTitle: 'Link',
  linkUrl: 'sftp://ftp.datasus.gov.br/dissemin/publicos/SINASC/NOV/DNRES/',
  periodTitle: 'Período disponibilizado',
  periodContent: '2014 a 2023.',
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
      item: 'Utilizou-se como fonte de dados primária os microdados que contêm informações individuais de nascimento, que foram agregados ao nível de município-ano.',
      explain: [],
    },
    {
      item: 'Foi gerada uma variável binária indicando adequação do pré-natal, “prenatal_adeq”, que assume o valor 1 (adequado), caso o número de consultas (“consprenat”) seja maior ou igual a 6 e o mês de início do pré-natal (“mesprenat”) seja menor ou igual que 3; e 0 (inadequado), caso contrário. O número de nascimentos com pré-natal adequado foi obtido somando a variável “prenatal_adeq” de acordo com a localidade geográfica desejada.',
      explain: [],
    },
    {
      item: 'Considerou-se como adequadas as categorias classificadas como “Adequado” e “Mais que Adequado” pelo Ministério da Saúde (Tabela 1), em que:',
      explain: [
        '(i) gestantes que iniciaram o pré-natal antes ou durante o terceiro mês e fizeram seis consultas;',
        '(ii) gestantes que tiveram o início do pré-natal antes ou durante o terceiro mês e fizeram sete consultas ou mais.',
        'Ou seja, por esse critério, considera-se adequado gestantes que iniciaram o pré-natal antes ou durante o terceiro mês e fizeram seis consultas ou mais durante a gestação. Os números de pré-natal adequado resultantes são compatíveis com os valores disponibilizados pelo TabNet/DATASUS.',
      ],
    },
    {
      item: 'Foi utilizada a média ponderada pelo número de nascimentos no respectivo nível geográfico para calcular a cobertura ao nível da região de saúde, da macrorregião de saúde, do estado e do Brasil.',
      explain: [],
    },
    {
      item: 'Foi realizado, então, o cálculo da porcentagem de nascidos vivos cujas mães tiveram pré-natal adequado, conforme a seguinte fórmula (segundo estrutura proposta pelo Ministério da Saúde³):',
      image: `${formulaImage}`,
      explain: [],
    },
  ],

  tableTitle: 'TABELA 1. CLASSIFICAÇÃO DO ATENDIMENTO PRÉ-NATAL',
  tableHeader: [
    'Índice de adequação de acesso',
    'Descrição',
    'Método de Cálculo',
  ],
  tableContent: [
    [
      '1 – Não fez pré-natal',
      'Mulheres que não fizeram consulta pré-natal durante a gestação',
      'consprenat = 0',
    ],
    [
      '2 - Inadequado',
      'Gestantes que iniciaram o pré-natal após o terceiro mês da gestação e aquelas que, embora tenham iniciado o pré-natal até o terceiro mês de gestação, fizeram menos de três consultas.',
      'mesprenat > 3 ou meprenat ≤ 3 e consprenat < 3',
    ],
    [
      '3 – Intermediário',
      'Gestantes que iniciaram os cuidados pré-natais antes ou durante o terceiro mês e fizeram de três a cinco consultas',
      'mesprenat ≤ 3 e consprenat entre 3 e 5',
    ],
    [
      '4 - Adequado',
      'Gestantes que iniciaram os cuidados pré-natais antes ou durante o terceiro mês e fizeram seis consultas',
      'mesprenat ≤ 3 e consprenat = 6',
    ],
    [
      '5 – Mais que adequado',
      'Gestantes que iniciaram os cuidados pré-natais antes ou durante o terceiro mês e fizeram sete consultas ou mais',
      'mesprenat ≤ 3 e consprenat ≥ 7',
    ],
  ],
  tableReference: 'Fonte: Ministério da Saúde³.',
  referenciasTitle: 'Referências',
  referenciasLinks: [
    {
      text: '¹Brasil. Ministério da Saúde. IDSUS: fichas técnicas dos indicadores [Internet]. [citado 22 de setembro de 2021]. Disponível em:',
      url: 'https://idsus.saude.gov.br/assets/detalhadas.pdf.',
    },
    {
      text: '²Rede Interagencial de Informação para a Saúde. Indicadores Básicos Para a Saúde No Brasil: Conceitos E Aplicações. 2008 [citado 29 de setembro de 2021]; Disponível em:',
      url: 'https://tabnet.datasus.gov.br/tabdata/livroidb/2ed/indicadores.pdf.',
    },
    {
      text: '³Brasil. Ministério da Saúde. Saúde Brasil 2017: uma análise da situação de saúde e os desafios para o alcance dos objetivos de desenvolvimento sustentável [Internet]. Ministério da Saúde Secretaria de Vigilância em Saúde Departamento de Vigilância de Doenças e Agravos não Transmissíveis e Promoção de Saúde. 2018. 105 p. Disponível em:',
      url: 'https://bvsms.saude.gov.br/bvs/publicacoes/saude_brasil_2017_analise_situacao_saude_desafios_objetivos_desenvolvimento_sustetantavel.pdf',
    },
  ],
};
