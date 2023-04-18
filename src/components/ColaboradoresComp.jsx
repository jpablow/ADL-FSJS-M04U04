import Accordion from 'react-bootstrap/Accordion';
import Buscar from './BuscarComp';
import Agregar from './AgregarComp';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Colaboradores() {
  return (
    <Container fluid="lg">
      <Accordion defaultActiveKey={['2']} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Agrega un Colaborador</Accordion.Header>
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
        <Accordion.Item eventKey="2">
          <h5 className="mt-3 text-center">Lista de Colaboradores</h5>
          <Row>
            <Col></Col>
            <Col xs={12} md={10} lg={10} xl={10} xxl={8}>
              <Accordion.Body as="div">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                itaque reiciendis vel eligendi error ad quibusdam officiis iste,
                nihil, rerum incidunt eum voluptate fuga temporibus quas commodi
                doloremque voluptatum exercitationem praesentium provident porro
                tempora sequi in quo! Temporibus veritatis saepe vel recusandae
                dolorum corporis natus quisquam, inventore quasi architecto
                quae!
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
