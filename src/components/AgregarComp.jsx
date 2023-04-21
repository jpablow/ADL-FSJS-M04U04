import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import data from './colabs.json';

function Agregar() {
  const [arregloColabs, setArregloColabs] = useState(data);
  const [nuevoColabNombre, setNuevoColabNombre] = useState('');
  const [nuevoColabCorreo, setNuevoColabCorreo] = useState('');

  const handleChange = (e) => {
    e.target.name === 'nombre'
      ? setNuevoColabNombre(e.target.value)
      : e.target.name === 'correo'
      ? setNuevoColabCorreo(e.target.value)
      : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloColabs([
      ...arregloColabs,
      {
        id: (arregloColabs.length + 1).toString(),
        nombre: nuevoColabNombre,
        correo: nuevoColabCorreo,
      },
    ]);
  };

  return (
    <Form
      className="my-5"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <FloatingLabel
        controlId="floatingName"
        label="Nombre del Colaborador"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="Nombre del Colaborador"
          name="nombre"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingEmail"
        label="Correo electrónico"
        className="mb-3"
      >
        <Form.Control
          type="email"
          placeholder="Correo electrónico"
          name="correo"
          onChange={(e) => {
            handleChange(e);
          }}
        />
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
