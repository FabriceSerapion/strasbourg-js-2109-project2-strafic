import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LignesetPlansCard from '../components/Lignes-et-plans-card';
import Navbar from '../components/Navbar';

function LignesEtPlans() {
  const [velopark, setVeloPark] = useState([]);
  const [select, setSelect] = useState();
  function changeValueSelect(e) {
    setSelect(e.target.value);
  }
  const config = {
    method: 'get',
    url: 'https://api.cts-strasbourg.eu/v1/siri/2.0/lines-discovery',
    headers: {
      Authorization:
        'Basic Mzc5ZGI0NzgtYjMxOS00ZmZlLWJlNTctM2UzNWNkNjg0NTUyOg==',
    },
  };
  useEffect(() => {
    axios(config).then(function res(response) {
      setVeloPark(response.data.LinesDelivery.AnnotatedLineRef);
    });
  }, []);

  return (
    <div className="parking-container">
      <Navbar />
      <div className="planetlignepresentation">
        <h2>Plans et Lignes du réseau</h2>
        <p>Un bon plan, votre ligne, tout est ici !</p>
      </div>
      <h3>Trouvez votre plan ou ligne en un click.</h3>
      <div className="planetligneimage-video" />
      <div className="choice-park-container">
        <select onChange={changeValueSelect} className="choice-park">
          <option>Selectionnez votre ligne</option>
          {velopark &&
            velopark.map((parking) => {
              // console.log(parking);
              return <option>{parking.LineName}</option>;
            })}
        </select>
        <div className="park-card">
          {velopark &&
            velopark
              .filter((véloparc) => {
                return véloparc.LineName === select;
              })
              .map((veloparks) => {
                return (
                  <LignesetPlansCard
                    AccessInformation={veloparks.LineRef}
                    {...veloparks}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default LignesEtPlans;
