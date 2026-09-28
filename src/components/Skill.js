import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const Skill = () => {
  const skillGroups = [
    { title: 'Backend', skills: ['Ruby on Rails', 'Laravel / PHP', 'Node.js', 'NestJS', 'Django', 'APIs REST'] },
    { title: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'] },
    { title: 'Datos e infraestructura', skills: ['PostgreSQL', 'MySQL', 'Docker', 'Linux', 'Almacenamiento cloud', 'Diseño de bases de datos'] },
    { title: 'Herramientas', skills: ['Git', 'GitHub', 'Pundit', 'GraphQL', 'Pruebas', 'IA aplicada al desarrollo'] }
  ];

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skills-box">
              <div className="section-heading centered">
                <span className="eyebrow">Tecnologías</span>
                <h2>Herramientas que uso para convertir ideas en producto.</h2>
              </div>
              <div className="skill-grid">
                {skillGroups.map((group) => (
                  <div className="skill-group" key={group.title}>
                    <h3>{group.title}</h3>
                    <div className="skill-tags">
                      {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
