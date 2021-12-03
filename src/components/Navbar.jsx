import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [navOpen, setnavOpen] = useState('bx bx-menu');
  const [open, setOpen] = useState('sidebar');

  function menuBtnChange() {
    setnavOpen((prevNavOpen) =>
      prevNavOpen === 'bx bx-menu' ? 'bx-menu-alt-right' : 'bx bx-menu'
    );

    setOpen((prevOpen) =>
      prevOpen === 'sidebar' ? 'sidebar open' : 'sidebar'
    );
  }

  return (
    <div className="App">
      <div className={open}>
        <div className="logo-details">
          <div className="logo_name">
            STRAFIC.
            <br />
            <span className="logo-title">When and where you want.</span>
          </div>
          <i
            className={navOpen}
            id="btn"
            onClick={menuBtnChange}
            aria-hidden="true"
          />
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/">
              <i className="bx bx-grid-alt" />
              <span className="links_name">Accueil</span>
            </Link>
          </li>
          <li>
            <Link to="/lignes-et-plans">
              <i className="bx bxs-map" />
              <span className="links_name">Lignes et plans</span>
            </Link>
          </li>
          <li>
            <Link to="/points-de-vente">
              <i className="bx bxs-store" />
              <span className="links_name">Points de vente</span>
            </Link>
          </li>
          <li>
            <Link to="/parkings-relais">
              <i className="bx bxs-parking" />
              <span className="links_name">Parkings-relais</span>
            </Link>
          </li>
          <li>
            <Link to="/veloparc">
              <i className="bx bx-cycling" />
              <span className="links_name">Véloparc</span>
            </Link>
          </li>
          <li>
            <Link to="/velhop">
              <i className="bx bx-cart-alt" />
              <span className="links_name">Stations vélhop</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
