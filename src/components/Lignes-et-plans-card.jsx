import React from 'react';
import PropTypes from 'prop-types';

function LignesetPlansCard(props) {
  const { LineName, LineRef, Extension } = props;
  return (
    <div
      className="parking-card-item"
      style={{ fontSize: '1.5em', fontWeight: 'bold', margin: '30px auto' }}
    >
      <h3>Nom de ligne:{LineName}</h3>
      <p style={{ fontSize: '0.5em', margin: '30px auto' }}>
        {LineRef} <span>{Extension.RouteType}</span>
      </p>
    </div>
  );
}
LignesetPlansCard.propTypes = {
  LineName: PropTypes.string.isRequired,
  LineRef: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  Extension: PropTypes.object.isRequired,
};

export default LignesetPlansCard;
