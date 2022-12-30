import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
  Alert,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    if (!name || !email || !phone || !message) {
      setError("All fields are required");
      return;
    }

    // Send form data to server or handle form submission here

    setSubmitted(true);
  };

  return (
    <Container className="contact-us-container">
      <Row>
        <Col>
          <h2 className=" mb-4">Contact Us</h2>
          <Form
            className="contact-form-container form-inline"
            onSubmit={handleSubmit}
          >
            <div className="d-flex">
              <FormGroup>
                <Label for="name">
                  <FontAwesomeIcon
                    color="#097969"
                    icon={faEnvelope}
                    className="me-2"
                  />
                  Name
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="ms-3">
                <Label for="email">
                  <FontAwesomeIcon
                    color="#097969"
                    icon={faEnvelope}
                    className="me-2"
                  />
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
            </div>
            <FormGroup>
              <Label for="phone">
                <FontAwesomeIcon
                  color="#097969"
                  icon={faPhone}
                  className="me-2"
                />
                Phone
              </Label>
              <Input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                name="message"
                id="message"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormGroup>
            <Button className="bg-success" type="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
