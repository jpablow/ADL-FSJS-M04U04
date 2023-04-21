import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Buscar from './BuscarComp';
import Agregar from './AgregarComp';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './colabs.json';
import ListGroup from 'react-bootstrap/ListGroup';
import { Badge, ListGroupItem } from 'react-bootstrap';

function Colaboradores() {
  const [colabs, setColabs] = useState(data);

  return (
    <Container fluid="lg" className="mt-3">
      <Accordion defaultActiveKey={['2']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="fs-1">
            Agrega un Colaborador
          </Accordion.Header>
          <Row>
            <Col></Col>
            <Col xs={12} md={10} lg={10} xl={10} xxl={8}>
              <Accordion.Body>
                <Agregar />
              </Accordion.Body>
            </Col>
            <Col></Col>
          </Row>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Busca un Colaborador</Accordion.Header>
          <Row>
            <Col></Col>
            <Col xs={12} md={10} lg={10} xl={10} xxl={8}>
              <Accordion.Body>
                <Buscar />
              </Accordion.Body>
            </Col>
            <Col></Col>
          </Row>
        </Accordion.Item>
        {/* <Accordion.Item eventKey="1">
        <Accordion.Header>Lista de Colaboradores</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item> */}
        <Accordion.Item eventKey="2" className="py-4">
          <h5 className="pt-4 text-center">Lista de Colaboradores</h5>
          <Row>
            <Col></Col>
            <Col xs={10} md={8} lg={8} xl={7} xxl={6}>
              <Accordion.Body as="div">
                {colabs.map((colab) => (
                  <ListGroup key={colab.id}>
                    <ListGroup.Item variant="info" className="wrap">
                      {colab.nombre}
                    </ListGroup.Item>
                    <ListGroup.Item className="mb-2 wrap">
                      {colab.correo}
                    </ListGroup.Item>
                  </ListGroup>
                ))}
              </Accordion.Body>
            </Col>
            <Col></Col>
          </Row>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default Colaboradores;
