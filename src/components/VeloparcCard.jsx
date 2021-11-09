import React from 'react';
import PropTypes from 'prop-types';

function VeloparcCard(props) {
  const { Designation, AccessInformation } = props;
  return (
    <div
      className="parking-card-item"
      style={{ fontSize: '1.5em', fontWeight: 'bold', margin: '30px auto' }}
    >
      <h3>Veloparc localisé à l&apos;arrét: {Designation}</h3>
      <p style={{ fontSize: '0.7em', margin: '30px auto' }}>
        {AccessInformation}
      </p>
    </div>
  );
}
VeloparcCard.propTypes = {
  Designation: PropTypes.string.isRequired,
  AccessInformation: PropTypes.string.isRequired,
};

export default VeloparcCard;
