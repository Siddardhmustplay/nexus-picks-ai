
import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="lottonexus-bg min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="glass-card p-5">
              <div className="number-ball mx-auto mb-4" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                404
              </div>
              <h1 className="neon-text mb-3" style={{ fontFamily: 'Orbitron' }}>
                Page Not Found
              </h1>
              <p className="mb-4" style={{ color: 'var(--lottonexus-white)' }}>
                The page you're looking for seems to have vanished into the digital void.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <a href="/" className="btn btn-electric">
                  <Home size={16} className="me-2" />
                  Back to Home
                </a>
                <button className="btn btn-outline-light" onClick={() => window.history.back()}>
                  <ArrowLeft size={16} className="me-2" />
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
