import React  from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Col, Container, Row} from "react-bootstrap";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
export const About = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="about">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Sobre Mí
                            </h2>
                            <p className="parrafo">Desarrollador Backend y Frontend. En conocimientos de lenguaje de programación PHP, Javascript, Ruby. Framework Laravel, ReactJS, NextJS, Ruby on Rails, Graphql, diseño de Base de Datos relacionales (SQL, MySql) para el desarrollo de Aplicaciones y Páginas web.
                                <br/>
                                Soy una persona siempre dispuesta aprender nuevas cosas, me gustan los retos. La empatía y perseverancia son unas de mis cualidades más resaltante, siempre me pongo en el lugar de las personas y trato de entender el porqué de las cosas, comprender situaciones de la vida o decisiones sin juzgar a nadie. <br/> Perseverante porque soy un hombre lleno de metas a corto y largo plazo trabajo en pro hasta terminar de lógralas.
                                <br/>
                                Hay una frase que me gusta mucho y que aplica de manera general y es lo que dijo Martin Luther King Jr.<em> "Tus talentos y habilidades irán mejorando con el tiempo, pero para eso has de empezar"</em>, esta se refiere a la importancia de comenzar a trabajar en nuestras metas y sueños, incluso si no nos sentimos completamente preparados o seguros de nuestras habilidades. El mensaje detrás de esta cita es que el crecimiento personal y el desarrollo de habilidades son un proceso continuo que requiere tiempo y esfuerzo. <br/>
                                Esta frase nos recuerda que no debemos permitir que el miedo o la inseguridad nos detengan en la búsqueda de nuestros sueños y metas. En lugar de eso, debemos tener confianza en nuestras habilidades y dar el primer paso hacia nuestros objetivos, sabiendo que podemos mejorar y crecer a lo largo del camino.
                                <br/>
                                <br/>
                                <em>"Siempre comprometido con mis metas y sueños y por supuesto con la verdadera sinceridad."</em> - Gabriel Bustamante</p>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}