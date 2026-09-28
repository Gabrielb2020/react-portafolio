import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle, Github, Linkedin } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const ROLES = ['Full Stack Software Developer', 'Especialista en Ruby on Rails'];

export const Banner = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 45 : 95;
    const pause = !isDeleting && text === currentRole ? 1800 : typingSpeed;
    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((index) => (index + 1) % ROLES.length);
      } else {
        setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, pause);

    return () => clearTimeout(timer);
  }, [isDeleting, roleIndex, text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <span className="tagline">Disponible para nuevos retos</span>
                  <h1>Hola, soy Gabriel.<br /><span>{text}</span></h1>
                  <p>Desarrollador Full Stack con 5 años de experiencia construyendo productos web en producción. Me especializo en Ruby on Rails, SaaS multitenant, APIs, PostgreSQL e integraciones con servicios externos.</p>
                  <div className="banner-actions">
                    <a className="primary-button" href="#project">Ver proyectos <ArrowRightCircle size={22} /></a>
                    <a className="secondary-button" href="mailto:gabgamardo25@gmail.com">Hablemos</a>
                  </div>
                  <div className="hero-links" aria-label="Enlaces profesionales">
                    <a href="https://www.linkedin.com/in/gabriel-anibal-bustamante-gamardo-8206461b5/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
                    <a href="https://github.com/Gabrielb2020" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={5} xl={5}>
            <div className="hero-illustration">
              <img src={headerImg} alt="Ilustración de desarrollo de software" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
