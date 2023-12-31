
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'

import './index.css';
import TopNavBar from './components/TopNavBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
    </Router>
  );
}

export default App;