import React from 'react';
import PropTypes from 'prop-types';

function VenteCard(props) {
  const { Designation, Address, RetailOutletType } = props;
  return (
    <div className="vente-card-item" style={{ fontSize: '1.5em' }}>
      <h3 style={{ color: 'red' }}>{Designation}</h3>
      <p>
        <span
          style={{
            fontWeight: 'bold',
            margin: '30px auto',
            marginTop: '30px',
          }}
        >
          {Address}
        </span>{' '}
      </p>
      <p style={{ fontSize: '0.7em', margin: '30px auto' }}>
        {RetailOutletType}
      </p>
    </div>
  );
}

VenteCard.propTypes = {
  Designation: PropTypes.string.isRequired,
  Address: PropTypes.string.isRequired,
  RetailOutletType: PropTypes.string.isRequired,
};

export default VenteCard;
