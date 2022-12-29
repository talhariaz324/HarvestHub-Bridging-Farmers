import React from 'react'
import "./css/bootstrap.min.css"
import "./css/bootstrap.min.css"
// import "./css/custom.css"
// import "./css/font-awesome.css"

// import "./css/owl.carousel.css"
// import "./css/responsive.css"
// import "./css/animate.css"

function Features() {
  return (
    <div>
    <div className="parallax section noover" data-stellar-background-ratio="0.7">
      <div className="container">
        <div className="row text-center align-items-center">
          <div className="col-md-6">
            <div className="customwidget text-left">
              <h1>Modern farming</h1>
              <p style={{color: 'white'}}>Our farmers are using modern farming methods, <br />to increase efficency and to reduce natural resources need <br />We focus on </p>
              <ul className="list-inline">
                <li><i className="fa fa-check" style={{color: 'white'}} /> Modern Green house</li>
                <li><i className="fa fa-check" style={{color: 'white'}} /> Hydroponic farming</li>
                <li><i className="fa fa-check" style={{color: 'white'}} /> Aeroponic farming</li>
                <li><i className="fa fa-check" style={{color: 'white'}} /> Modern technology</li>
              </ul>{/* end list */}
            </div>
          </div>{/* end col */}
          <div className="col-md-6">
            <div className="text-center image-center hidden-sm hidden-xs">
              <img src="uploads/Photo+2.jpg" alt="" className="img-fluid wow fadeInUp" />
            </div>
          </div>
        </div>{/* end row */}
      </div>{/* end container */}
    </div>{/* end section */}
    <div id="features" className="section lb">
      <div className="container">
        <div className="section-title text-center">
          <h3>Our features</h3>
          <p className="lead">Our aim is to provide you with best. <br />We grow, harvest &amp; deliver the freshest zero pesticide crops!</p>
        </div>{/* end title */}
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <ul className="features-left">
              <li className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s">
                <i className="fa-solid fa-leaf" style={{color: 'green'}} />
                <div className="fl-inner">
                  <h4>100% Organic</h4>
                  <p> 100% organic with no artifical fertilizer usage.</p>
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                <i className="fa-solid fa-tractor" style={{color: 'green'}} />
                <div className="fl-inner">
                  <h4>Modern Farmings</h4>
                  <p>Modern technology and methods are used. </p>
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.4s">
                <i className="fa-solid fa-flask" style={{color: 'green'}} />
                <div className="fl-inner">
                  <h4>Chemical Free</h4>
                  <p>Chemical Free crops ready to use with a simple wash. </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-4 hidden-xs hidden-sm">
            <img src="uploads/Screenshot__574_-removebg-preview.png" className="img-center img-fluid" alt="" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <ul className="features-right">
              <li className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
                <i className="fa-solid fa-seedling" style={{color: 'green'}} />
                <div className="fr-inner">
                  <h4>GMO Free</h4>
                  <p> GMO free seeds used to ensure a more natural approach. </p>
                </div>
              </li>
              <li className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                <i className="fa-solid fa-phone" style={{color: 'green'}} />
                <div className="fr-inner">
                  <h4>24/7 support</h4>
                  <p>24/7 buying and selling available </p>
                </div>
              </li>
              <li className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.4s">
                <i className="fa-solid fa-carrot" style={{color: 'green'}} />
                <div className="fr-inner">
                  <h4>Pesticide Free</h4>
                  <p>All crops pesticide and preservative-free. </p>
                </div>
              </li>
            </ul>
          </div>{/* end col */}
        </div>{/* end row */}
      </div>{/* end container */}
    </div>{/* end section */}
  </div>
   
  );
}

export default Features
