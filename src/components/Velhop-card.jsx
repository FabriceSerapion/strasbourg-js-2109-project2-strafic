import React from 'react';
import PropTypes from 'prop-types';

function StationCard(props) {
  const { Designation, AvailableBikes, AccessInformationFr } = props;
  return (
    <div className="station-card-item">
      <h3 style={{ fontSize: '2em' }}>{Designation}</h3>
      <p>
        <span
          style={{
            color: 'red',
            fontWeight: 'bold',
            fontSize: '2.5em',
            margin: '30px auto',
          }}
        >
          {AvailableBikes}
          <br />
        </span>{' '}
        {AvailableBikes ? 'Vélos disponibles' : 'Aucun vélo disponible'}
      </p>
      <p style={{ fontSize: '0.9em', margin: '30px auto' }}>
        {AccessInformationFr}
      </p>
    </div>
  );
}

StationCard.propTypes = {
  Designation: PropTypes.string.isRequired,
  AvailableBikes: PropTypes.string.isRequired,
  AccessInformationFr: PropTypes.string.isRequired,
};

export default StationCard;
