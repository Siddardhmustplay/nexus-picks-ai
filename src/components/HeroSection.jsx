
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
    <div className="position-relative py-5" style={{ minHeight: '60vh' }}>
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
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-4" style={{ 
              fontFamily: 'Orbitron', 
              color: 'var(--lottonexus-white)',
              textShadow: '0 0 20px var(--lottonexus-cyan)'
            }}>
              Your Gateway to Smarter Picks
            </h1>
            
            <p className="lead mb-5" style={{ color: 'var(--lottonexus-white)' }}>
              AI-powered predictions, real-time results, and smart analytics
            </p>

            {/* Countdown Timer */}
            <div className="glass-card p-4 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
              <h3 className="mb-3 neon-text" style={{ fontFamily: 'Orbitron' }}>
                Next Draw In:
              </h3>
              <div className="row text-center">
                <div className="col-3">
                  <div className="countdown-timer">{timeLeft.days.toString().padStart(2, '0')}</div>
                  <small style={{ color: 'var(--lottonexus-white)' }}>Days</small>
                </div>
                <div className="col-3">
                  <div className="countdown-timer">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <small style={{ color: 'var(--lottonexus-white)' }}>Hours</small>
                </div>
                <div className="col-3">
                  <div className="countdown-timer">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <small style={{ color: 'var(--lottonexus-white)' }}>Minutes</small>
                </div>
                <div className="col-3">
                  <div className="countdown-timer">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <small style={{ color: 'var(--lottonexus-white)' }}>Seconds</small>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <button className="btn btn-electric btn-lg px-4 py-3">
                <Sparkles size={20} className="me-2" />
                Get AI Predictions Now
              </button>
              <button className="btn btn-outline-light btn-lg px-4 py-3">
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
