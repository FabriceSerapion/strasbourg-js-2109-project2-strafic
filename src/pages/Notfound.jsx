import React from 'react';
import '../styles/components/Notfound.css';
// import background from '../assets/notfound.jpg';
import background2 from '../assets/notfound2.jpg';
import bus from '../assets/macaroni-bus.png';

const Notfound = () => {
  return (
    <div className="notfound">
      <img className="background" src={background2} alt="bus" />
      <div className="centertext">
        Ooops.. Too Fast
        <div id="a">
          <span className="textglitch">404</span>
        </div>
      </div>
      <img id="b" className="movingbus" src={bus} alt="bus2" />
    </div>
  );
};

export default Notfound;
