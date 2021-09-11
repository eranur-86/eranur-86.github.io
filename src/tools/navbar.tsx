import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap"
import { HOME } from "./navgoals"
 

export const NavElement = () => {

return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container fluid>
    <Navbar.Brand href={HOME}>Eranur-86.github.io</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#projekte">Projekte</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
)}