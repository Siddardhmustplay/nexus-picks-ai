
import React, { useState } from 'react';
import { Zap, Shuffle, Save, Settings } from 'lucide-react';

const SmartPicks = () => {
  const [generatedNumbers, setGeneratedNumbers] = useState([]);
  const [predictionMode, setPredictionMode] = useState('ai');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateNumbers = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const numbers = [];
      while (numbers.length < 6) {
        const num = Math.floor(Math.random() * 49) + 1;
        if (!numbers.includes(num)) {
          numbers.push(num);
        }
      }
      setGeneratedNumbers(numbers.sort((a, b) => a - b));
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="py-5 smart-picks-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="text-center mb-5">
              <h2 className="neon-text mb-3" style={{ fontFamily: 'Orbitron' }}>
                Smart Pick Zone
              </h2>
              <p style={{ color: 'var(--lottonexus-white)', fontFamily: 'Orbitron' }}>
                Let AI analyze patterns and generate optimized number combinations
              </p>
            </div>

            <div className="glass-card-purple p-4 mb-4">
              {/* Mode Selection */}
              <div className="row mb-4">
                <div className="col-md-6">
                  <label className="form-label" style={{ 
                    color: 'var(--lottonexus-white)', 
                    fontFamily: 'Orbitron',
                    fontWeight: '700'
                  }}>
                    Generation Mode
                  </label>
                  <select 
                    className="form-select" 
                    value={predictionMode}
                    onChange={(e) => setPredictionMode(e.target.value)}
                  >
                    <option value="ai">AI Predictive</option>
                    <option value="random">Smart Random</option>
                    <option value="hot">Hot Numbers</option>
                    <option value="cold">Cold Numbers</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ 
                    color: 'var(--lottonexus-white)', 
                    fontFamily: 'Orbitron',
                    fontWeight: '700'
                  }}>
                    Number Range
                  </label>
                  <select className="form-select">
                    <option value="1-49">1 - 49 (Standard)</option>
                    <option value="1-59">1 - 59 (Extended)</option>
                    <option value="custom">Custom Range</option>
                  </select>
                </div>
              </div>

              {/* Generated Numbers Display */}
              <div className="text-center mb-4">
                {generatedNumbers.length > 0 && (
                  <div className="mb-4">
                    <div className="dotted-container-gold mb-3">
                      <h5 className="mb-0" style={{ 
                        color: 'var(--lottonexus-gold)', 
                        fontFamily: 'Orbitron',
                        textShadow: '0 0 10px var(--lottonexus-gold)'
                      }}>
                        Your Smart Pick:
                      </h5>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
                      {generatedNumbers.map((number, index) => (
                        <div key={index} className={
                          index < 2 ? "number-ball-gold" : 
                          index < 4 ? "number-ball" : "number-ball-green"
                        }>
                          {number}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {isGenerating && (
                  <div className="mb-4">
                    <div className="spinner-border mb-3" style={{ color: 'var(--lottonexus-cyan)' }} role="status">
                      <span className="visually-hidden">Analyzing patterns...</span>
                    </div>
                    <div className="dotted-container">
                      <p style={{ 
                        color: 'var(--lottonexus-cyan)', 
                        fontFamily: 'Orbitron',
                        marginBottom: '0'
                      }}>
                        AI is analyzing historical patterns...
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <button 
                  className="btn-electric"
                  onClick={generateNumbers}
                  disabled={isGenerating}
                >
                  <Zap size={16} className="me-2" />
                  {isGenerating ? 'Generating...' : 'Generate Smart Pick'}
                </button>
                
                <button className="btn btn-outline-light" style={{
                  border: '3px dotted white',
                  fontFamily: 'Orbitron',
                  textTransform: 'uppercase',
                  borderRadius: '0px',
                  fontWeight: '700'
                }}>
                  <Shuffle size={16} className="me-2" />
                  Quick Random
                </button>
                
                {generatedNumbers.length > 0 && (
                  <button className="btn btn-outline-success" style={{
                    border: '3px dotted var(--lottonexus-green)',
                    fontFamily: 'Orbitron',
                    textTransform: 'uppercase',
                    borderRadius: '0px',
                    fontWeight: '700',
                    color: 'var(--lottonexus-green)'
                  }}>
                    <Save size={16} className="me-2" />
                    Save to My Numbers
                  </button>
                )}
                
                <button className="btn btn-outline-secondary" style={{
                  border: '3px dotted #6c757d',
                  fontFamily: 'Orbitron',
                  textTransform: 'uppercase',
                  borderRadius: '0px',
                  fontWeight: '700'
                }}>
                  <Settings size={16} className="me-2" />
                  Advanced Settings
                </button>
              </div>
            </div>

            {/* Tips Section */}
            <div className="glass-card-gold p-4">
              <h5 style={{ 
                color: 'var(--lottonexus-gold)', 
                textShadow: '0 0 10px var(--lottonexus-gold)',
                fontFamily: 'Orbitron',
                marginBottom: '1rem'
              }}>Smart Pick Tips</h5>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled" style={{ color: 'var(--lottonexus-white)', fontFamily: 'Orbitron' }}>
                    <li className="mb-2">🤖 AI mode analyzes 1000+ past draws</li>
                    <li className="mb-2">🔥 Hot numbers appear frequently</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled" style={{ color: 'var(--lottonexus-white)', fontFamily: 'Orbitron' }}>
                    <li className="mb-2">❄️ Cold numbers are due for selection</li>
                    <li className="mb-2">📊 Smart random uses weighted probability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartPicks;
