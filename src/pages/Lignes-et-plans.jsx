import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import LignesetPlansCard from '../components/Lignes-et-plans-card';
import Navbar from '../components/Navbar';

function LignesEtPlans() {
  const [planetlignes, setPlanEtLignes] = useState([]);
  const [select, setSelect] = useState('');
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
      const modifiedResponse = response.data.LinesDelivery.AnnotatedLineRef;
      modifiedResponse[0].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne10_web_rentree2021.pdf';
      modifiedResponse[1].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne12_web_rentree2021.pdf';
      modifiedResponse[2].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne13_web_rentree2021.pdf';
      modifiedResponse[3].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne14_24_web_rentree2021.pdf';
      modifiedResponse[4].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne15_web_rentree2021.pdf';
      modifiedResponse[5].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne17_web_rentree2021.pdf';
      modifiedResponse[6].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne19_web_rentree2021.pdf';
      modifiedResponse[7].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/Hiver%202021/Ligne2_web_rentree2021%20(2).pdf';
      modifiedResponse[8].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne22_web_rentree2021.pdf';
      modifiedResponse[9].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne14_24_web_rentree2021.pdf';
      modifiedResponse[10].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne27_web_rentree2021.pdf';
      modifiedResponse[11].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne29_web_rentree2021.pdf';
      modifiedResponse[12].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne30_web_rentree2021.pdf';
      modifiedResponse[13].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne31_web_rentree2021.pdf';
      modifiedResponse[14].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne4_4a_web_rentree2021.pdf';
      modifiedResponse[15].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne40_web_rentree2021.pdf';
      modifiedResponse[16].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne41_web_rentree2021.pdf';
      modifiedResponse[17].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne42_web_rentree2021.pdf';
      modifiedResponse[18].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne43_web_rentree2021.pdf';
      modifiedResponse[19].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne44_web_rentree2021.pdf';
      modifiedResponse[20].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne45_web_rentree2021.pdf';
      modifiedResponse[21].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne4_4a_web_rentree2021.pdf';
      modifiedResponse[22].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne50_web_rentree2021.pdf';
      modifiedResponse[23].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne57_67_web_rentree2021.pdf';
      modifiedResponse[24].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne60_web_rentree2021.pdf';
      modifiedResponse[25].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne62_web_rentree2021.pdf';
      modifiedResponse[26].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne63_web_rentree2021.pdf';
      modifiedResponse[27].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne64_web_rentree2021.pdf';
      modifiedResponse[28].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne67_web_rentree2021.pdf';
      modifiedResponse[29].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne70_web_rentree2021.pdf';
      modifiedResponse[30].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne70_web_rentree2021.pdf';
      modifiedResponse[31].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne71_web_rentree2021.pdf';
      modifiedResponse[32].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne72_web_rentree2021.pdf';
      modifiedResponse[33].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne73_web_rentree2021.pdf';
      modifiedResponse[34].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne74_web_rentree2021.pdf';
      modifiedResponse[35].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne75_web_rentree2021.pdf';
      modifiedResponse[36].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne76_web_rentree2021.pdf';
      modifiedResponse[37].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/TramA_web_rentree2021.pdf';
      modifiedResponse[38].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/TramA_web_rentree2021.pdf';
      modifiedResponse[39].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/TramB_web_rentree2021.pdf';
      modifiedResponse[40].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/TramC_web_rentree2021.pdf';
      modifiedResponse[41].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/TramD_web_rentree2021.pdf';
      modifiedResponse[42].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/TramE_web_rentree2021.pdf';
      modifiedResponse[43].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/TramF_web_rentree2021.pdf';
      modifiedResponse[44].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/TramA_web_rentree2021.pdf';
      modifiedResponse[45].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/LigneG_web_rentree2021.pdf';
      modifiedResponse[46].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/LigneH_web_rentree2021.pdf';
      modifiedResponse[47].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne1_web_rentree2021.pdf';
      modifiedResponse[48].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne3_web_rentree2021.pdf';
      modifiedResponse[49].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne6_web_rentree2021.pdf';
      modifiedResponse[50].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne1_web_rentree2021.pdf';
      modifiedResponse[51].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne1_web_rentree2021.pdf';
      modifiedResponse[52].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne1_web_rentree2021.pdf';
      modifiedResponse[53].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne1_web_rentree2021.pdf';
      modifiedResponse[54].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne1_web_rentree2021.pdf';
      modifiedResponse[55].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne1_web_rentree2021.pdf';
      modifiedResponse[56].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne1_web_rentree2021.pdf';
      modifiedResponse[57].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne1_web_rentree2021.pdf';
      modifiedResponse[58].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne1_web_rentree2021.pdf';
      modifiedResponse[59].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne1_web_rentree2021.pdf';
      modifiedResponse[60].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne1_web_rentree2021.pdf';
      modifiedResponse[61].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne1_web_rentree2021.pdf';
      modifiedResponse[62].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne1_web_rentree2021.pdf';
      modifiedResponse[63].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne1_web_rentree2021.pdf';
      modifiedResponse[64].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne1_web_rentree2021.pdf';
      modifiedResponse[65].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne1_web_rentree2021.pdf';
      modifiedResponse[66].pdf =
        'https://media.cts-strasbourg.eu/fiches-horaires/lignes/HORAIRES%20Hiver%202021-22/Filezilla/Ligne1_web_rentree2021.pdf';
      setPlanEtLignes(modifiedResponse);
    });
  }, []);

  return (
    <div className="plan-et-lignes-container">
      <Navbar />
      <div className="plan-et-lignes-presentation">
        <h2>Plans et Lignes du réseau</h2>
        <p>Un bon plan, votre ligne, tout est ici !</p>
      </div>
      <h3>Trouvez votre plan ou ligne en un click.</h3>
      <div className="plan-et-lignesimage-video" />
      <div className="choice-plan-et-lignes-container">
        <select onChange={changeValueSelect} className="choice-park">
          <option>Selectionnez votre ligne</option>
          {planetlignes &&
            planetlignes.map((parking) => {
              // console.log(parking);
              return (
                <option>{`${parking.LineName} : ${parking.LineRef}`}</option>
              );
            })}
        </select>
        <div className="park-card">
          {planetlignes &&
            planetlignes
              .filter((filterpetl) => {
                const copyselect = select.split(' : ');
                return filterpetl.LineName === copyselect[0];
              })
              .map((mappetl) => {
                return <LignesetPlansCard {...mappetl} />;
              })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LignesEtPlans;
