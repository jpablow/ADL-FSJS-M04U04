import { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Buscar from './BuscarComp';
import Agregar from './AgregarComp';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './colabs.json';
import ListGroup from 'react-bootstrap/ListGroup';

function Colaboradores() {
  const [arregloColabs, setArregloColabs] = useState(data);
  const [colabs, setColabs] = useState(data);
  console.log(arregloColabs);

  useEffect(() => {
    setColabs(arregloColabs);
  }, [arregloColabs]);

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
                <Agregar
                  setArregloColabs={setArregloColabs}
                  arregloColabs={arregloColabs}
                />
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
