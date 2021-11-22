import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/FormulaireConnexion.css';
import axios from 'axios';

const Connexion = () => {
  const [identifiant, setIdentifiant] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeIdentifiant(e) {
    setIdentifiant(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (identifiant && password) {
      axios
        .get('http://localhost:3005/connexion')
        .then((response) => {
          console.log("Données récupérées depuis l'API");
          console.log(response);
        })
        .catch((error) => {
          console.log(`Erreur lors de la récupération depuis l'API : ${error}`);
        });
    }
  }
  return (
    <div className="connexion-global-container">
      <div className="img-container" />
      <div className="formulaire-connexion">
        <h2>Connexion</h2>
        <form>
          <div className="input-div">
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                pattern=".+@globex\.com"
                required
                autoComplete="off"
                onChange={handleChangeIdentifiant}
              />
            </label>
          </div>
          <div className="input-div">
            <label htmlFor="password">
              Mot de passe
              <input
                type="password"
                id="password"
                autoComplete="off"
                required
                onChange={handleChangePassword}
              />
            </label>
          </div>
        </form>
        <div className="buttons">
          <button type="submit" id="forgot-password">
            Mot de passe oublié ?
          </button>
          <button type="submit" id="connexion-login" onClick={handleSubmit}>
            connexion
          </button>
          <button type="submit" id="retour">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <span className="links_name">retour au menu</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
