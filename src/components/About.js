import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const About = () => (
  <section className="about" id="about">
    <Container>
      <Row>
        <Col>
          <div className="section-heading">
            <span className="eyebrow">Perfil profesional</span>
            <h2>Construyo soluciones útiles, mantenibles y listas para crecer.</h2>
          </div>
          <div className="about-content">
            <p>Desarrollador Full Stack con experiencia de extremo a extremo: desde entender el problema y proponer una solución, hasta desarrollar, probar, desplegar y dar soporte a una aplicación.</p>
            <p>Mi fortaleza está en Ruby on Rails y en la construcción de plataformas SaaS multitenant, APIs e integraciones con servicios externos. También trabajo con Laravel, React, Next.js, PostgreSQL y Docker.</p>
            <div className="about-highlights">
              <span>5+ años de experiencia</span>
              <span>Productos en producción</span>
              <span>Trabajo remoto</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);
