import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <Helmet title="Contuct-us">
      <CommonSection title="Contuct-us" />

      <Container>
        <Row>
          <Col lg="6" md="6" className="m-auto">
            <div className="container py-5">
              <h2 className="mb-3">Contact Us</h2>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>
                  <textarea className="form-control" id="message" required />
                </div>
                <button className="addToCart_btn" type="submit">
                  {formStatus}
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};
export default Contact;
