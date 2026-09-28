import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import logonuevo from '../assets/img/logonuevo.png';

export const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <Col sm={6}><img src={logonuevo} alt="Gabriel Bustamante" /></Col>
        <Col sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/gabriel-anibal-bustamante-gamardo-8206461b5/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
            <a href="https://github.com/Gabrielb2020" target="_blank" rel="noreferrer"><img src={navIcon2} alt="GitHub" /></a>
          </div>
          <p>© {new Date().getFullYear()} Gabriel Bustamante. Todos los derechos reservados.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);
