import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = (props) => {
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    axios.get('/profile')
      .then(response => {
        // setUserData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des détails de l\'utilisateur :', error);
      });
  }, []);

  return (
    <main>
      <section className='col-12 m-5'>
          <div className="card mb-3 w-50 px-5 py-3">
            <div className="row g-0">
              <h2 className='mb-5'>Mes informations personnelles</h2>
              <div className="col-md-4">
                <p><b>Nom: </b> </p>
                <p><b>Prénom:</b> </p>
                <p><b>Tél:</b> </p>
                <p><b>Email:</b> </p>
              </div>
              <div className="col-md-8 text-end">
                <p>Rôle: </p>
              </div>
              <div className='col-12 d-flex justify-content-end'>
                <button type="submit" className="btn btn-dark text-warning">Modifier</button>
              </div>
            </div>
          </div>
      </section>
    </main>
  );
};

export default Profile;
