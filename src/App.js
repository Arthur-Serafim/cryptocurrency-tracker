import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home</h2>
}

function App() {
  return (
    <Router>
      <Route exact  path='/' component={Home} />
    </Router>
  );
}

export default App;
