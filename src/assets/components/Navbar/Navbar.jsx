import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">EstiloAtemporal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#ofertas">Ofertas</Nav.Link>
            <NavDropdown title="Categorías" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#ropa-hombre">Ropa para Hombre</NavDropdown.Item>
              <NavDropdown.Item href="#ropa-mujer">Ropa para Mujer</NavDropdown.Item>
              <NavDropdown.Item href="#accesorios">Accesorios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#contacto">Contáctanos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#carrito">Carrito de Compras</Nav.Link>
            <Nav.Link eventKey={2} href="#contacto">
              Contáctanos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
