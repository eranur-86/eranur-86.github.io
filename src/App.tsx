import {NavElement} from "./tools/navbar"
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <NavElement/>
      <Container fluid>
        <Row md={12}>
          <Col md={2} sm={1} id="sidebar_left">
          Placeholder
          </Col>
          <Col id="content">
          Placeholder
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
