import formulaImage from './img/06.png';

export const nascidosVivosCom1a6ConsultasPreNatal = {
  pageTitle: 'Nascidos Vivos com 1 a 6 Consultas Pré-Natal (%)',
  indicadorTitle: 'Indicador',
  indicadorContent:
    'Percentual de nascidos vivos cujas mães tiveram de uma a seis consultas pré-natal.',
  interpretacaoTitle: 'Interpretação',
  interpretacaoContent:
    'Estima a cobertura do atendimento pré-natal de gestantes por localidade geográfica e período. Logo, quanto menor a porcentagem de nascidos vivos com uma a seis consultas pré-natal (com relação à porcentagem de nascidos vivos com sete ou mais consultas), maior o acesso e a qualidade do serviço de exame pré-natal para a população.',
  usosTitle: 'Usos',
  usosContent:
    'Este indicador permite a verificação, por território, das condições de acesso das gestantes à assistência pré-natal, conforme especificado pelo IDSUS¹, possibilitando a identificação de tendências e situações de desigualdade passíveis de estudo e aprofundamento. Ademais, fornece dados para a elaboração e avaliação de políticas públicas relativas à atenção pré-natal, ao parto e ao puerpério.',
  limitacoesTitle: 'Limitacoes',
  limitacoesContent:
    'Há possibilidade que a gestante cometa um equívoco ao informar o número de consultas, tal como levantado pela RIPSA². Além disso, o indicador não leva em conta as consultas de pré-natal referentes a gestações que deram origem a natimortos e abortos. Tampouco pode representar fidedignamente a população de áreas com baixa cobertura do sistema de informação sobre nascidos vivos. Ademais, o total de nascidos vivos pode ser subenumerado devido à possibilidade de nascidos vivos que morrem logo após o nascimento serem declarados como natimortos. Da mesma forma, partos gemelares implicam contagem cumulativa de mulheres. Por fim, partos prematuros podem provocar uma redução no número de consultas pré-natal.',
  dataSourceTitle: 'Fonte dos Dados',
  dataSourceContent: 'Sistema de Informações sobre Nascidos Vivos (SINASC).',
  linkTitle: 'Link',
  linkUrl: 'sftp://ftp.datasus.gov.br/dissemin/publicos/SINASC/NOV/DNRES/',
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
      item: 'Utilizou-se como base para construção do indicador a variável do número de consultas pré-natal por nascido vivo (“consultas”), a qual segue a seguinte classificação:',
      explain: [
        '1- Nenhuma;',
        '2- de 1 a 3;',
        '3- de 4 a 6;',
        '4- 7 e mais;',
        '9- Ignorado.',
      ],
    },
    {
      item: 'Foi gerada uma variável referente àqueles que que realizaram de uma a seis consultas (classificados sob “2” e “3”).',
      explain: [],
    },
    {
      item: 'Foi realizado o cálculo da porcentagem sobre o total de nascidos vivos por ano e localidade geográfica conforme a seguinte fórmula:',
      image: `${formulaImage}`,
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
      text: '²Rede Interagencial de Informação para a Saúde. Indicadores Básicos Para a Saúde No Brasil: Conceitos E Aplicações. 2008 [citado 29 de setembro de 2021]; Disponível em:',
      url: 'https://tabnet.datasus.gov.br/tabdata/livroidb/2ed/indicadores.pdf.',
    },
  ],
};
