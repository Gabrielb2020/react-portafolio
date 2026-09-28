import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Project = () => {
  const projects = [
    {
      category: 'experiencia',
      title: 'Plataforma SaaS multitenant',
      description: 'Evolución de una plataforma para múltiples empresas con Ruby on Rails, PostgreSQL, autenticación, autorización, APIs e integraciones.',
      imgUrl: projImg1,
      link: null
    },
    {
      category: 'experiencia',
      title: 'Sistema de compras y aprobaciones',
      description: 'API en Rails y frontend en Next.js para crear órdenes, gestionar aprobaciones y hacer seguimiento del proceso.',
      imgUrl: projImg2,
      link: null
    },
    {
      category: 'publicos',
      title: 'SigeTurbo',
      description: 'Aplicación web académica para apoyar la gestión de procesos escolares.',
      imgUrl: projImg3,
      link: 'https://sigeturbo.thenewschool.edu.co/'
    },
    {
      category: 'publicos',
      title: 'MercaApp',
      description: 'Aplicación de ventas de productos con catálogo y flujo de pago.',
      imgUrl: projImg1,
      link: 'https://github.com/Gabrielb2020/MercaApp'
    },
    {
      category: 'publicos',
      title: 'InstaPhoto',
      description: 'Proyecto de práctica inspirado en una red social, construido con PHP y Laravel.',
      imgUrl: projImg2,
      link: 'https://github.com/Gabrielb2020/InstaPhoto'
    },
    {
      category: 'aprendizaje',
      title: 'Algoritmos y lógica',
      description: 'Ejercicios de lógica y resolución de problemas con JavaScript.',
      imgUrl: projImg3,
      link: 'https://github.com/Gabrielb2020'
    }
  ];

  const renderProjects = (category) => (
    <Row>
      {projects.filter((project) => project.category === category).map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Row>
  );

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <div className="section-heading centered">
                    <span className="eyebrow">Trabajo seleccionado</span>
                    <h2>Proyectos que muestran cómo trabajo.</h2>
                    <p>Una mezcla de experiencia aplicada, proyectos públicos y ejercicios que representan mi evolución como desarrollador.</p>
                  </div>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item><Nav.Link eventKey="first">Experiencia aplicada</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="second">Proyectos públicos</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="third">Aprendizaje</Nav.Link></Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">{renderProjects('experiencia')}</Tab.Pane>
                      <Tab.Pane eventKey="second">{renderProjects('publicos')}</Tab.Pane>
                      <Tab.Pane eventKey="third">{renderProjects('aprendizaje')}</Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" aria-hidden="true" />
    </section>
  );
};
