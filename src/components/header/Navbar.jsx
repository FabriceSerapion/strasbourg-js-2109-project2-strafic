import React, { useState } from 'react';

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
            <a href="/#">
              <i className="bx bx-grid-alt" />
              <span className="links_name">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/#">
              <i className="bx bxs-map" />
              <span className="links_name">Lignes et plans</span>
            </a>
          </li>
          <li>
            <a href="/#">
              <i className="bx bxs-store" />
              <span className="links_name">Point de vente</span>
            </a>
          </li>
          <li>
            <a href="/#">
              <i className="bx bxs-parking" />
              <span className="links_name">Parking relais</span>
            </a>
          </li>
          <li>
            <a href="/#">
              <i className="bx bx-cycling" />
              <span className="links_name">Veloparc</span>
            </a>
          </li>
          <li>
            <a href="/#">
              <i className="bx bx-cart-alt" />
              <span className="links_name">Velhop</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
