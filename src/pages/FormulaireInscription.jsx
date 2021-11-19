import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/FormulaireInscription.css';

export default function Inscription() {
  let firstName;
  let lastName;
  let email;
  let password;
  function handleChangeFirstName(e) {
    firstName = e.target.value;
    console.log(firstName);
  }
  function handleChangeLastName(e) {
    lastName = e.target.value;
    console.log(lastName);
  }
  function handleChangeEmail(e) {
    email = e.target.value;
    console.log(email);
  }
  function handleChangePasswword(e) {
    password = e.target.value;
    console.log(password);
  }
  return (
    <div className="inscription-global-container">
      <div className="img-container" />
      <div className="formulaire-inscription">
        <h2>Inscription</h2>
        <form metod="post">
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
                onChange={handleChangePasswword}
              />
            </label>
          </div>
          <div className="buttons-inscription">
            <button type="submit" id="connexion-login">
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
