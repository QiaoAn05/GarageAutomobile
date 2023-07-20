import React from 'react';
import Logo from '../../images/logo_parrot.png';

const Header = (props) => {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={Logo} className="img-fluid rounded-start" alt="Logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={false} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Accueil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Réparations & entretiens</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Ventes d'occasion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Connection</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Header;