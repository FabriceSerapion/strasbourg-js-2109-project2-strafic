import React from 'react';
import PropTypes from 'prop-types';

function VeloparcCard(props) {
  const { Designation, AccessInformation } = props;
  return (
    <div className="veloparc-card-item">
      <h3 style={{ fontSize: '0.75em' }}>
        Véloparc localisé à l&apos;arrêt :{' '}
        <span style={{ color: 'gold' }}>{Designation}</span>
      </h3>
      <p style={{ fontSize: '0.4em', margin: '0px auto' }}>
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
