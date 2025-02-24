import obesidade from './assets/obesidade.png';
import regionalizacao from './assets/regionalizacao.png';

const projectsData = [
  {
    isNew: true,
    title: 'FluxSUS - Painel de Regionalização',
    description:
      'Esta plataforma tem como objetivo promover análises do processo de regionalização da saúde utilizando dados de fluxos de pacientes entre municípios brasileiros de 2010 a 2022, a partir do Sistema de Informações Hospitalares do SUS (SIHSUS). Através de técnicas de sistemas complexos, analisamos a rede de movimentação de pacientes propondo meios de avaliação e visualização do comportamento das regiões de saúde em cada estado brasileiro.',
    img: regionalizacao,
    imgAlt: 'A Epidemia de Obesidade e as DCNT',
    projectUrl: 'https://fluxsus.iepsdata.org.br/',
  },
  {
    isNew: false,
    title: 'A Epidemia de Obesidade e as DCNT',
    description:
      'No Brasil, a prevalência de excesso de peso aumentou de 42,6% em 2006 para 55,4% em 2019. Em 2019, o gasto anual direto com doenças crônicas não transmissíveis (DCNT) no Brasil foi de R$ 6,8 bilhões. Em sua pesquisa, o grupo liderado pelo professor Leandro Rezende (EPM/UNIFESP), estimou que 22% desse valor, R$ 1,5 bilhão, podem ser atribuíveis ao excesso de peso e obesidade. Nesse painel, entenda a epidemia de obesidade e explore os resultados da pesquisa por grupo de DCNT ou estado no Brasil.',
    img: obesidade,
    imgAlt: 'A Epidemia de Obesidade e as DCNT',
    projectUrl: '/obesidade-e-as-dcnt/index.html',
  },
];

export default projectsData;
