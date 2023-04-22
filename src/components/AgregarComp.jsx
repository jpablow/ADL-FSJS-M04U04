import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Agregar({ setArregloColabs, arregloColabs }) {
  const [nuevoColabNombre, setNuevoColabNombre] = useState('');
  const [nuevoColabCorreo, setNuevoColabCorreo] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleNew = () => {
    setNuevoColabNombre('');
    setNuevoColabCorreo('');
  };

  const handleChange = (e) => {
    e.target.name === 'nombre'
      ? setNuevoColabNombre(e.target.value)
      : e.target.name === 'correo'
      ? setNuevoColabCorreo(e.target.value)
      : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevoColabNombre === '' || nuevoColabCorreo === '') {
      alert('Debe ingresar los datos del Colaborador para poder agregarlo');
      return;
    } else {
      setArregloColabs([
        ...arregloColabs,
        {
          id: (arregloColabs.length + 1).toString(),
          nombre: nuevoColabNombre,
          correo: nuevoColabCorreo,
        },
      ]);
      handleShow();
      e.target.reset();
    }
  };

  return (
    <>
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
            autoComplete="off"
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
            autoComplete="off"
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
      <Modal show={show} onHide={handleClose} onExited={handleNew}>
        <Modal.Header closeButton>
          <Modal.Title>Colaborador agregado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Se agregó un nuevo colaborador con los siguientes datos:<br></br>
          <br></br>
          Nombre: {nuevoColabNombre}
          <br></br>
          Correo: {nuevoColabCorreo}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Agregar;
