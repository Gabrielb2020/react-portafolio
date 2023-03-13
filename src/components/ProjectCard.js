import React  from 'react';
import {Col} from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
      <Col sm={6} md={4}>
          <div className="proj-imgbx">
              <a id="link" href={link}>
                  <img src={imgUrl} />
                  <div className="proj-txtx">
                      <h4>{title}</h4>
                      <span>{description}</span>
                  </div>
              </a>
          </div>
      </Col>
  )
}