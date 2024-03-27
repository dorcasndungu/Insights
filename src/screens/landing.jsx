import React from 'react';
import '../App.css'; //  path to your CSS file 
import { useNavigate } from 'react-router-dom';

function LandingScreen() {
    let navigate = useNavigate();
  
    function handleCardClick() {
      navigate('/reviewForm'); 
    }
  return (
    <div className="container">
      <h1 className="mt-5">Insights👀</h1>
      <p className="tagline">Get insights on prospective instructors</p>
      <p >❌ This website displays only opinions and users should use it at their own risk!</p>
      <div className="search-container">
        <input type="text" className="form-control rounded-pill" placeholder="Search an instructor..." />
      </div>
      <div className="results mt-5">
        <div className="card rounded-lg mb-3" onClick={handleCardClick}>
          <div className="card-body">
            <h5 className="card-title">John Doe</h5>
            <p className="card-text">Introduction to React</p>
          </div>
        </div>
        <div className="card rounded-lg mb-3 text-muted">
          <div className="card-body">
            <p className="card-text">Instructor has no reviews yet</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;