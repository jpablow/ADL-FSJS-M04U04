import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

const ListaColab = ({ buscaColab, colabs }) => {
  return (
    <>
      <h4 className="pt-4 text-center">Lista de Colaboradores</h4>
      <Row>
        <Col></Col>
        <Col xs={10} md={8} lg={8} xl={7} xxl={6}>
          <Accordion.Body as="div">
            <p>{console.log(buscaColab)}</p>
            {colabs
              .filter((colab) =>
                colab.nombre
                  .toLowerCase()
                  .includes(buscaColab.toLocaleLowerCase())
              )
              .map((colab) => (
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
    </>
  );
};

export default ListaColab;
