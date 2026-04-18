import React from 'react';

const Navbar = () => {
  return (
    <nav className="container d-flex justify-content-between align-items-center mb-4 py-3 px-4" 
         style={{backgroundColor: '#1f2122', borderRadius: '50px', marginTop: '20px'}}>
      <h3 className="fw-bold m-0 pink-text">CYBORG</h3>
      <div className="d-none d-md-flex gap-4">
        <a href="#" className="text-decoration-none pink-text">Home</a>
        <a href="#" className="text-decoration-none text-secondary">Browse</a>
        <a href="#" className="text-decoration-none text-secondary">Streams</a>
        <a href="#" className="text-decoration-none text-secondary">Profile</a>
      </div>
    </nav>
  );
};

export default Navbar;