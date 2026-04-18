import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PopularGames from './components/PopularGames';
import GamingLibrary from './components/GamingLibrary';

function App() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="container main-container p-4 p-md-5">
        <Hero />
        <PopularGames />
        <GamingLibrary />
        <footer className="text-center mt-5 text-secondary small">
          Copyright © 2026 <span className="pink-text">Cyborg Gaming</span>. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default App;