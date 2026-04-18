import React from 'react';

const Hero = () => {
  return (
    <div className="hero-section mb-5 p-5 text-white" style={{
      background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200')",
      backgroundSize: 'cover',
      borderRadius: '25px',
      minHeight: '350px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <p className="fs-5 mb-1">Welcome To Cyborg</p>
      <h1 className="display-3 fw-bold mb-4">
        <span className="pink-text">BROWSE</span> OUR POPULAR<br />GAMES HERE
      </h1>
      <div>
        <button className="btn-pink">Browse Now</button>
      </div>
    </div>
  );
};

export default Hero;