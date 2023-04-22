import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Buscar({ setBuscaColab }) {
  const handleChange = (e) => {
    setBuscaColab(e.target.value);
  };
  return (
    <Form className="my-4">
      <InputGroup>
        <Form.Control
          placeholder="Escribe el nombre de un Colaborador"
          onChange={handleChange}
        />
        <Button
          variant="outline-danger"
          id="button-addon2"
          type="reset"
          onClick={handleChange}
        >
          Borrar
        </Button>
      </InputGroup>
    </Form>
  );
}

export default Buscar;
