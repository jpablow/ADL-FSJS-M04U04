import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Agregar() {
  return (
    <Form>
      <FloatingLabel
        controlId="floatingName"
        label="Nombre del Colaborador"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Nombre del Colaborador" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingEmail"
        label="Correo electrónico"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Correo electrónico" />
      </FloatingLabel>
      <div className="d-grid gap-2">
        <Button variant="primary" type="submit">
          Agregar Colaborador
        </Button>
      </div>
    </Form>
  );
}
export default Agregar;
