import React from 'react';
import './App.css';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Terms from './components/Terms.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<About />} />  {/* Replace with <Home /> once you create it */}
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Terms" element={<Terms />} />  {/* Add this route for Terms of Service */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;