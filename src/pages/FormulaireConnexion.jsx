import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/FormulaireConnexion.css';

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    const newEntry = { email, password };

    setAllEntry([...allEntry, newEntry]);
  };

  function handleClick(e) {
    e.preventDefault();
    if (email && password) {
      alert('Vous êtes connecté');
    } else {
      alert('Veuillez renseigner tous les champs');
    }
  }
  return (
    <div className="connexion-global-container">
      <div className="img-container" />
      <div className="formulaire-connexion">
        <h2>Connexion</h2>
        <form action="" onSubmit={submitForm}>
          <div className="input-div">
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                pattern=".+@globex\.com"
                required
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
        </form>
        <div className="buttons">
          <button type="submit" id="forgot-password">
            Mot de passe oublié ?
          </button>
          <button type="submit" id="connexion-login" onClick={handleClick}>
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
