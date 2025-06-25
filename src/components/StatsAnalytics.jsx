
import React, { useState } from 'react';
import { BarChart3, TrendingUp, Flame, Snowflake } from 'lucide-react';

const StatsAnalytics = () => {
  const [timeframe, setTimeframe] = useState('30');
  
  // Mock data for hot and cold numbers
  const hotNumbers = [
    { number: 7, frequency: 28, percentage: 85 },
    { number: 23, frequency: 26, percentage: 79 },
    { number: 42, frequency: 24, percentage: 73 },
    { number: 15, frequency: 22, percentage: 67 },
    { number: 31, frequency: 21, percentage: 64 }
  ];
  
  const coldNumbers = [
    { number: 13, frequency: 3, percentage: 15 },
    { number: 44, frequency: 4, percentage: 18 },
    { number: 2, frequency: 5, percentage: 22 },
    { number: 38, frequency: 6, percentage: 25 },
    { number: 49, frequency: 7, percentage: 28 }
  ];

  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="neon-text mb-3" style={{ fontFamily: 'Orbitron' }}>
            Stats & Analytics
          </h2>
          <p style={{ color: 'var(--lottonexus-white)' }}>
            Advanced number frequency analysis and trends
          </p>
        </div>

        {/* Timeframe Selector */}
        <div className="row mb-4">
          <div className="col-md-4 mx-auto">
            <select 
              className="form-select"
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)', 
                border: '1px solid var(--lottonexus-cyan)',
                color: 'var(--lottonexus-white)'
              }}
            >
              <option value="10">Last 10 Draws</option>
              <option value="30">Last 30 Draws</option>
              <option value="100">Last 100 Draws</option>
              <option value="all">All Time</option>
            </select>
          </div>
        </div>

        <div className="row">
          {/* Hot Numbers */}
          <div className="col-lg-6 mb-4">
            <div className="glass-card p-4 h-100">
              <div className="d-flex align-items-center mb-4">
                <Flame size={24} className="me-3" style={{ color: '#ff6b6b' }} />
                <h4 className="mb-0" style={{ color: 'var(--lottonexus-white)' }}>
                  Hot Numbers
                </h4>
              </div>
              
              <p className="mb-4" style={{ color: 'var(--lottonexus-cyan)' }}>
                Most frequently drawn numbers
              </p>
              
              {hotNumbers.map((item, index) => (
                <div key={index} className="d-flex align-items-center mb-3">
                  <div className="number-ball me-3" style={{ width: '40px', height: '40px', fontSize: '1rem' }}>
                    {item.number}
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between mb-1">
                      <span style={{ color: 'var(--lottonexus-white)' }}>
                        Drawn {item.frequency} times
                      </span>
                      <span className="neon-text">{item.percentage}%</span>
                    </div>
                    <div className="progress" style={{ height: '8px' }}>
                      <div 
                        className="progress-bar"
                        style={{ 
                          width: `${item.percentage}%`,
                          background: 'linear-gradient(90deg, #ff6b6b, #feca57)'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cold Numbers */}
          <div className="col-lg-6 mb-4">
            <div className="glass-card p-4 h-100">
              <div className="d-flex align-items-center mb-4">
                <Snowflake size={24} className="me-3" style={{ color: '#74b9ff' }} />
                <h4 className="mb-0" style={{ color: 'var(--lottonexus-white)' }}>
                  Cold Numbers
                </h4>
              </div>
              
              <p className="mb-4" style={{ color: 'var(--lottonexus-cyan)' }}>
                Least frequently drawn numbers
              </p>
              
              {coldNumbers.map((item, index) => (
                <div key={index} className="d-flex align-items-center mb-3">
                  <div className="number-ball me-3" style={{ 
                    width: '40px', 
                    height: '40px', 
                    fontSize: '1rem',
                    background: 'linear-gradient(135deg, #74b9ff, #0984e3)'
                  }}>
                    {item.number}
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between mb-1">
                      <span style={{ color: 'var(--lottonexus-white)' }}>
                        Drawn {item.frequency} times
                      </span>
                      <span style={{ color: '#74b9ff' }}>{item.percentage}%</span>
                    </div>
                    <div className="progress" style={{ height: '8px' }}>
                      <div 
                        className="progress-bar"
                        style={{ 
                          width: `${item.percentage}%`,
                          background: 'linear-gradient(90deg, #74b9ff, #0984e3)'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="row">
          <div className="col-lg-12">
            <div className="glass-card p-4">
              <h5 className="neon-text mb-4">Quick Statistics</h5>
              <div className="row text-center">
                <div className="col-md-3 mb-3">
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <BarChart3 size={20} className="me-2" style={{ color: 'var(--lottonexus-cyan)' }} />
                    <span style={{ color: 'var(--lottonexus-white)' }}>Total Draws</span>
                  </div>
                  <div className="h4 neon-text mb-0">1,247</div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <TrendingUp size={20} className="me-2" style={{ color: 'var(--lottonexus-cyan)' }} />
                    <span style={{ color: 'var(--lottonexus-white)' }}>Avg per Number</span>
                  </div>
                  <div className="h4 neon-text mb-0">25.4</div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <Flame size={20} className="me-2" style={{ color: '#ff6b6b' }} />
                    <span style={{ color: 'var(--lottonexus-white)' }}>Hottest</span>
                  </div>
                  <div className="h4" style={{ color: '#ff6b6b' }}>7</div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <Snowflake size={20} className="me-2" style={{ color: '#74b9ff' }} />
                    <span style={{ color: 'var(--lottonexus-white)' }}>Coldest</span>
                  </div>
                  <div className="h4" style={{ color: '#74b9ff' }}>13</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsAnalytics;
