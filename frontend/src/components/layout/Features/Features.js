import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCog } from "@fortawesome/free-solid-svg-icons";
import "./Features.css";

const Features = () => {
  return (
    <section className="features-section">
      <Container>
        <h1 className="   features ">Our Features</h1>
        <Row>
          <Col lg={{ size: 4, offset: 2 }}>
            <div className="feature-item">
              <FontAwesomeIcon
                color="#097969"
                icon={faCheck}
                className="feature-icon"
              />
              <h3 className="feature-title">Feature 1</h3>
              <p className="feature-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse et dolor et neque placerat efficitur.
              </p>
            </div>
          </Col>
          <Col lg={{ size: 4 }}>
            <div className="feature-item">
              <FontAwesomeIcon
                color="#097969"
                icon={faCog}
                className="feature-icon"
              />
              <h3 className="feature-title">Feature 2</h3>
              <p className="feature-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse et dolor et neque placerat efficitur.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={{ size: 4, offset: 2 }}>
            <div className="feature-item">
              <FontAwesomeIcon
                color="#097969"
                icon={faCheck}
                className="feature-icon"
              />
              <h3 className="feature-title">Feature 3</h3>
              <p className="feature-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse et dolor et neque placerat efficitur.
              </p>
            </div>
          </Col>
          <Col lg={{ size: 4 }}>
            <div className="feature-item">
              <FontAwesomeIcon
                color="#097969"
                icon={faCog}
                className="feature-icon"
              />
              <h3 className="feature-title">Feature 4</h3>
              <p className="feature-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse et dolor et neque placerat efficitur.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
