import React from 'react';


const Profile = (props) => {
  const fullName= "Bob";
  return (
    <main>
        <section className='container comment-form w-50 my-5'>
        <h2 className='text-center mb-5'>{ fullName }</h2>
        <div className="mb-3">
          <input type="email" className="form-control" id="emailLogin" placeholder="Email" required/>
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" id="passwordLogin" placeholder="Mot de passe" required/>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-dark w-100 text-warning">Envoyer</button>
        </div>
        
      </section>
    </main>
  );
};

export default Profile;
