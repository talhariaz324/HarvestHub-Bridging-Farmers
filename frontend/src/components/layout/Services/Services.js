import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import "./Services.css";
const Services = () => {
  return (
    <section className="services-section mt-5">
      <Container>
        <Row>
          <Col lg={{ size: 8, offset: 2 }}>
            <h2 className="  mb-5">Our Services</h2>
            <Row>
              <Col md={{ size: 4 }}>
                <Card className="service-card">
                  <CardBody>
                    <CardTitle>
                      <FontAwesomeIcon
                        color="#097969"
                        icon={faCog}
                        className="service-icon"
                      />
                      Service 1
                    </CardTitle>
                    <p className="service-description mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse et dolor et neque placerat efficitur.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md={{ size: 4 }}>
                <Card className="service-card">
                  <CardBody>
                    <CardTitle>
                      <FontAwesomeIcon
                        color="#097969"
                        icon={faCog}
                        className="service-icon"
                      />
                      Service 2
                    </CardTitle>
                    <p className="service-description mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse et dolor et neque placerat efficitur.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md={{ size: 4 }}>
                <Card className="service-card">
                  <CardBody>
                    <CardTitle>
                      <FontAwesomeIcon
                        color="#097969"
                        icon={faCog}
                        className="service-icon"
                      />
                      Service 2
                    </CardTitle>
                    <p className="service-description mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse et dolor et neque placerat efficitur.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={{ size: 4 }}>
                <Card className="service-card">
                  <CardBody>
                    <CardTitle>
                      <FontAwesomeIcon
                        color="#097969"
                        icon={faCog}
                        className="service-icon"
                      />
                      Service 1
                    </CardTitle>
                    <p className="service-description mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse et dolor et neque placerat efficitur.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md={{ size: 4 }}>
                <Card className="service-card">
                  <CardBody>
                    <CardTitle>
                      <FontAwesomeIcon
                        color="#097969"
                        icon={faCog}
                        className="service-icon"
                      />
                      Service 2
                    </CardTitle>
                    <p className="service-description mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse et dolor et neque placerat efficitur.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md={{ size: 4 }}>
                <Card className="service-card">
                  <CardBody>
                    <CardTitle>
                      <FontAwesomeIcon
                        color="#097969"
                        icon={faCog}
                        className="service-icon"
                      />
                      Service 2
                    </CardTitle>
                    <p className="service-description mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse et dolor et neque placerat efficitur.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
