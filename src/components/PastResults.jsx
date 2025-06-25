
import React, { useState } from 'react';
import { Calendar, Download, Filter, Search } from 'lucide-react';

const PastResults = () => {
  const [searchDate, setSearchDate] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Mock historical data
  const pastDraws = [
    { 
      date: '2025-06-24', 
      numbers: [7, 14, 23, 35, 42, 49], 
      bonus: 12, 
      winners: 3, 
      jackpot: '$158.5M'
    },
    { 
      date: '2025-06-21', 
      numbers: [3, 18, 27, 33, 41, 46], 
      bonus: 8, 
      winners: 0, 
      jackpot: '$145.2M'
    },
    { 
      date: '2025-06-18', 
      numbers: [5, 12, 29, 31, 38, 44], 
      bonus: 15, 
      winners: 1, 
      jackpot: '$132.8M'
    },
    { 
      date: '2025-06-15', 
      numbers: [9, 16, 22, 34, 39, 47], 
      bonus: 6, 
      winners: 2, 
      jackpot: '$119.4M'
    },
    { 
      date: '2025-06-12', 
      numbers: [1, 11, 25, 36, 43, 48], 
      bonus: 19, 
      winners: 0, 
      jackpot: '$106.1M'
    }
  ];

  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="neon-text mb-3" style={{ fontFamily: 'Orbitron' }}>
            Past Results
          </h2>
          <p style={{ color: 'var(--lottonexus-white)' }}>
            Complete history of all lottery draws
          </p>
        </div>

        {/* Filters */}
        <div className="row mb-4">
          <div className="col-md-4 mb-3">
            <div className="input-group">
              <span className="input-group-text" style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)', 
                border: '1px solid var(--lottonexus-cyan)',
                color: 'var(--lottonexus-cyan)'
              }}>
                <Search size={16} />
              </span>
              <input 
                type="date" 
                className="form-control"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)', 
                  border: '1px solid var(--lottonexus-cyan)',
                  color: 'var(--lottonexus-white)'
                }}
              />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <select 
              className="form-select"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)', 
                border: '1px solid var(--lottonexus-cyan)',
                color: 'var(--lottonexus-white)'
              }}
            >
              <option value="all">All Results</option>
              <option value="winners">With Winners</option>
              <option value="no-winners">No Winners</option>
              <option value="jackpot">Jackpot Only</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <button className="btn btn-outline-light w-100">
              <Download size={16} className="me-2" />
              Export Results
            </button>
          </div>
        </div>

        {/* Results Table */}
        <div className="glass-card p-0 overflow-hidden">
          <div className="table-responsive">
            <table className="table table-dark table-hover mb-0">
              <thead style={{ backgroundColor: 'var(--lottonexus-midnight)' }}>
                <tr>
                  <th style={{ color: 'var(--lottonexus-cyan)', borderColor: 'var(--lottonexus-cyan)' }}>
                    <Calendar size={16} className="me-2" />
                    Date
                  </th>
                  <th style={{ color: 'var(--lottonexus-cyan)', borderColor: 'var(--lottonexus-cyan)' }}>
                    Winning Numbers
                  </th>
                  <th style={{ color: 'var(--lottonexus-cyan)', borderColor: 'var(--lottonexus-cyan)' }}>
                    Bonus
                  </th>
                  <th style={{ color: 'var(--lottonexus-cyan)', borderColor: 'var(--lottonexus-cyan)' }}>
                    Winners
                  </th>
                  <th style={{ color: 'var(--lottonexus-cyan)', borderColor: 'var(--lottonexus-cyan)' }}>
                    Jackpot
                  </th>
                </tr>
              </thead>
              <tbody>
                {pastDraws.map((draw, index) => (
                  <tr key={index} style={{ borderColor: 'rgba(0, 246, 255, 0.2)' }}>
                    <td style={{ color: 'var(--lottonexus-white)' }}>
                      {new Date(draw.date).toLocaleDateString()}
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2 flex-wrap">
                        {draw.numbers.map((number, numIndex) => (
                          <div 
                            key={numIndex} 
                            className="number-ball"
                            style={{ 
                              width: '35px', 
                              height: '35px', 
                              fontSize: '0.9rem',
                              animation: 'none'
                            }}
                          >
                            {number}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td>
                      <div 
                        className="number-ball"
                        style={{ 
                          width: '35px', 
                          height: '35px', 
                          fontSize: '0.9rem',
                          background: 'linear-gradient(135deg, #ff6b6b, #feca57)',
                          animation: 'none'
                        }}
                      >
                        {draw.bonus}
                      </div>
                    </td>
                    <td style={{ color: draw.winners > 0 ? 'var(--lottonexus-cyan)' : 'var(--lottonexus-white)' }}>
                      {draw.winners}
                    </td>
                    <td className="neon-text fw-bold">
                      {draw.jackpot}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#" style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)', 
                border: '1px solid var(--lottonexus-cyan)',
                color: 'var(--lottonexus-cyan)'
              }}>
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#" style={{ 
                backgroundColor: 'var(--lottonexus-cyan)', 
                border: '1px solid var(--lottonexus-cyan)',
                color: 'var(--lottonexus-midnight)'
              }}>
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)', 
                border: '1px solid var(--lottonexus-cyan)',
                color: 'var(--lottonexus-cyan)'
              }}>
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)', 
                border: '1px solid var(--lottonexus-cyan)',
                color: 'var(--lottonexus-cyan)'
              }}>
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)', 
                border: '1px solid var(--lottonexus-cyan)',
                color: 'var(--lottonexus-cyan)'
              }}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PastResults;
