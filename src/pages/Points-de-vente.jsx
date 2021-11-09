import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VenteCard from '../components/VenteCard';
import Navbar from '../components/Navbar';

function PointsDeVente() {
  const [vente, setVente] = useState([]);
  const [select, setSelect] = useState();

  function changeValueSelect(e) {
    setSelect(e.target.value);
  }

  const config = {
    method: 'get',
    url: 'https://api.cts-strasbourg.eu/v1/cts/retail-outlet',
    headers: {
      Authorization:
        'Basic Mzc5ZGI0NzgtYjMxOS00ZmZlLWJlNTctM2UzNWNkNjg0NTUyOg==',
    },
  };

  useEffect(() => {
    axios(config)
      // eslint-disable-next-line func-names
      .then(function (response) {
        setVente(response.data.RetailOutlet);
      })
      // eslint-disable-next-line func-names
      .catch(function (error) {
        return error;
      });
  }, []);

  return (
    <div className="vente-container">
      <Navbar />
      <div className="presentation-vente">
        <h2>Points de Vente</h2>
        <p>Votre point de vente près de chez vous</p>
      </div>
      <h3>Trouvez votre point de vente en un click.</h3>
      <div className="image-vente" />
      <div className="choice-vente-container">
        <select onChange={changeValueSelect} className="choice-vente">
          <option>Selectionnez un point de vente...</option>
          {vente &&
            vente.map((point) => {
              return <option>{point.Designation}</option>;
            })}
        </select>
        <div className="vente-card">
          {vente &&
            vente
              .filter((pointvente) => {
                return pointvente.Designation === select;
              })
              .map((pointventes) => {
                return (
                  <VenteCard Address={pointventes.Address} {...pointventes} />
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default PointsDeVente;
