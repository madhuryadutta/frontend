import { Routes, Route } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import Account from "./Account";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>React Authentication Tutorial</h1>

          <section id="navigation">
            <a href="/">Home</a>
            <a href="/free">Free Component</a>
            <a href="/auth">Auth Component</a>
          </section>
        </Col>
      </Row>
      <Router>
        <Fragment>
          {/* create routes here */}
          <Routes>
            <Route exact path="/" component={<Account />} />
            <Route exact path="/free" component={<FreeComponent />} />
            <Route exact path='/auth' element={<ProtectedRoutes />}>
              <Route exact path='/auth' element={<AuthComponent />} />
            </Route>
            {/* <ProtectedRoutes path="/auth" component={<AuthComponent />} /> */}
          </Routes>
      </Router>
    </Fragment>
            </Container >
            );
}

export default App;