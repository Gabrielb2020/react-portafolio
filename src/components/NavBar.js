import React, { useEffect, useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Envelope, Github, Linkedin } from 'react-bootstrap-icons';
import logonuevo from '../assets/img/logonuevo.png';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="#home"><img src={logonuevo} alt="Gabriel Bustamante" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"><span className="navbar-toggler-icon" /></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('home')}>Inicio</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('about')}>Sobre mí</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('skills')}>Habilidades</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => setActiveLink('project')}>Proyectos</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/gabriel-anibal-bustamante-gamardo-8206461b5/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
              <a href="https://github.com/Gabrielb2020" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
              <a href="mailto:gabgamardo25@gmail.com" aria-label="Correo electrónico"><Envelope size={19} /></a>
            </div>
            <a className="vvd" href="mailto:gabgamardo25@gmail.com"><span>Hablemos</span></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
