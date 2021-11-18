 
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";


const Marker = ({ text, adresse }) => (
  <div
    style={{
      display:"flex",
      justifyContent: "column",
    }}
  >
    <div className="zoom"
      style={{
        fontSize:"0.60rem",
        color: "white",
        background: "black",
        padding: "7px 7px",
        display: "inline-flex",
        justifyContent: "center",
        borderRadius: "20%",
        flexDirection:"column",
        textAlign: "center",
        boxShadow:
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      }}
    > 
      <div className="myDIV">
      {text} 
      </div> 
      <div className='hide'
        style={{
          color: "gold",
          marginTop:"5px",
        }}
      >
        {adresse}
      </div>
    </div>
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.5734053,
      lng: 7.7521113,
    },
    zoom: 12.5,
  };

  render() {
    return (
      <div className="background-gradient">
        <div
          className="contenu"
          style={{
            width: "80vw",
            height: "95vh",
            margin: "auto",
            boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="maps-velhop">
            <div
              className="maps-velhop-style"
              style={{
                height: "85vh",
                width: "80vw",
                alignSelf: "center",
                borderRadius: "30px 30px 0px 0px",
                overflow: "hidden",
              }}
            >
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyDuFh71r1YFwbBwDhh4MrcJHdMJdfbK-84",
                }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                <Marker
                  lat={48.604604}
                  lng={7.74664}
                  text="Boutique Schiltigheim"
                  adresse="3 rue Saint-Charles"
                />
                <Marker
                  lat={48.583596}
                  lng={7.762116}
                  text="Boutique Université"
                  adresse="23 boulevard de la Victoire"
                />
                <Marker lat={48.568644} lng={7.795621} text="Station automatique" adresse="124 Auberge de jeunesse" />
                <Marker lat={48.529616} lng={7.734226} text="Station automatique" adresse="111 Campus d'Illkirch" />
                <Marker lat={48.578462} lng={7.749776} text="Boutique et Station automatique" adresse="101 Centre" />
                <Marker
                  lat={48.578462}
                  lng={7.749776}
                  text="Station automatique"
                  adresse="102 Centre 2"
                />
                <Marker
                  lat={48.612597}
                  lng={7.71163}
                  text="Station automatique"
                  adresse="126 Espace Européen de l'Entreprise"
                />
                <Marker lat={48.585082} lng={7.735024} text="Boutique et Station automatique" adresse="103 Gare de Strasbourg" />
                <Marker
                  lat={48.628353}
                  lng={7.760103}
                  text="Station automatique"
                  adresse="115 Hoenheim Gare"
                />
                <Marker lat={48.54919} lng={7.740754} text="Station automatique" adresse="112 Hohwart" />
                <Marker lat={48.5791} lng={7.713481} text="Boutique et Station automatique" adresse="123 Koenigshoffen" />
                <Marker
                  lat={48.551032}
                  lng={7.7112}
                  text="Station automatique"
                  adresse="127 Ostwald Hôtel de Ville"
                />
                <Marker lat={48.578005} lng={7.751863} text="Station automatique" adresse="114 Parking Austerlitz" />
                <Marker lat={48.585415} lng={7.749395} text="Station automatique" adresse="113 Parking Broglie" />
                <Marker lat={48.584504} lng={7.768772} text="Station automatique" adresse="109 Place Arnold"/>
                <Marker
                  lat={48.585678}
                  lng={7.733542}
                  text="Station automatique"
                  adresse="108 Gare Nord"
                />
                <Marker lat={48.584209} lng={7.734519} text="Station automatique" adresse="106 Gare Sud" />
                <Marker lat={48.580314} lng={7.776203} text="Station automatique" adresse="116 Place Islande" />
                <Marker lat={48.565864} lng={7.759242} text="Station automatique" adresse="125 Place du Marché Neudorf" />
                <Marker lat={48.598096} lng={7.777902} text="Station automatique" adresse="110 Robertsau Boecklin" />
                <Marker lat={48.591639} lng={7.725089} text="Station automatique" adresse="105 Rotonde" />
                <Marker lat={48.606759} lng={7.749183} text="Station automatique" adresse="122 Schiltigheim Mairie" />
                <Marker lat={48.582023} lng={7.766771} text="Station automatique" adresse="107 Université" />
              </GoogleMapReact>
            </div>
            <div id="test" style={{
                marginTop:'-5px',
              }}>
              <p id="text" >
                Trouvez rapidement la station que vous souhaitez grâce à la carte !
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleMap;
