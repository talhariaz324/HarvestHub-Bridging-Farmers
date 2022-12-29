import React from "react";
import "./css/bootstrap.min.css";
import "./css/custom.css";
// import "./css/font-awesome.css";

// import "./css/owl.carousel.css";
// import "./css/responsive.css";
// import "./css/animate.css";

function Body() {
  return (
    <div>
      <div className="slider-area">
        <div className="slider-item text-center home-one-slider-otem slider-item-four slider-bg-one">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="slider-content-area">
                  <div className="slide-text">
                    <h1 className7="homepage-three-title">
                      Welcome to <span>Kisan</span> Sahulat
                    </h1>
                    <h2>
                      {" "}
                      All type of crops available at cheap rates and best
                      quality at one click so why to wait just click and
                      purchase
                    </h2>
                    <div className="slider-content-btn">
                      <a className="btn11" href="#">
                        View Products<div className="transition"></div>
                      </a>
                      <a className="btn11" href="#">
                        Buy Products<div className="transition"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
