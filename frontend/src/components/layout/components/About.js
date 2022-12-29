import React from "react";
import "./css/bootstrap.min.css";
// import "./css/bootstrap.min.css"
// import "./css/custom.css"
// import "./css/font-awesome.css"

// import "./css/owl.carousel.css"
// import "./css/responsive.css"
// import "./css/animate.css"
function About() {
  return (
    <div id="about" className="section wb">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="message-box">
              <h4>About Us</h4>
              <h2>Welcome to Kisan Sahulat</h2>
              <p>
                {" "}
                Our aim to provide maximum profit to our farmers and maximum
                benefit to our buyers. <br /> We want to elimination third party
                interference by providing one to one communication to farmer and
                buyer. This way farmer can sell crops without help of any
                contractor and without visiting market. <br /> Buyer can also by
                crops on cheap rates as compared to market. <br /> We ensure you
                that our products are organic and chemical-free{" "}
              </p>
              <a className="btn11" href="#0">
                <span>Buy Products</span>
                <div className="transition" />
              </a>
            </div>
            {/* end messagebox */}
          </div>
          {/* end col */}
          <div className="col-md-6">
            <div className="post-media wow fadeIn">
              <img
                src="uploads/a4.jpg"
                alt=""
                className="img-fluid wow fadeInUp"
              />
            </div>
            {/* end media */}
          </div>
          {/* end col */}
        </div>
        {/* end row */}
        <hr className="hr1" />
        <div className="row">
          <div className="col-md-6">
            <div className="message-box">
              <div className="post-media wow fadeInLeft">
                <h2>Our Mission</h2>
                <p className="lead">
                  Our mission is to facilatate both farmer and our buyers
                </p>
                <ul>
                  <li>
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                      style={{ color: "green" }}
                    />{" "}
                    Eliminate third party interference
                  </li>
                  <li>
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                      style={{ color: "green" }}
                    />{" "}
                    Providing one to one communication
                  </li>
                  <li>
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                      style={{ color: "green" }}
                    />{" "}
                    Providing organic and chemical-free crops to our buyers
                  </li>
                </ul>
                <a href="#" className="btn11">
                  <span>Buy Products</span>
                  <div className="transition" />
                </a>
              </div>
              {/* end messagebox */}
            </div>
          </div>
          {/* end col */}
          <div className="col-md-6">
            <div className="message-box">
              <div className="post-media wow fadeInRight">
                <h2>Our Vision</h2>
                <p className="lead">
                  Our vision is to covert manual agriculture product selling
                  method to online
                </p>
                <p>
                  {" "}
                  We want to facilatate our farmer by maximizing profit and
                  eliminating manaul ctrops selling and buying to online. This
                  way our farmer can easily sell his crops without difficulty of
                  visiting market
                </p>
                <a href="#" className="btn11">
                  <span>Buy Products</span>
                  <div className="transition" />
                </a>
              </div>
              {/* end messagebox */}
            </div>
          </div>
          {/* end col */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </div>
  );
}

export default About;
