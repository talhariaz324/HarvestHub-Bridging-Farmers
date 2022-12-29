import React from 'react'
import "./css/bootstrap.min.css"
import "./css/bootstrap.min.css"
// import "./css/custom.css"
// import "./css/font-awesome.css"

// import "./css/owl.carousel.css"
// import "./css/responsive.css"
// import "./css/animate.css"
// import "./css/Footer.css"


function Footer() {
  return (
    <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="widget clearfix">
                <div className="widget-title">
                  <img src="images/logos/Kisan Sahulat c.png" alt="" height="50px" />
                </div>
                <p className="slide-up"> We provide opportunity to farmers to sell their crops without involement of third party. <br />And buyers chance to buy organic crops at cheap rates at compare to market</p>                        
              </div>{/* end clearfix */}
            </div>{/* end col */}
            <div className="col-md-6 col-lg-3">
              <div className="widget clearfix">
                <div className="widget-title">
                  <h3>Useful links</h3>
                </div>
                <ul className="footer-links hov">
                  <li><a href="#">Home <span className="icon icon-arrow-right2" /></a></li>
                  <li><a href="#">Services <span className="icon icon-arrow-right2" /></a></li>
                  <li><a href="#">Products<span className="icon icon-arrow-right2" /></a></li>
                  <li><a href="#">About <span className="icon icon-arrow-right2" /></a></li>
                  <li><a href="#">Faq <span className="icon icon-arrow-right2" /></a></li>
                  <li><a href="#">Contact <span className="icon icon-arrow-right2" /></a></li>
                </ul>{/* end links */}
              </div>{/* end clearfix */}
            </div>{/* end col */}
            <div className="col-md-6 col-lg-3">
              <div className="widget footer-contact clearfix">
                <div className="widget-title">
                  <h3>Contact Us</h3>
                </div>
                <ul>
                  <li>Address: Comsata University, Wah Campus, Pakistan</li>
                  <li>Phone: <a href="#">+92 6578908-98 </a></li>
                  <li>Email: <a href="#">info@kisansahulat.com </a></li>
                </ul>
                {/* <ul className="social-list">
                  <li><a href="https://www.facebook.com/" className="facebook"><i className="fa-brands fa-facebook-f" style={{color: 'white'}} /></a></li>
                  <li><a href="https://twitter.com/" className="twitter" hover:green><i className="fa-brands fa-twitter" style={{color: 'white'}} /></a></li>
                  <li><a href="https://linkedin.com/" className="linkedin"><i className="fa-brands fa-linkedin-in" style={{color: 'white'}} /></a></li>
                  <li><a href="https://www.instagram.com/" className="instagram"><i className="fa-brands fa-instagram" style={{color: 'white'}} /></a></li>
                  <li><a href="https://plus.google.com/" className="googlePlus"><i className="fa-brands fa-google-plus-g" style={{color: 'white'}} /></a></li>
                </ul> */}
              </div>
            </div>
          </div>{/* end row */}
          
          
        </div>{/* end container */}
     
        <div className="container">
          <div className="footer-distributed">
            <div className="footer-left">                   
              <p className="footer-company-name">All Rights Reserved. © 2022 <a href="#">Kisan sahulat</a>
              </p></div>
          </div>
        </div>{/* end container */}
     
      </footer>
      
     
      
 
  );
}

export default Footer
