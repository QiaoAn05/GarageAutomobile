import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fonction pour gérer le formulaire de connexion
  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('/profile', { email, password })
      .then(response => {
        // console.log(response.config.data);
        // console.log(response);
        window.location.href = '/profile';
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la connexion :', error);
      });
  };

  return (
    <main>
      <section className='container comment-form w-50 my-5'>
        <h2 className='text-center mb-5'>Connectez-vous en tant que membre du personnel autorisé</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="emailLogin"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="passwordLogin"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-dark w-100 text-warning">Envoyer</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
