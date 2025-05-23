import React, { useEffect, useState } from 'react';
import './landingpage.css';
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
  const [showButtons, setShowButtons] = useState(false);
    const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-page">
      <h1 className="fade-in">TIC TAC BLINK</h1>
      <p className="fade-in delay">Play with emojis, challenge your friends, and have fun!</p>
      {showButtons && (
        <div className="button-container fade-in delay-2">
          <button className="landing-button" onClick={()=>navigate('/choose-category')}>Start Game</button>
          <button className="landing-button" onClick={()=>navigate('/help')}>Help</button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
