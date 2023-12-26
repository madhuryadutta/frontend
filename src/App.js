import { Switch, Route } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
// import Account from "./Account";
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

      {/* create routes here */}
      <Switch>
        {/* <Route exact path="/" component={Account} /> */}
        <Route exact path="/free" component={FreeComponent} />
        <ProtectedRoutes path="/auth" component={AuthComponent} />
      </Switch>
    </Container>
  );
}

export default App;

// import React, { Fragment } from "react";
// import { Container, Col, Row } from "react-bootstrap";
// import { Routes, Route } from "react-router-dom";

// import "./App.css";
// import Register from "./Register";
// import Login from "./Login";
// // import Account from "./Account";
// import FreeComponent from "./FreeComponent";
// import AuthComponent from "./AuthComponent";
// import ProtectedRoutes from "./ProtectedRoutes";

// function App() {
//   return (
//     <Container>
//       <Row>
//         <Col className="text-center">
//           <h1>React Authentication Tutorial</h1>

//           <section id="navigation">
//             <a href="/">Home</a>
//             <a href="/free">Free Component</a>
//             <a href="/auth">Auth Component</a>
//           </section>
//         </Col>
//       </Row>
//       {/* create routes here */}
//       <Routes>
//         {/* <Rsoute exact path="/" element={<Account />} /> */}
//         <Route exact path="/free" element={FreeComponent} />
//         <Fragment>
//           <ProtectedRoutes path="/auth" element={<AuthComponent />} />
//         </Fragment>
//       </Routes>
//     </Container>
//   );
// }

// export default App;
