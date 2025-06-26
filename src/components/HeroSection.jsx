
import React, { useState, useEffect } from 'react';
import { Sparkles, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="position-relative py-5 hero-section-bg" style={{ minHeight: '60vh' }}>
      {/* Starfield Background */}
      <div className="starfield">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container text-center py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="display-4 fw-bold mb-4" style={{ 
              fontFamily: 'Orbitron', 
              color: 'var(--lottonexus-white)',
              textShadow: '0 0 20px var(--lottonexus-cyan)',
              textTransform: 'uppercase',
              letterSpacing: '3px'
            }}>
              Your Gateway to Smarter Picks
            </h1>
            
            <p className="lead mb-5" style={{ 
              color: 'var(--lottonexus-white)',
              fontFamily: 'Orbitron',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              AI-powered predictions, real-time results, and smart analytics
            </p>

            {/* Dual Jackpot System */}
            <div className="row mb-5">
              <div className="col-md-6 mb-4">
                <div className="dotted-container-purple">
                  <h3 className="neon-text mb-3" style={{ fontSize: '1.2rem' }}>
                    NEXT JACKPOT IN
                  </h3>
                  <div className="countdown-container">
                    <div className="row text-center">
                      <div className="col-3">
                        <div className="countdown-timer">{timeLeft.days.toString().padStart(2, '0')}</div>
                        <small style={{ color: 'var(--lottonexus-white)', fontFamily: 'Orbitron' }}>DAYS</small>
                      </div>
                      <div className="col-3">
                        <div className="countdown-timer">{timeLeft.hours.toString().padStart(2, '0')}</div>
                        <small style={{ color: 'var(--lottonexus-white)', fontFamily: 'Orbitron' }}>HOURS</small>
                      </div>
                      <div className="col-3">
                        <div className="countdown-timer">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                        <small style={{ color: 'var(--lottonexus-white)', fontFamily: 'Orbitron' }}>MINS</small>
                      </div>
                      <div className="col-3">
                        <div className="countdown-timer">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                        <small style={{ color: 'var(--lottonexus-white)', fontFamily: 'Orbitron' }}>SECS</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-4">
                <div className="dotted-container-gold">
                  <h3 style={{ 
                    color: 'var(--lottonexus-gold)', 
                    textShadow: '0 0 10px var(--lottonexus-gold)',
                    fontFamily: 'Orbitron',
                    fontWeight: 'bold',
                    letterSpacing: '2px',
                    fontSize: '1.2rem',
                    marginBottom: '1rem'
                  }}>
                    NEXT MINOR JACKPOT IN
                  </h3>
                  <div className="jackpot-box-gold">
                    <div className="jackpot-amount-gold">04:10:56</div>
                    <small style={{ color: 'var(--lottonexus-white)', fontFamily: 'Orbitron' }}>
                      DAILY DRAW
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Jackpot Display */}
            <div className="dotted-container-large mb-5">
              <h2 className="neon-text mb-4" style={{ textTransform: 'uppercase' }}>
                DUAL JACKPOT SYSTEM
              </h2>
              
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="jackpot-box">
                    <h4 className="neon-text mb-2">MAJOR JACKPOT</h4>
                    <div className="jackpot-amount">$7323.64</div>
                    <div className="mt-2" style={{ color: 'var(--lottonexus-white)', fontFamily: 'Orbitron' }}>
                      DRAWING ON JULY 1ST
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-3">
                  <div className="jackpot-box-gold">
                    <h4 style={{ 
                      color: 'var(--lottonexus-gold)', 
                      textShadow: '0 0 10px var(--lottonexus-gold)',
                      fontFamily: 'Orbitron',
                      marginBottom: '0.5rem'
                    }}>MINOR JACKPOT</h4>
                    <div className="jackpot-amount-gold">$859.07</div>
                    <div className="mt-2" style={{ color: 'var(--lottonexus-white)', fontFamily: 'Orbitron' }}>
                      NEXT DRAW DAILY
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="live-indicator d-inline-block mb-3">
                  🔴 LIVE FROM BLOCKCHAIN
                </div>
              </div>
              
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <button className="btn-electric px-4 py-2">
                  View Major Wallet
                </button>
                <button className="btn-electric-gold px-4 py-2">
                  View Minor Wallet
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <button className="btn-electric btn-lg px-4 py-3">
                <Sparkles size={20} className="me-2" />
                Get AI Predictions Now
              </button>
              <button className="btn btn-outline-light btn-lg px-4 py-3" style={{
                border: '4px dotted white',
                fontFamily: 'Orbitron',
                textTransform: 'uppercase',
                borderRadius: '0px',
                fontWeight: '900',
                letterSpacing: '2px'
              }}>
                <TrendingUp size={20} className="me-2" />
                View Live Results
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
