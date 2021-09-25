import React, { Suspense } from "react";
import {NavElement} from "./navigation/navbar"
import { Container} from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import { HOME, PROJEKTE, SKILLS } from "./navigation/navgoals";

const App = () => {

  const LandingPage = React.lazy(() => import('./landingPage'));
  const SkillPage = React.lazy(() => import('./skills/skillPage'));
  const ProjektPage = React.lazy(() => import('./projekte/projektPage'));

  return (
    <div>
      <NavElement/>
      <Suspense fallback={
      <div>
        <div>Loading...</div>
      </div>}>
      <Container fluid>
        <Switch>
          <Route path={SKILLS}><SkillPage/></Route>
          <Route path={PROJEKTE}><ProjektPage/></Route>
          <Route path={HOME} exact><LandingPage/></Route>
        </Switch>
      </Container>
      </Suspense>
    </div>
  );
}

// const containerTest = () => {
//   return(
//     <Row md={1}>
//   <Col xl={1} md={1} sm={1} id="sidebar_left">
//   Placeholder
//   </Col>
//   <Col id="content">
//   Placeholder
//   </Col>
// </Row>
//   )
// }

export default App;
