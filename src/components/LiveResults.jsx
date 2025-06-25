
import React from 'react';
import { Clock, DollarSign, Users } from 'lucide-react';

const LiveResults = () => {
  const lastDrawNumbers = [7, 14, 23, 35, 42, 49];
  const bonusNumber = 12;

  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="glass-card p-4 mb-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="neon-text mb-0" style={{ fontFamily: 'Orbitron' }}>
                  Latest Results
                </h3>
                <div className="d-flex align-items-center">
                  <Clock size={16} className="me-2" style={{ color: 'var(--lottonexus-cyan)' }} />
                  <span style={{ color: 'var(--lottonexus-white)' }}>
                    Updated in Real-Time
                  </span>
                </div>
              </div>

              {/* Winning Numbers */}
              <div className="text-center mb-4">
                <div className="mb-3">
                  <small style={{ color: 'var(--lottonexus-white)' }}>
                    Draw Date: June 24, 2025
                  </small>
                </div>
                
                <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 mb-4">
                  {lastDrawNumbers.map((number, index) => (
                    <div key={index} className="number-ball">
                      {number}
                    </div>
                  ))}
                  <div className="mx-3" style={{ color: 'var(--lottonexus-white)', fontSize: '1.5rem' }}>
                    +
                  </div>
                  <div className="number-ball" style={{ 
                    background: 'linear-gradient(135deg, #ff6b6b, #feca57)'
                  }}>
                    {bonusNumber}
                  </div>
                </div>
                
                <small style={{ color: 'var(--lottonexus-cyan)' }}>
                  Bonus Ball
                </small>
              </div>

              {/* Stats Row */}
              <div className="row text-center">
                <div className="col-md-4">
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <DollarSign size={20} className="me-2" style={{ color: 'var(--lottonexus-cyan)' }} />
                    <span style={{ color: 'var(--lottonexus-white)' }}>Jackpot</span>
                  </div>
                  <div className="h4 neon-text mb-0">$158.5M</div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <Users size={20} className="me-2" style={{ color: 'var(--lottonexus-cyan)' }} />
                    <span style={{ color: 'var(--lottonexus-white)' }}>Winners</span>
                  </div>
                  <div className="h4 neon-text mb-0">3</div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <Clock size={20} className="me-2" style={{ color: 'var(--lottonexus-cyan)' }} />
                    <span style={{ color: 'var(--lottonexus-white)' }}>Next Draw</span>
                  </div>
                  <div className="h4 neon-text mb-0">2d 14h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveResults;
