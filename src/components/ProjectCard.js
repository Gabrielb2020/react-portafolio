import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  const content = (
    <>
      <img src={imgUrl} alt={link ? 'Vista previa de ' + title : ''} aria-hidden={!link} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
        <small>{link ? 'Ver proyecto ↗' : 'Experiencia profesional'}</small>
      </div>
    </>
  );

  return (
    <Col sm={6} md={4} className="project-card-col">
      <div className="proj-imgbx">
        {link ? <a className="project-link" href={link} target="_blank" rel="noreferrer" aria-label={'Abrir ' + title}>{content}</a> : <div className="project-link project-link-static">{content}</div>}
      </div>
    </Col>
  );
};
