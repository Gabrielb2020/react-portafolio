import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Envelope, Github, Linkedin } from 'react-bootstrap-icons';

export const Contact = () => (
  <section className="contact" id="connect">
    <Container>
      <Row className="align-items-center">
        <Col lg={7}>
          <span className="eyebrow">Contacto</span>
          <h2>¿Hablamos de tu próximo proyecto?</h2>
          <p>Estoy abierto a oportunidades remotas, contratos por prestación de servicios y colaboraciones en desarrollo web.</p>
        </Col>
        <Col lg={5}>
          <div className="contact-card">
            <a href="mailto:gabgamardo25@gmail.com"><Envelope size={22} /> gabgamardo25@gmail.com</a>
            <a href="https://www.linkedin.com/in/gabriel-anibal-bustamante-gamardo-8206461b5/" target="_blank" rel="noreferrer"><Linkedin size={22} /> LinkedIn</a>
            <a href="https://github.com/Gabrielb2020" target="_blank" rel="noreferrer"><Github size={22} /> GitHub</a>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);
