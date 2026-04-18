import React from 'react';

const PopularGames = () => {
  const games = [
    { title: 'Fortnite', cat: 'Sandbox', rate: '4.8', down: '2.3M', img: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/store/software/switch/70010000010192/64d82c7cac63a15080ce482f140aa664dbda03fbf7dc20f42b71bad743ee9745' },
    { title: 'PubG', cat: 'Battle S', rate: '4.8', down: '2.3M', img: 'https://static0.xdaimages.com/wordpress/wp-content/uploads/2018/06/pubg.jpg?q=50&fit=crop&w=1200&h=675&dpr=1.5' },
    { title: 'Dota2', cat: 'Steam-X', rate: '4.8', down: '2.3M', img: 'https://i.pcmag.com/imagery/reviews/00xeme7ybg1aolezzfqxhjv-3-hero-image-gallery.fit_scale.size_1028x578.v1569475078.jpg' },
    { title: 'CS-GO', cat: 'Legendary', rate: '4.8', down: '2.3M', img: 'https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/counter-strike-global-offensive-file-48958450.jpeg.webp' }
  ];

  return (
    <section className="section-bg">
      <h3 className="mb-4">Most Popular <span className="pink-text">Right Now</span></h3>
      <div className="row g-4">
        {games.map((game, i) => (
          <div key={i} className="col-6 col-md-3">
            <div className="p-3" style={{backgroundColor: '#1f2122', borderRadius: '15px'}}>
              <img src={game.img} className="img-fluid rounded-4 mb-3" alt="" />
              <div className="d-flex justify-content-between small fw-bold mb-1">
                <span>{game.title}</span>
                <span className="text-warning">★ {game.rate}</span>
              </div>
              <div className="d-flex justify-content-between small text-secondary">
                <span>{game.cat}</span>
                <span className="pink-text">↓ {game.down}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularGames;