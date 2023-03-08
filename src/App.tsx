import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <div>
        <Route path="/" element={<Home />} />
        </div>
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
