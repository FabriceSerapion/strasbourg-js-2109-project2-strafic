import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text, adresse }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'column',
    }}
  >
    <div
      className="zoom"
      style={{
        fontSize: '0.88rem',
        padding: '10px 10px',
        display: 'inline-flex',
        justifyContent: 'center',
        borderRadius: '20%',
        flexDirection: 'column',
        textAlign: 'center',
        boxShadow:
          'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
      }}
    >
      <div className="myDIV">{text}</div>
      <div
        className="hide"
        style={{
          color: 'gold',
          marginTop: '5px',
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
      lat: 48.582394,
      lng: 7.747086,
    },
    zoom: 12.3,
  };

  render() {
    return (
      <div className="background-gradient">
        <div
          className="contenu"
          style={{
            width: '80vw',
            height: '95vh',
            margin: 'auto',
            boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
          }}
        >
          <div className="maps-veloparc">
            <div
              className="maps-veloparc-style"
              style={{
                height: '85vh',
                width: '80vw',
                alignSelf: 'center',
                borderRadius: '30px 30px 0px 0px',
                overflow: 'hidden',
              }}
            >
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: 'AIzaSyDuFh71r1YFwbBwDhh4MrcJHdMJdfbK-84',
                }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                <Marker
                  lat={48.544667}
                  lng={7.735717}
                  text="Arrêt Baggersee"
                  adresse="27 av de Strasbourg"
                />
                <Marker
                  lat={48.528882}
                  lng={7.732869}
                  text="Campus dIllkirch"
                  adresse="40 Rue de l'Industrie"
                />
                <Marker
                  lat={48.616464}
                  lng={7.720137}
                  text="Espace Européen"
                  adresse="Rue du Triage"
                />
                <Marker
                  lat={48.628589}
                  lng={7.758078}
                  text="Hoenheim Gare"
                  adresse="Rue Simon Veil / Hoenheim Tram"
                />
                <Marker
                  lat={48.566872}
                  lng={7.773471}
                  text="Jean Jaurès"
                  adresse="100 Rue Jean Jaurès"
                />
                <Marker
                  lat={48.598321}
                  lng={7.778148}
                  text="Robertsau Boecklin"
                  adresse="5 Rue des Fleurs"
                />
                <Marker
                  lat={48.529968}
                  lng={7.725073}
                  text="Illkirch Lixenbuhl"
                  adresse="18 Rue Lixenbuhl"
                />
                <Marker
                  lat={48.554927}
                  lng={7.767354}
                  text="Kibitzenau"
                  adresse="Rue Paul Dopff / Parking Kibitzenau"
                />
                <Marker
                  lat={48.561266}
                  lng={7.750311}
                  text="Krimmeri Stade de la Meineau"
                  adresse="28 Rte de la Fédération"
                />
                <Marker
                  lat={48.57434}
                  lng={7.72623}
                  text="Montagne Verte"
                  adresse="4 rue de la montagne verte"
                />
                <Marker
                  lat={48.598604}
                  lng={7.694957}
                  text="Parc des Sports"
                  adresse="Av. Racine/rue Baden Powell"
                />
                <Marker
                  lat={48.470277}
                  lng={7.726333}
                  text="Plobsheim Mairie"
                  adresse="1 rue Langgarten"
                />
                <Marker
                  lat={48.583357}
                  lng={7.691699}
                  text="Poteries"
                  adresse="39 Av. François Mitterrand"
                />
                <Marker
                  lat={48.648487}
                  lng={7.75119}
                  text="Reichstett"
                  adresse="20 Rue du Général de Gaulle"
                />
                <Marker
                  lat={48.599933}
                  lng={7.754273}
                  text="Rives de l'Aar"
                  adresse="Rue Frédéric-Guillaume-Raiffeisen"
                />
                <Marker
                  lat={48.598321}
                  lng={7.778148}
                  text="Robertsau Boecklin"
                  adresse="5 Rue des Fleurs"
                />
                <Marker
                  lat={48.591613}
                  lng={7.725112}
                  text="Rotonde"
                  adresse="5 Rue de la Rotonde"
                />
                <Marker
                  lat={48.582513}
                  lng={7.73269}
                  text="Sainte Aurélie"
                  adresse="1 Boulevard de Metz"
                />
                <Marker
                  lat={48.568682}
                  lng={7.752021}
                  text="Schluthfeld"
                  adresse="3 Pl. du Schluthfeld"
                />
                <Marker
                  lat={48.583136}
                  lng={7.74386}
                  text="Tanneurs"
                  adresse="27 Rue du Fossé-des-Tanneurs"
                />
              </GoogleMapReact>
            </div>
              <p id="text">
                Trouvez rapidement le véloparc que vous souhaitez grâce à la carte !
              </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleMap;
