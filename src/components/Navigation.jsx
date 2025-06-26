
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
    <nav className="dotted-container-large mb-0" style={{ 
      backgroundColor: 'var(--lottonexus-midnight)',
      borderTop: '6px dotted var(--lottonexus-cyan)',
      borderBottom: '6px dotted var(--lottonexus-cyan)',
      borderLeft: 'none',
      borderRight: 'none',
      margin: '0'
    }}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          {/* Brand */}
          <div className="d-flex align-items-center">
            <div className="number-ball me-3" style={{ width: '50px', height: '50px', fontSize: '1.2rem' }}>
              <Zap size={24} />
            </div>
            <span className="neon-text fw-bold" style={{ fontFamily: 'Orbitron', fontSize: '1.8rem' }}>
              LottoNexus
            </span>
          </div>

          {/* Navigation Links */}
          <div className="d-flex align-items-center">
            <div className="d-flex me-4">
              {navItems.map((item) => (
                <div key={item.id} className="mx-2">
                  <button 
                    className={`nav-link-custom d-flex align-items-center btn ${activeTab === item.id ? 'active-tab' : ''}`}
                    onClick={() => setActiveTab(item.id)}
                    style={{
                      background: 'transparent',
                      border: activeTab === item.id ? '3px dotted var(--lottonexus-cyan)' : '3px dotted transparent',
                      padding: '8px 15px'
                    }}
                  >
                    <item.icon size={18} className="me-2" />
                    {item.label}
                  </button>
                </div>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="d-flex">
              <button className="btn btn-electric btn-sm me-2">
                <User size={16} className="me-1" />
                Login
              </button>
              <button className="btn-electric btn-sm" style={{
                background: 'transparent',
                border: '3px dotted var(--lottonexus-purple)',
                color: 'var(--lottonexus-purple)',
                padding: '8px 15px'
              }}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
