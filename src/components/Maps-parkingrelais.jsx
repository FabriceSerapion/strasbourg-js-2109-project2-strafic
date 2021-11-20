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
      lng: 7.741757,
    },
    zoom: 12.8,
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
                  text="Baggersee"
                  adresse="Arrêt de tram baggersee"
                />
                <Marker
                  lat={48.589259}
                  lng={7.71599}
                  text="Ducs d'Alsace"
                  adresse="Arrêt Ducs d'Alsace"
                />
                <Marker
                  lat={48.616801}
                  lng={7.719557}
                  text="Espace Européen de l'Entreprise"
                  adresse="Arrêt Espace Européen"
                />
                <Marker
                  lat={48.627909}
                  lng={7.75781}
                  text="Hoenheim Gare"
                  adresse="Arrêt Hoenheim gare"
                />
                <Marker
                  lat={48.561266}
                  lng={7.750311}
                  text="Krimmeri Stade de la Meinau"
                  adresse="Arrêt de tram Krimmeri Meinau"
                />
                <Marker
                  lat={48.568423}
                  lng={7.730333}
                  text="Elsau"
                  adresse="Arrêt de tram Elsau"
                />
                <Marker
                  lat={48.5811}
                  lng={7.72361}
                  text="Parc des Romains"
                  adresse="Arrêt Parc des Romains"
                />
                <Marker
                  lat={48.583699}
                  lng={7.691482}
                  text="Poteries"
                  adresse="Arrêt de tram Poteries"
                />
                <Marker
                  lat={48.599652}
                  lng={7.753834}
                  text="Rives de l'Aar"
                  adresse="Arrêt Rives de l'Aar"
                />
                <Marker
                  lat={48.597991}
                  lng={7.776587}
                  text="Robertsau Boecklin"
                  adresse="Arrêt Robertsau Boecklin"
                />
                <Marker
                  lat={48.591333}
                  lng={7.724829}
                  text="Rotonde"
                  adresse="Arrêt de tram Rotonde"
                />
              </GoogleMapReact>
            </div>
              <p id="text">
                Selon votre choix trouvez le véloparc grâce à la carte !
              </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleMap;
