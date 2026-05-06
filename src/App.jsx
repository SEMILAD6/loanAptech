import React from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Terms from './components/Terms.jsx';
import Footer from './components/Footer.jsx';
import Faq from './components/Faq.jsx';
import Home from './components/Home.jsx';
import  Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import ApplyLoan from './components/ApplyLoan.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />  {/* Use Home component for the root path */}
          <Route path="/signup" element={<Signup />} />  {/* Add this route for Signup */}
          <Route path="/login" element={<Login />} />  {/* Add this route for Login */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<Faq />} />  {/* Add this route for FAQ */}
          <Route path="/dashboard" element={<Dashboard />} />  {/* Add this route for Dashboard */}
          <Route path="/apply" element={<ApplyLoan />} />  {/* Add this route for Apply */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;