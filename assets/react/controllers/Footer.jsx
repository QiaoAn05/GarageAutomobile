import React from 'react';

const Footer = (props) => {
  const userId = props.userId;
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <a className="footer-brand text-uppercase mb-4 font-weight-bold text-warning" href="#">
              Garage V.Parrot
            </a>
            <div className="mt-5">
              <img src="assets/images/logo parrot.png" alt="logo du garage" />
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Nos horaires</h5>
            <p className='text-white'>
              Lundi - vendredi
              <br/>
              8h45 - 12h / 14h - 18h
            </p>
            <p className='text-white'>
              Samedi
              <br/>
              8h45 - 12h
            </p>
            
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Nous contacter</h5>
            <p>
              <i className="fas fa-home mr-3"></i>123 Rue des mécaniciens<br/>31000 Toulouse,<br/> France
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i>contact@garagevparrot.fr
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i>0123456789
            </p>

          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Nous suivre</h5>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}>
                  <i className="fab fa-facebook">f</i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}>
                  <i className="fab fa-instagram">i</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>
              {' '}
              Copyright @2023
              <a href="#" style={{ textDecoration: 'none' }}>
                <strong className="text-white"> Mentions légales </strong>
              </a>
              | site réalisé par Perez Johan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
