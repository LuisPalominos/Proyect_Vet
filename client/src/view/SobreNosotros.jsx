import React from "react";
import PageTemplate from "../template/PageTemplate";
import procedimientos from "../assets/procedimientos.jpg";
import vision from "../assets/Pepita.jpg"
import futuro from "../assets/vetTeacher.jpg"

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const SobreNosotros = () => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------

  // ---------------------------------------------
  // II) HANDLERS & AUX FUNCTIONS
  // ---------------------------------------------

  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
  return (
    <div>
      <PageTemplate>
        <div className="container mb-5">
          <h1 className="text-center my-5">Sobre Nosotros</h1>
          <hr className="border border-3 border-success opacity-50" />
          <p className="fs-4">
            Clínica veterinaria Pepita, nace en febrero de 2010, con el objetivo
            de formar un centro de especialidades, razón por la cual con mucho
            esfuerzo y pasión por nuestro trabajo hemos implementado
            progresivamente nuestra clínica tanto con la mejor tecnologia como
            con un valioso equipo humano de profesionales, médicos veterinarios
            y técnicos que participan tanto en labores administrativas,
            diagnósticas como en soporte quirúrgico y hospitalario.
          </p>
        </div>
        <div className="container d-flex justify-content-between">
          <Card style={{ width: "18rem"}} bg="success" text="white" border="success">
            <Card.Img variant="top" src={procedimientos} style={{height: "10rem" }}/>
            <Card.Body>
              <Card.Title>
                Algunos de los procedimeintos realizados en nuestra institucion
                son:
              </Card.Title>
              <Card.Text>
                <ListGroup as="ol" numbered >
                  <ListGroup.Item as="li" variant="success">
                    Toma de Examenes de orina
                  </ListGroup.Item>
                  <ListGroup.Item as="li" variant="success">
                    Toma de Examenes de sangre
                  </ListGroup.Item>
                  <ListGroup.Item as="li" variant="success">Desparacitacion</ListGroup.Item>
                  <ListGroup.Item as="li" variant="success">Radiografias</ListGroup.Item>
                  <ListGroup.Item as="li" variant="success">
                    Baño y limpieza general
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem"}} bg="success" text="white" border="success">
            <Card.Img variant="top" src={vision} style={{height: "10rem" }} />
            <Card.Body>
              <Card.Title>Mision</Card.Title>
              <Card.Text>
                Como clínica veterinaria Pepita nuestra misión es satisfacer de
                manera eficaz y eficiente las necesidades de salud y bienestar
                de las mascotas y la tranquilidad de sus familias. Para ello,
                entregaremos la mejor medicina basada en la evidencia
                científica, la implementación de tecnologías y decisiones
                éticas.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} bg="success" text="white" border="success">
            <Card.Img variant="top" src={futuro} style={{height: "10rem" }}/>
            <Card.Body>
              <Card.Title>Hacia Futuro</Card.Title>
              <Card.Text>
                Somos un “centro veterinario alero” en la formación educacional
                y de apoyo profesional para las nuevas generaciones de técnicos
                y médicos veterinarios. Así ponemos nuestro sello valórico y
                ético en nuestro entorno.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </PageTemplate>
    </div>
  );
};

export default SobreNosotros;
