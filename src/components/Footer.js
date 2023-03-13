import React  from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {MailchimpForm} from "./MailchimpForm";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import logonuevo from '../assets/img/logonuevo.png';

export const Footer = () => {
  return (
      <footer className="footer">
          <Container>
              <Row className="align-items-center">
                  <MailchimpForm />
                  <Col sm={6}>
                      <img src={logonuevo} alt={logonuevo}/>
                  </Col>
                  <Col sm={6} className="text-center text-sm-end">
                      <div className="social-icon">
                          <a href="https://www.linkedin.com/in/gabriel-anibal-bustamante-gamardo-8206461b5/"><img src={navIcon1} /></a>
                          <a href=""><img src={navIcon2} /></a>
                          <a href=""><img src={navIcon3} /></a>
                      </div>
                      <p>CopyRight 2023. All Rigth reserved</p>
                  </Col>
              </Row>
          </Container>
      </footer>
  );
}