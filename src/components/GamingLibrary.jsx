import React from 'react';

const GamingLibrary = () => {
  const items = [
    { title: 'Dota 2', cat: 'Sandbox', date: '24/08/2026', hours: '634 H 22 Mins', status: 'Downloaded', img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRi8ufcU3M2xk12y8fARhhUKagtj5GtYWOUcpQ6iZHc-eMhrxnE' },
    { title: 'Fortnite', cat: 'Sandbox', date: '22/06/2026', hours: '740 H 52 Mins', status: 'Download', img: 'https://img.etimg.com/thumb/msid-105661248,width-300,height-225,imgsize-24608,resizemode-75/peter-griffin-is-coming-to-fortnite-in-chapter-5-season-1.jpg' }
  ];

  return (
    <section className="section-bg">
      <h3 className="mb-4">Your Gaming <span className="pink-text">Library</span></h3>
      {items.map((item, i) => (
        <div key={i} className="row align-items-center py-3 border-bottom border-dark text-center text-md-start">
          <div className="col-12 col-md-1"><img src={item.img} className="rounded-3" width="70" alt="" /></div>
          <div className="col-6 col-md-2 mt-2 mt-md-0"><small className="text-secondary d-block">Game</small><b>{item.title}</b></div>
          <div className="col-6 col-md-2 mt-2 mt-md-0"><small className="text-secondary d-block">Date Added</small><b>{item.date}</b></div>
          <div className="col-6 col-md-2 mt-2 mt-md-0"><small className="text-secondary d-block">Hours Played</small><b>{item.hours}</b></div>
          <div className="col-6 col-md-2 mt-2 mt-md-0"><small className="text-secondary d-block">Status</small><b>{item.status}</b></div>
          <div className="col-12 col-md-3 mt-3 mt-md-0 text-md-end">
            <button className={`btn rounded-pill px-4 ${item.status === 'Download' ? 'btn-outline-danger' : 'btn-outline-secondary text-secondary'}`}>
              {item.status}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default GamingLibrary;