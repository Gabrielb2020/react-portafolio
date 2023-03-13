import React  from 'react';
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import { ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Project = () => {

  const projects = [
    {
      title: "InstaPhoto",
      description: "Está es una replica de instagram creada en php y laravel",
      imgUrl: projImg1,
      link: "https://github.com/Gabrielb2020/InstaPhoto"
    },
    {
      title: "MercaApp",
      description: "Está es una aplicacion de ventas de productos con vista de pago",
      imgUrl: projImg2,
      link: "https://github.com/Gabrielb2020/MercaApp"
    },
    {
      title: "AlianzApp",
      description: "Está es una aplicacion de administrador de empleados",
      imgUrl: projImg3,
      link: "https://github.com/Gabrielb2020/alianzaAppWeb"
    },
    {
      title: "Portafolio Web",
      description: "Está es un portafolio creado con React JS",
      imgUrl: projImg1,
      link: "https://github.com/Gabrielb2020/InstaPhoto"
    },
    {
      title: "Algoritmos",
      description: "Estos problemas planteado y solucion de algoritmos con Javascript",
      imgUrl: projImg2,
      link: "https://github.com/Gabrielb2020/InstaPhoto"
    },
    {
      title: "SigeTurbo",
      description: "Esta es una aplicacion web academica",
      imgUrl: projImg3,
      link: "https://sigeturbo.thenewschool.edu.co/"
    }
  ]

  return (
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
              <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                      <h2>Projects</h2>
                      <p>Estos son algunos de mis projectos en los que he trabajado</p>
                      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">
                              Tab Three
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <Row>
                              {
                                projects.map((project, index) => {
                                  return (
                                      <ProjectCard
                                          key={index}
                                          {...project}
                                      />
                                  )
                                })
                              }
                            </Row>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} />
      </section>
  )
}