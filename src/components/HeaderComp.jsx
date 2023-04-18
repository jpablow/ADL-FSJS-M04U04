import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Buscador de Colaboradores</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
