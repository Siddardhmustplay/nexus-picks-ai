
import React from 'react';
import { MessageCircle, Mail, Globe, Shield, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-5 mt-5" style={{ 
      backgroundColor: 'var(--lottonexus-midnight)',
      borderTop: '1px solid var(--lottonexus-cyan)'
    }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <div className="number-ball me-3" style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
                ⚡
              </div>
              <span className="neon-text fw-bold" style={{ fontFamily: 'Orbitron', fontSize: '1.5rem' }}>
                LottoNexus
              </span>
            </div>
            <p style={{ color: 'var(--lottonexus-white)' }}>
              Your gateway to smarter lottery picks with AI-powered predictions and real-time analytics.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="btn btn-outline-light btn-sm">
                <MessageCircle size={16} className="me-1" />
                Discord
              </a>
              <a href="#" className="btn btn-outline-light btn-sm">
                <Mail size={16} className="me-1" />
                Telegram
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="neon-text mb-3">Features</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ color: 'var(--lottonexus-white)' }}>
                  Live Results
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ color: 'var(--lottonexus-white)' }}>
                  Smart Picks
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ color: 'var(--lottonexus-white)' }}>
                  Analytics
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ color: 'var(--lottonexus-white)' }}>
                  Past Draws
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="neon-text mb-3">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ color: 'var(--lottonexus-white)' }}>
                  How to Play
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ color: 'var(--lottonexus-white)' }}>
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ color: 'var(--lottonexus-white)' }}>
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ color: 'var(--lottonexus-white)' }}>
                  API Docs
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="neon-text mb-3">Legal</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ color: 'var(--lottonexus-white)' }}>
                  <FileText size={14} className="me-1" />
                  Terms of Use
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ color: 'var(--lottonexus-white)' }}>
                  <Shield size={14} className="me-1" />
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none" style={{ color: 'var(--lottonexus-white)' }}>
                  Responsible Gaming
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="neon-text mb-3">Language</h6>
            <select 
              className="form-select form-select-sm"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)', 
                border: '1px solid var(--lottonexus-cyan)',
                color: 'var(--lottonexus-white)'
              }}
            >
              <option value="en">🇺🇸 English</option>
              <option value="es">🇪🇸 Español</option>
              <option value="fr">🇫🇷 Français</option>
              <option value="de">🇩🇪 Deutsch</option>
            </select>
          </div>
        </div>

        <hr style={{ borderColor: 'var(--lottonexus-cyan)' }} />

        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0" style={{ color: 'var(--lottonexus-white)' }}>
              © 2025 LottoNexus. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <small style={{ color: 'var(--lottonexus-cyan)' }}>
              <Shield size={14} className="me-1" />
              Must be 18+ to play. Gamble responsibly.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
