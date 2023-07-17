import React from 'react';

const Main = (props) => {
  const fullName = "Hello World";
  return (
    <main>
      <section className='repairs mt-5'>
        <div className="card mb-3 w-100">
          <div className="row g-0">
            <div className="col-md-4">
              <img src="#" className="img-fluid rounded-start" alt="image repairs" />
            </div>
            <div className="col-md-8 text-center">
              <div className="card-body">
                <h5 className="card-title text-dark text-uppercase">Réparations</h5>
                <p className="card-text">Réparez en toute confiance. Notre garage automobile met à votre disposition une équipe de mécaniciens expérimentés et qualifiés, prêts à prendre soin de votre voiture.</p>
                <button type="button" className="btn btn-info">En savoir plus</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='maintenance'>
        <div className="card mb-3 w-100">
            <div className="row g-0">
              
              <div className="col-md-8 text-center">
                <div className="card-body">
                  <h5 className="card-title text-dark text-uppercase">Entretiens</h5>
                  <p className="card-text">Chez Garage V.Parrot, nous comprenons l'importance d'un entretien régulier pour prolonger la durée de vie de votre véhicule. Nos techniciens compétents vous offrent des services d'entretien complets</p>
                  <button type="button" className="btn btn-info">En savoir plus</button>
                </div>
              </div>
              <div className="col-md-4">
                <img src="#" className="img-fluid rounded-start" alt="image repairs" />
              </div>
            </div>
          </div>
      </section>

      <section className='second-hand'>
        <div className="card mb-3 w-100">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="#" className="img-fluid rounded-start" alt="image repairs" />
              </div>
              <div className="col-md-8 text-center">
                <div className="card-body">
                  <h5 className="card-title text-dark text-uppercase">Ventes d'occasion</h5>
                  <p className="card-text">Roulez avec style et fiabilité. Découvrez notre sélection exclusive de voitures d'occasion de qualité supérieure, prêtes à prendre la route.</p>
                  <button type="button" className="btn btn-info">En savoir plus</button>
                </div>
              </div>
            </div>
          </div>
      </section>

      <section className='container contact-us w-100 text-center my-5'>
        <div>
        Contactez-nous pour toute demande au <strong>01 23 45 67 89</strong> ou par mail <strong>contact@garagevparrot.fr</strong>
        </div>
        <div>
        <button type="button" className="btn btn-info">Contacter-nous</button>
        </div>
      </section>
    
      <hr />

      <section className='container comments my-5 text-center'>
        <h2 className='uppercase font-weight-bold mb-5'>Témoignages</h2>
        <blockquote className="blockquote mb-0">
          <p><em>"Le garage automobile idéal ! Un service impeccable et des voitures d'occasion de qualité. Je suis entièrement satisfait de mon expérience avec eux."</em></p>
          <div className="blockquote-footer text-end pe-5 me-5">Marie D.</div>
        </blockquote>

      </section>

      <hr />

      <section className='container comment-form w-50 mb-5'>
        <h2 className='text-center'>Votre avis</h2>
        <div className="mb-3">
          <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Nom" />
        </div>
        <div className="mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Votre avis...'></textarea>
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-100">Envoyer</button>
        </div>
        
      </section>
    </main>
  );
};

export default Main;