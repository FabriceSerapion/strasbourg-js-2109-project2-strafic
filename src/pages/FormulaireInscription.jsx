import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/FormulaireInscription.css';
import axios from 'axios';

export default function Inscription() {
  const [userFirstname, setUserFirstname] = useState('');
  const [userLastname, setUserLastname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  function handleChangeFirstName(e) {
    setUserFirstname(e.target.value);
  }
  function handleChangeLastName(e) {
    setUserLastname(e.target.value);
  }
  function handleChangeEmail(e) {
    setUserEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setUserPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (userFirstname && userLastname && userEmail && userPassword) {
      const userInfos = {
        firstname: userFirstname,
        lastname: userLastname,
        email: userEmail,
        password: userPassword,
      };
      axios
        .post('http://localhost:3005/inscription', userInfos)
        .then((response) => {
          console.log(
            "Les données de l'utilisateur ont été transmis au back-end avec succès."
          );
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  return (
    <div className="inscription-global-container">
      <div className="img-container" />
      <div className="formulaire-inscription">
        <h2>Inscription</h2>
        <form>
          <div className="input-div">
            <label htmlFor="firstname">
              Prénom
              <input
                type="text"
                id="firstname"
                autoComplete="off"
                onChange={handleChangeFirstName}
              />
            </label>
          </div>
          <div className="input-div">
            <label htmlFor="lastname">
              Nom
              <input
                type="text"
                id="lastname"
                autoComplete="off"
                onChange={handleChangeLastName}
              />
            </label>
          </div>
          <div className="input-div">
            <label htmlFor="email">
              Email
              <input
                type="text"
                id="email"
                autoComplete="off"
                onChange={handleChangeEmail}
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
                onChange={handleChangePassword}
              />
            </label>
          </div>
          <div className="buttons-inscription">
            <button type="submit" id="connexion-login" onClick={handleSubmit}>
              Enregistrer
            </button>
          </div>
        </form>
        <div className="buttons-inscription">
          <button type="submit" id="retour">
            <Link to="/" style={{ textDecoration: 'none', color: 'gold' }}>
              <span className="links_name">Retour au menu</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
