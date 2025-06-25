
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
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="text-center mb-5">
              <h2 className="neon-text mb-3" style={{ fontFamily: 'Orbitron' }}>
                Smart Pick Zone
              </h2>
              <p style={{ color: 'var(--lottonexus-white)' }}>
                Let AI analyze patterns and generate optimized number combinations
              </p>
            </div>

            <div className="glass-card p-4 mb-4">
              {/* Mode Selection */}
              <div className="row mb-4">
                <div className="col-md-6">
                  <label className="form-label" style={{ color: 'var(--lottonexus-white)' }}>
                    Generation Mode
                  </label>
                  <select 
                    className="form-select" 
                    value={predictionMode}
                    onChange={(e) => setPredictionMode(e.target.value)}
                    style={{ 
                      backgroundColor: 'rgba(255,255,255,0.1)', 
                      border: '1px solid var(--lottonexus-cyan)',
                      color: 'var(--lottonexus-white)'
                    }}
                  >
                    <option value="ai">AI Predictive</option>
                    <option value="random">Smart Random</option>
                    <option value="hot">Hot Numbers</option>
                    <option value="cold">Cold Numbers</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ color: 'var(--lottonexus-white)' }}>
                    Number Range
                  </label>
                  <select 
                    className="form-select"
                    style={{ 
                      backgroundColor: 'rgba(255,255,255,0.1)', 
                      border: '1px solid var(--lottonexus-cyan)',
                      color: 'var(--lottonexus-white)'
                    }}
                  >
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
                    <h5 className="mb-3" style={{ color: 'var(--lottonexus-white)' }}>
                      Your Smart Pick:
                    </h5>
                    <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
                      {generatedNumbers.map((number, index) => (
                        <div key={index} className="number-ball">
                          {number}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {isGenerating && (
                  <div className="mb-4">
                    <div className="spinner-border text-info mb-3" role="status">
                      <span className="visually-hidden">Analyzing patterns...</span>
                    </div>
                    <p style={{ color: 'var(--lottonexus-cyan)' }}>
                      AI is analyzing historical patterns...
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <button 
                  className="btn btn-electric"
                  onClick={generateNumbers}
                  disabled={isGenerating}
                >
                  <Zap size={16} className="me-2" />
                  {isGenerating ? 'Generating...' : 'Generate Smart Pick'}
                </button>
                
                <button className="btn btn-outline-light">
                  <Shuffle size={16} className="me-2" />
                  Quick Random
                </button>
                
                {generatedNumbers.length > 0 && (
                  <button className="btn btn-outline-success">
                    <Save size={16} className="me-2" />
                    Save to My Numbers
                  </button>
                )}
                
                <button className="btn btn-outline-secondary">
                  <Settings size={16} className="me-2" />
                  Advanced Settings
                </button>
              </div>
            </div>

            {/* Tips Section */}
            <div className="glass-card p-4">
              <h5 className="neon-text mb-3">Smart Pick Tips</h5>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled" style={{ color: 'var(--lottonexus-white)' }}>
                    <li className="mb-2">🤖 AI mode analyzes 1000+ past draws</li>
                    <li className="mb-2">🔥 Hot numbers appear frequently</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled" style={{ color: 'var(--lottonexus-white)' }}>
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
