import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StationCard from '../components/Velhop-card';
import Navbar from '../components/Navbar';
import logostation from '../assets/logostation.svg';

function Velhop() {
  const [velhop, setVelhop] = useState([]);
  const [currentStation, setCurrentStation] = useState('');
  const config = {
    method: 'get',
    url: 'https://api.cts-strasbourg.eu/v1/velhop/velhop',
    headers: {
      Authorization:
        'Basic Mzc5ZGI0NzgtYjMxOS00ZmZlLWJlNTctM2UzNWNkNjg0NTUyOg==',
    },
  };
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setVelhop(response.data.Velhop);
      })
      .catch(function (error) {
        return error;
      });
  }, []);

  function HandleChange(e) {
    setCurrentStation(e.target.value);
  }

  return (
    <div className="velhop-container">
      <Navbar />
      <div className="velhop-presentation">
        <h2>Stations Vélhop</h2>
        <p>Et Hop ! Un Vélhopla Geiss !</p>
      </div>
      <h3>Trouver votre Vélhop en un clic !</h3>
      <img
        src={logostation}
        alt="logo"
        id="logostation"
        width="100"
        height="100"
      />
      <div className="choice-station-container">
        <select className="choice-station" onChange={HandleChange}>
          <option>Sélectionner une station</option>
          {velhop &&
            velhop.map((station) => {
              return <option>{station.Designation}</option>;
            })}
        </select>
        <div>
          {velhop &&
            velhop
              .filter((station) => {
                return station.Designation === currentStation;
              })
              .map((velo) => {
                return (
                  <StationCard
                    AccessInformationFr={velhop.AccessInformation_FR}
                    {...velo}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}
export default Velhop;
