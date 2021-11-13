import React from 'react';
import PropTypes from 'prop-types';

function LignesetPlansCard(props) {
  const { LineName, LineRef, Extension, pdf } = props;
  return (
    <div className="plan-et-lignes-item">
      <h3 style={{ fontSize: '2em' }}>
        Nom de ligne:
        <br />
        {LineName}
      </h3>
      <p style={{ fontSize: '1.5em' }}>
        N° de ligne :{' '}
        <span
          style={{
            color: 'darkred',
            fontWeight: 'bold',
            fontSize: '1.5em',
            margin: '30px auto',
          }}
        >
          {LineRef}
        </span>
        <br /> Type de ligne :{' '}
        <span
          style={{
            color: 'gold',
            fontWeight: 'bold',
            fontSize: '1.5em',
            margin: '30px auto',
            paddingBottom: '30px',
          }}
        >
          {Extension.RouteType}
        </span>
        <br />
        <span
          style={{
            fontWeight: 'bold',
            fontSize: '1em',
          }}
        >
          <a href={pdf}>Lien vers le plan</a>
        </span>
      </p>
    </div>
  );
}

LignesetPlansCard.propTypes = {
  LineName: PropTypes.string.isRequired,
  LineRef: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  Extension: PropTypes.object.isRequired,
  pdf: PropTypes.string.isRequired,
};

export default LignesetPlansCard;
