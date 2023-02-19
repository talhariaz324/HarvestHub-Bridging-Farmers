import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../About/About.css";
const About = () => {
  return (
    <div className="about-container">
      <Container>
        <Row>
          <Col>
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Rerum, odit
              quam quia aperiam eligendi, mollitia neque ipsum obcaecati
              accusantium nemo eum aliquid, reiciendis illum nihil repellendus
              perferendis. Fuga, sapiente. Sunt necessitatibus reprehenderit
              aperiam expedita in optio quidem eos rerum tempora consequatur
              fugiat officiis mollitia corporis, tempore ut. Debitis a expedita
              eaque quisquam modi pariatur ea deleniti excepturi? Expedita enim,
              minus illum nostrum, quibusdam commodi exercitationem quas
              accusamus repellat libero, officia ab veritatis ea similique.
              Quaerat eaque harum ea ipsa, dolorum eveniet totam non voluptatem
              odit dignissimos cupiditate provident nostrum laboriosam. Ab amet
              earum nesciunt quaerat consequuntur dolorem numquam quos vitae
              quia quibusdam, unde, maiores nihil autem fugiat odio nisi iusto
              delectus, eaque id reiciendis harum? Animi, ipsam veniam ipsa
            </p>
          </Col>
          <Col className="about">
            <img
              width="480"
              height="auto"
              className="img-responsive"
              src="https://i0.wp.com/the-14.com/wp-content/uploads/2022/05/Person-touching-a-grass.png?resize=1024%2C504&ssl=1"
              alt="About us"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
