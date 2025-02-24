import React from 'react';
import Layout from '../../components/layout/Layout';
import { Title } from '../../components/typography';
import LastProject from './components/LastProject';

import * as S from './ProjectsGallery.css';

import projectsData from './data';
import Head from '../../components/Head';

const ProjectsGallery = ({ location }) => (
  <Layout location={location}>
    <Head siteTitle="Galeria de Projetos"></Head>
    <S.Container>
      <S.Warpper>
        <Title style={{ marginLeft: '6.3rem' }}>Galeria de Projetos</Title>
        <S.Subtitle>
          <h2>
            Curadoria do IEPS de projetos de pesquisadores e organizações <br />
            voltadas à melhoria da qualidade da saúde no Brasil
          </h2>
        </S.Subtitle>
        {projectsData.map((project) => {
          return (
            <LastProject
              key={project.title}
              title={project.title}
              description={project.description}
              projectUrl={project.projectUrl}
              img={project.img}
              imgAlt={project.imgAlt}
              isNew={project.isNew}
            />
          );
        })}
        <S.ProjectsList>
          {/* {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            projectUrl={project.projectUrl}
            img={project.img}
            imgAlt={project.imgAlt}
          />
        ))} */}
        </S.ProjectsList>
        <S.Footer>
          {/* <S.ButtonShowMore>Carregar mais projetos</S.ButtonShowMore> */}
        </S.Footer>
      </S.Warpper>
    </S.Container>
  </Layout>
);

export default ProjectsGallery;
