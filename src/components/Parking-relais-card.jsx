import React from 'react';
import PropTypes from 'prop-types';

function ParkCard(props) {
  const { Designation, AvailableParkingSpots, AccessInformation } = props;
  return (
    <div className="parking-card-item" style={{ fontSize: '1.5em' }}>
      <h3>P+R {Designation}</h3>
      <p>
        <span
          style={{
            color: 'red',
            fontWeight: 'bold',
            fontSize: '2.5em',
            margin: '30px auto',
          }}
        >
          {AvailableParkingSpots}
        </span>{' '}
        places disponibles
      </p>
      <p style={{ fontSize: '0.7em', margin: '30px auto' }}>
        {AccessInformation}
      </p>
    </div>
  );
}

ParkCard.propTypes = {
  Designation: PropTypes.string.isRequired,
  AvailableParkingSpots: PropTypes.string.isRequired,
  AccessInformation: PropTypes.string.isRequired,
};

export default ParkCard;
