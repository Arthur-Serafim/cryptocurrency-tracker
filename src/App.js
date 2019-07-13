import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./views/Home.js";
import { Container } from "./AppStyles.js";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Route exact path="/" component={Home} />
      </Container>
    </Router>
  );
}

export default App;
