import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VeloparcCard from '../components/VeloparcCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Veloparc() {
  const [velopark, setVeloPark] = useState([]);
  const [select, setSelect] = useState();
  function changeValueSelect(e) {
    setSelect(e.target.value);
  }
  const config = {
    method: 'get',
    url: 'https://api.cts-strasbourg.eu/v1/cts/veloparc',
    headers: {
      Authorization:
        'Basic Mzc5ZGI0NzgtYjMxOS00ZmZlLWJlNTctM2UzNWNkNjg0NTUyOg==',
    },
  };
  useEffect(() => {
    axios(config).then(function res(response) {
      setVeloPark(response.data.Veloparc);
    });
  }, []);

  return (
    <div className="parking-container">
      <Navbar />
      <div className="veloparcpresentation">
        <h2>VéloParc (V+P)</h2>
        <p>Strasbourg ville des vélos volés.</p>
      </div>
      <h3>Trouvez votre véloparc en un click.</h3>
      <div className="veloparcimage-video" />
      <div className="choice-park-container">
        <select onChange={changeValueSelect} className="choice-park">
          <option>Selectionnez un véloparc</option>
          {velopark &&
            velopark.map((parking) => {
              // console.log(parking);
              return <option>{parking.Designation}</option>;
            })}
        </select>
        <div className="park-card">
          {velopark &&
            velopark
              .filter((véloparc) => {
                return véloparc.Designation === select;
              })
              .map((veloparks) => {
                return (
                  <VeloparcCard
                    AccessInformation={veloparks.AccessInformation_FR}
                    {...veloparks}
                  />
                );
              })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Veloparc;
