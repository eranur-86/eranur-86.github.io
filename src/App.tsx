import React, { Suspense } from "react";
import {NavElement} from "./navigation/navbar"
import { Container, Row, Col } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import { HOME, PROJEKTE, SKILLS } from "./navigation/navgoals";
import ProjektPage from "./projekte/projektPage";

const App = () => {

  const SkillPage = React.lazy(() => import('./skills/skillPage'));
  //const ProjektPage = React.lazy(() => import('./projekte/projektPage'));

  return (
    <div>
      <NavElement/>
      <Suspense fallback={
      <div>
        <NavElement/>
        <div>Loading...</div>
      </div>}>
      <Container fluid>
        <Switch>
          <Route path={SKILLS}><SkillPage/></Route>
          <Route path={PROJEKTE}><ProjektPage/></Route>
          <Route path={HOME} exact></Route>
        </Switch>
      </Container>
      </Suspense>
    </div>
  );
}

const containerTest = () => {
  return(
    <Row md={12}>
  <Col md={2} sm={1} id="sidebar_left">
  Placeholder
  </Col>
  <Col id="content">
  Placeholder
  </Col>
</Row>
  )
}

export default App;
