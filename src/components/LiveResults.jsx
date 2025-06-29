
import React from 'react';
import { Clock, DollarSign, Users } from 'lucide-react';

const LiveResults = () => {
  const lastDrawNumbers = [7, 14, 23, 35, 42, 49];
  const bonusNumber = 12;

  return (
    <div className="py-5 live-results-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="dotted-container-large">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="neon-text mb-0" style={{ fontFamily: 'Orbitron' }}>
                  LATEST RESULTS
                </h3>
                <div className="d-flex align-items-center">
                  <Clock size={16} className="me-2" style={{ color: 'var(--lottonexus-cyan)' }} />
                  <span style={{ color: 'var(--lottonexus-white)', fontFamily: 'Orbitron' }}>
                    UPDATED IN REAL-TIME
                  </span>
                </div>
              </div>

              {/* Winning Numbers */}
              <div className="text-center mb-4">
                <div className="dotted-container-purple mb-4">
                  <small style={{ color: 'var(--lottonexus-white)', fontFamily: 'Orbitron' }}>
                    DRAW DATE: JUNE 24, 2025
                  </small>
                </div>
                
                <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 mb-4">
                  {lastDrawNumbers.map((number, index) => (
                    <div key={index} className={index % 2 === 0 ? "number-ball" : "number-ball-green"}>
                      {number}
                    </div>
                  ))}
                  <div className="mx-3" style={{ color: 'var(--lottonexus-white)', fontSize: '1.5rem' }}>
                    +
                  </div>
                  <div className="number-ball-gold">
                    {bonusNumber}
                  </div>
                </div>
                
                <div className="dotted-container-gold" style={{ display: 'inline-block' }}>
                  <small style={{ 
                    color: 'var(--lottonexus-gold)', 
                    fontFamily: 'Orbitron',
                    textShadow: '0 0 10px var(--lottonexus-gold)'
                  }}>
                    BONUS BALL
                  </small>
                </div>
              </div>

              {/* Stats Row */}
              <div className="row text-center">
                <div className="col-md-4 mb-3">
                  <div className="dotted-container-green h-100">
                    <div className="d-flex align-items-center justify-content-center mb-2">
                      <DollarSign size={20} className="me-2" style={{ color: 'var(--lottonexus-green)' }} />
                      <span style={{ color: 'var(--lottonexus-white)', fontFamily: 'Orbitron' }}>JACKPOT</span>
                    </div>
                    <div className="h4 mb-0" style={{ 
                      color: 'var(--lottonexus-green)',
                      textShadow: '0 0 10px var(--lottonexus-green)',
                      fontFamily: 'Orbitron'
                    }}>$158.5M</div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="dotted-container h-100">
                    <div className="d-flex align-items-center justify-content-center mb-2">
                      <Users size={20} className="me-2" style={{ color: 'var(--lottonexus-cyan)' }} />
                      <span style={{ color: 'var(--lottonexus-white)', fontFamily: 'Orbitron' }}>WINNERS</span>
                    </div>
                    <div className="h4 neon-text mb-0">3</div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="dotted-container-purple h-100">
                    <div className="d-flex align-items-center justify-content-center mb-2">
                      <Clock size={20} className="me-2" style={{ color: 'var(--lottonexus-purple)' }} />
                      <span style={{ color: 'var(--lottonexus-white)', fontFamily: 'Orbitron' }}>NEXT DRAW</span>
                    </div>
                    <div className="h4 mb-0" style={{ 
                      color: 'var(--lottonexus-purple)',
                      textShadow: '0 0 10px var(--lottonexus-purple)',
                      fontFamily: 'Orbitron'
                    }}>2d 14h</div>
                  </div>
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
