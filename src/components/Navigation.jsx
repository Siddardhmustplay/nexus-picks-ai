
import React, { useState } from 'react';
import { Star, Zap, BarChart3, Calendar, HelpCircle, User } from 'lucide-react';

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('results');

  const navItems = [
    { id: 'results', label: 'Live Results', icon: Zap },
    { id: 'picks', label: 'Smart Picks', icon: Star },
    { id: 'stats', label: 'Stats', icon: BarChart3 },
    { id: 'history', label: 'Past Draws', icon: Calendar },
    { id: 'help', label: 'How to Play', icon: HelpCircle }
  ];

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'var(--lottonexus-midnight)' }}>
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <div className="d-flex align-items-center">
            <div className="number-ball me-3" style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
              <Zap size={20} />
            </div>
            <span className="neon-text fw-bold" style={{ fontFamily: 'Orbitron', fontSize: '1.5rem' }}>
              LottoNexus
            </span>
          </div>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navItems.map((item) => (
              <li className="nav-item mx-2" key={item.id}>
                <a 
                  className={`nav-link nav-link-custom d-flex align-items-center ${activeTab === item.id ? 'active-tab' : ''}`}
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item.id);
                  }}
                >
                  <item.icon size={18} className="me-2" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="d-flex">
            <button className="btn btn-electric btn-sm me-2">
              <User size={16} className="me-1" />
              Login
            </button>
            <button className="btn btn-outline-light btn-sm">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
