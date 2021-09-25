import { Navbar, Container, Nav } from "react-bootstrap"
import { HOME, PROJEKTE, SKILLS } from "./navgoals"
 

export const NavElement = () => {

return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container fluid>
    <Navbar.Brand href={HOME}>thkratzer</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href={SKILLS}>Skills</Nav.Link>
        <Nav.Link href={PROJEKTE}>Projekte</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
)}