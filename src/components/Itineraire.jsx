import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Itineraire() {
  const [allLine, setAllLine] = useState([]);
  const [select, setSelect] = useState();
  let infoList = [];
  function changeValueSelect(e) {
    setSelect(e.target.value);
  }
  const config = {
    method: 'get',
    url: 'https://api.cts-strasbourg.eu/v1/siri/2.0/estimated-timetable',
    headers: {
      Authorization:
        'Basic Mzc5ZGI0NzgtYjMxOS00ZmZlLWJlNTctM2UzNWNkNjg0NTUyOg==',
    },
  };
  useEffect(() => {
    axios(config)
      .then(function (response) {
        setAllLine(
          response.data.ServiceDelivery.EstimatedTimetableDelivery[0]
            .EstimatedJourneyVersionFrame
        );
        console.log(allLine);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="itineraire-container">
      <div className="logo" />
      <div className="presentation-itineraire" />
      <h2>
        Simplifiez-vous la vie en découvrant les horaires de passages des Bus et
        Tram dans l&apos;agglomération strasbourgeoise.
      </h2>
      <div className="itineraire">
        <select onChange={changeValueSelect} className="choice-line">
          <option>Veuillez selectionner une destination</option>
          {allLine &&
            allLine.map((line) => {
              return (
                <option>
                  {
                    line.EstimatedVehicleJourney[0].EstimatedCalls[0]
                      .DestinationName
                  }
                </option>
              );
            })}
        </select>
      </div>
      <div className="itineraire-card">
        {allLine &&
          allLine
            .filter((line) => {
              return (
                line.EstimatedVehicleJourney[0].EstimatedCalls[0]
                  .DestinationName === select
              );
            })
            .map((lines) => {
              return lines.EstimatedVehicleJourney[0].EstimatedCalls;
            })
            .map((info) => {
              infoList = info.map((infos) => {
                return `${
                  infos.StopPointName
                } ${infos.ExpectedArrivalTime.substring(11, 19)}`;
              });
              return (
                <div>
                  {infoList.map((information) => (
                    <p>{information}</p>
                  ))}
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Itineraire;
