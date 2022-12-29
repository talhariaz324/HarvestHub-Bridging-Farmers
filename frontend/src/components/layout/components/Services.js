import React from "react";
import "./css/bootstrap.min.css";
// import "./css/bootstrap.min.css"
// import "./css/custom.css"
// import "./css/font-awesome.css"

// import "./css/owl.carousel.css"
// import "./css/responsive.css"
// import "./css/animate.css"
function Services() {
  return (
    <div>
      <div id="services" className="parallax section lb">
        <div className="container">
          <div className="section-title text-center">
            <h3>Our Service</h3>
            <p className="lead">
              {" "}
              We tried our best to provide you ease to buy products
            </p>
          </div>
          {/* end title */}
          <div className="owl-services owl-carousel owl-theme">
            <div className="post-media wow fadeInUp">
              <div className="service-widget">
                <img
                  src="uploads/tomatoes-solanum-lycopersicum-harvesting-300x248.jpg"
                  alt=""
                  className="img-fluid img-rounded"
                  style={{ height: "173px" }}
                />
                <div className="service-dit">
                  <h3>Harvest from farms</h3>
                  <p>We harvest pesticide free crops from our farms. </p>
                </div>
              </div>
            </div>
            {/* end service */}
            <div className="post-media wow fadeInUp">
              <div className="service-widget">
                <img
                  src="uploads/plan-spring-vegetable-garden-basket-of-fresh-vegetables.jpg"
                  alt=""
                  className="img-fluid img-rounded"
                  style={{ height: "173px" }}
                />
                <div className="service-dit">
                  <h3>Quality check</h3>
                  <p>
                    We make sure that all crops are organic and chemical free.
                  </p>
                </div>
              </div>
            </div>
            {/* end service */}
            <div className="post-media wow fadeInUp">
              <div className="service-widget">
                <img
                  src="uploads/istockphoto-1398472839-170667a-12.jpg"
                  alt=""
                  className="img-fluid img-rounded "
                  style={{ height: "173px" }}
                />
                <div className="service-dit">
                  <h3>Online payment</h3>
                  <p>Easy payment from your mobile phone by sitting at home.</p>
                </div>
              </div>
            </div>
            {/* end service */}
            <div className="service-widget">
              <div className="post-media wow fadeInUp">
                <img
                  src="uploads/10-online-cloud-grocery-delivery-klang-valley-003.jpg"
                  alt=""
                  className="img-fluid img-rounded"
                  style={{ height: "173px" }}
                />
              </div>
              <div className="service-dit">
                <h3>Delivery</h3>
                <p>We deliver all your orders at your doorstep. </p>
              </div>
            </div>
            {/* end service */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
    </div>
  );
}

export default Services;
