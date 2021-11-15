import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ParkCard from '../components/Parking-relais-card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ParkingRelais() {
  const [park, setPark] = useState([]);
  const [select, setSelect] = useState();

  function changeValueSelect(e) {
    setSelect(e.target.value);
  }

  const config = {
    method: 'get',
    url: 'https://api.cts-strasbourg.eu/v1/cts/park-and-ride',
    headers: {
      Authorization:
        'Basic Mzc5ZGI0NzgtYjMxOS00ZmZlLWJlNTctM2UzNWNkNjg0NTUyOg==',
    },
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        setPark(response.data.ParkAndRide);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="parking-container">
      <Navbar />
      <div className="presentation">
        <h2>Parking Relais (P+R)</h2>
        <p>Simplifiez-vous la ville !</p>
      </div>
      <h3>Trouvez votre parking-relais en un click.</h3>
      <div className="image-video" />
      <div className="choice-park-container">
        <select onChange={changeValueSelect} className="choice-park">
          <option>Selectionnez un parking...</option>
          {park &&
            park.map((parking) => {
              return <option>{parking.Designation}</option>;
            })}
        </select>
        <div className="park-card">
          {park &&
            park
              .filter((parc) => {
                return parc.Designation === select;
              })
              .map((parks) => {
                return (
                  <ParkCard
                    AccessInformation={parks.AccessInformation_FR}
                    {...parks}
                  />
                );
              })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ParkingRelais;
