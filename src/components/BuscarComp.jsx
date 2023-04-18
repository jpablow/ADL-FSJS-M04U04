import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Buscar() {
  return (
    <Form>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Escribe el nombre de un Colaborador"
          aria-label="Escribe el nombre de un Colaborador"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-danger" id="button-addon2" type="reset">
          Borrar
        </Button>
      </InputGroup>
    </Form>
  );
}

export default Buscar;
