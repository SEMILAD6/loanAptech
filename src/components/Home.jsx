import react from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to LoanAptech</h1>
        <p className="hero-subtitle">
         Get instant personal loans up to $50,000 with low interest rates and flexible repayment options.
        </p>
        <Link to="/signup" className="hero-cta-btn">
          Apply now, It's Free
        </Link>
      </section>

      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">Lightning Fast</div>
          <h3>Lightning Fast Approval</h3>
          <p>Experience lightning-fast performance with our optimized solutions.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">No Paperwork</div>
          <h3>No Paperwork <br/> Required</h3>
          <p>Enjoy a streamlined application process with no paperwork needed.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">Best Rates</div>
          <h3>Lowest Interest <br/> Rates</h3>
          <p>Enjoy competitive interest rates tailored to your financial situation.</p>
        </div>
      </section>

      <footer className="home-links">
        <p>
   Already applied? <Link to="/status" className="home-link"> Check Loan Status </Link><span> . </span> <Link to="/dashboard" className="home-link"> Go to Dashboard </Link>
        </p>
      </footer>
    </div>
  );
}