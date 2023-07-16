import React from 'react';

const Footer = (props) => {
    const userId = props.userId;
  return (
    <footer className="bg-dark text-white pt-5 pb-4">

        <div className="container text-center text-md-left">

            <div className="row text-center text-md-left">

                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">

                    <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Compagny Name</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sequi, asperiores dolore expedita nostrum!</p>

                </div>

                <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>

                    <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Products</h5>
                <p>
                <a href="#" className='text-white' style={{ textDecoration: 'none' }}>TheProviders</a>
                </p>
                <p>
                <a href="#" className='text-white' style={{ textDecoration: 'none' }}>Creativity</a>
                </p>
                <p>
                <a href="#" className='text-white' style={{ textDecoration: 'none' }}>SourceFiles</a>
                </p>
                <p>
                <a href="#" className='text-white' style={{ textDecoration: 'none' }}>Bootstrap 5 alpha</a>
                </p>
                </div>

                <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
                    <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Useful links</h5>
                    <p>
                <a href="#" className='text-white' style={{ textDecoration: 'none' }}>Your Account</a>
                </p>
                <p>
                <a href="#" className='text-white' style={{ textDecoration: 'none' }}>Become an Affiliate</a>
                </p>
                <p>
                <a href="#" className='text-white' style={{ textDecoration: 'none' }}>Shipping Rates</a>
                </p>
                <p>
                <a href="#" className='text-white' style={{ textDecoration: 'none' }}>Help</a>
                </p>
                </div>

                <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
                    <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Contact</h5>
                    <p>
                        <i className='fas fa-home mr-3'></i>New York, NY 2333, US
                    </p>
                    <p>
                        <i className='fas fa-enveloppe mr-3'></i>theproviders98@gmail.com
                    </p>
                    <p>
                        <i className='fas fa-phone mr-3'></i>0123456789
                    </p>
                    <p>
                        <i className='fas fa-print mr-3'></i>0123456789
                    </p>
                </div>

            </div>

            <hr className='mb-4' />

            <div className='row align-items-center'>

                <div className='col-md-7 col_lg-8'>
                    <p> Copyright @2020 All rights reserved by:
                        <a href="#" style={{ textDecoration: 'none' }}>
                            <strong className='text-warning'>The Providers</strong>
                        </a>
                    </p>

                </div>

                <div className='col-md-5 co-lg-4'>
                    <div className='text-center text-md-right'>

                        <ul className='list-unstyled list-inline'>
                            <li className='list-inline-item'>
                                <a href="#" className='btn-floating btn-sm text-white' style={{ fontSize: '23px' }}><i className='fab fa-facebook'></i></a>
                            </li>
                            <li className='list-inline-item'>
                                <a href="#" className='btn-floating btn-sm text-white' style={{ fontSize: '23px' }}><i className='fab fa-instagram'></i></a>
                            </li>
                        </ul>

                    </div>

                </div>

            </div>

        </div>

    </footer>
  );
};

export default Footer;