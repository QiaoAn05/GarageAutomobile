import React from 'react';


const Profile = (props) => {
  const users = props.users;
  console.log(users);
  return (
    <main>
      <section className='col-12 m-5'>        
        <div className="card mb-3 w-50 px-5 py-3">
          <div className="row g-0">
            <h2 className='mb-5'>Mes informations personnelles</h2>
            <div className="col-md-4">
              <p><b>Nom:</b> </p>
              <p><b>Prénom:</b> </p>
              <p><b>Tél: </b> </p>
              <p><b>Email: </b> </p>
            </div>
            <div className="col-md-8 text-end">
              <p>Rôle:</p>
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
