import React, {useEffect} from 'react';
import Layout from '../../components/layout/Layout';
import {Title} from '../../components/typography';
import * as S from './About.css';
import CircleDecoration from './components/CircleDecoration';
import CircleDecorationHero from './components/CircleDecorationHero';
import rudi from './img/rudi.jpg';
import leonardorosa from './img/leonardorosa.png';
import helena from './img/helena.jpg';
import vinicius from './img/vinicius_pecanha.jpg';
import marina from './img/mariana_santos.png';
import privacyPoliceFile from './img/politica-de-privacidade.pdf';
import Head from '../../components/Head';

let timer;

const IEPSTeam = [
  {
    id: '1',
    name: 'Rudi Rocha',
    role: 'Coordenação Técnica',
    img: rudi,
    expertise: 'Diretor de Pesquisa IEPS, Professor FGV-EAESP',
  },
  {
    id: '2',
    name: 'Leonardo Rosa',
    role: 'Coordenação Técnica',
    img: leonardorosa,
    expertise: 'Pesquisador IEPS',
  },
  {
    id: '3',
    name: 'Helena Arruda',
    role: 'Coordenação Técnica',
    img: helena,
    expertise: 'Pesquisadora IEPS',
  },
  {
    id: '4',
    name: 'Vinícius Peçanha',
    role: 'Coordenação Técnica',
    img: vinicius,
    expertise: 'Pesquisador IEPS',
  },
  {
    id: '5',
    name: 'Mariana Santos',
    role: 'Assistente de Pesquisa',
    img: marina,
    expertise: 'Estagiária IEPS',
  },
];

const About = ({location}) => {
  useEffect(() => {
    if (location.href.includes('#conditionTerms')) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        window.scrollTo(0, 1700);
      }, 100);
    }

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Layout location={location}>
      <Head siteTitle="Sobre o IEPS"></Head>
      <S.Block>
        <S.ContentBackground>
          <CircleDecoration/>
        </S.ContentBackground>
        <S.About>
          <S.HeroBlock>
            <Title>Sobre o IEPS Data</Title>
            <S.Hero>
              <S.HeroTitle>
                O IEPS Data nasceu para facilitar o acesso e a interpretação de
                indicadores de saúde no Brasil.
              </S.HeroTitle>
              <S.HeroParagraph>
                O IEPS Data é uma iniciativa do{' '}
                <strong>
                  <a href='https://ieps.org.br/' target='_blank' rel="noreferrer">Instituto de Estudos para Políticas de Saúde (IEPS)</a>,
                </strong>{' '}
                uma organização sem fins lucrativos, independente e apartidária,
                cujo único objetivo é contribuir para o{' '}
                <strong>aprimoramento das políticas públicas</strong> do setor
                de saúde no Brasil. O IEPS defende a ideia de que toda a
                população brasileira deva ter acesso à{' '}
                <strong>saúde de qualidade</strong> e que o uso de recursos e a
                regulação do sistema de saúde sejam os mais efetivos possíveis.
                Acreditamos que a melhor maneira de alcançar o nosso propósito é
                através de políticas públicas baseadas em evidências,
                desenhadas, implementadas e{' '}
                <strong>monitoradas de maneira transparente.</strong>
              </S.HeroParagraph>
            </S.Hero>
            <S.HeroBackground>
              <CircleDecorationHero/>
            </S.HeroBackground>
          </S.HeroBlock>

          <div>
            <S.SubTitle>Equipe IEPS Data</S.SubTitle>
            <S.Members>
              {IEPSTeam.map((member) => (
                <li key={member.id}>
                  <S.Member>
                    <S.Role>{member.role}</S.Role>
                    <S.Img src={member.img} alt={member.name}/>
                    <S.Name>{member.name}</S.Name>
                    <S.Expertise>{member.expertise}</S.Expertise>
                  </S.Member>
                </li>
              ))}
            </S.Members>
          </div>
          <S.Content>
            <S.ContentBlock>
              <S.SubTitle>Agradecimentos</S.SubTitle>
              <S.Paragraph>
                Agradecemos os comentários e sugestões de Antônio José Leal
                Costa, Guilherme Werneck, Marco Akerman, Margareth Portela,
                Luciana Servo, Márcio de Paula, Tássia Holguin, Tatiana Lima,
                Antônio Tadeu Ribeiro de Oliveira, Eduardo Rosseti, Denise
                Porto, Celia Landmann Szwarcwald, Mônica Viegas, Wanessa Almeida
                e Rodrigo Pucci de Sá e Benevides.
                <br/>
                <br/>
                Agradecemos também a contribuição de colaboradores que fizeram 
                parte da equipe do IEPS em algum momento: Beatriz Rache (Coordenação 
                Técnica, 2021 - 2022), Letícia Nunes (Coordenação Técnica, 2021), 
                Fernando Falbel (Assistente de Pesquisa, 2021), Maria Vitória Cruz 
                (Assistente de Pesquisa, 2021-2022), Bianca Ji (Assistente de Pesquisa, 2022-2023), 
                Matías Mrejen (Coordenação Técnica, 2021-2023), Maria Cristina Franceschini 
                (Coordenação Operacional, 2021-2023).
                <br/>
                <br/>A equipe do IEPS Data assume total responsabilidade pelas
                decisões tomadas e eventuais equívocos no cálculo e documentação
                dos indicadores.
              </S.Paragraph>
            </S.ContentBlock>
            <S.ContentBlock>
              <S.SubTitle>Contato</S.SubTitle>
              <S.Paragraph>
                Caso o(a) visitante identifique alguma informação que possa ser
                enquadrada como erro ou imprecisão, poderá reportá-la pelo
                e-mail iepsdata@ieps.org.br.
              </S.Paragraph>
            </S.ContentBlock>
            <S.ContentBlock>
              <S.SubTitle id="conditionTerms">
                Política de privacidade
              </S.SubTitle>
              <S.Paragraph>
                Consulte nossa política de privacidade e de condições para
                visitas ao site{' '}
                <a download href={privacyPoliceFile}>
                  neste link
                </a>
                . Os(as) visitantes podem copiar e redistribuir o material
                disponibilizado pelo IEPS, sem autorização prévia, mediante
                citação da fonte. O IEPS poderá realizar alterações no conteúdo
                veiculado por suas páginas, a qualquer tempo, sem prévio aviso.
              </S.Paragraph>
            </S.ContentBlock>
          </S.Content>
        </S.About>
      </S.Block>
    </Layout>
  );
};

export default About;
