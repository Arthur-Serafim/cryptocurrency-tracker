import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './views/Home.js'
import Navbar from './components/Navbar'
import GlobalTracker from './components/GlobalTracker'

import { Container } from './AppStyles.js'

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <GlobalTracker />
        <Route exact path="/" component={Home} />
      </Container>
    </Router>
  )
}

export default App
