import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Apropos from './pages/Apropos/index'
import Header from './components/Header/index'
import Home from './pages/Home/index'
import Footer from './components/Footer/index'
import Appartment from './pages/Appartment/index'
import Error from './pages/Error/index'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/appartement/:id" element={<Appartment />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
