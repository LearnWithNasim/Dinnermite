import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";
import CommonSection from "../components/UI/common-section/CommonSection";
import "../styles/checkout.css";

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [enterPostalCode, setEnterPostalCode] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingcost = 30;

  const totalAmount = cartTotalAmount + Number(shippingcost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCity,
      postalCode: enterPostalCode,
    };
    shippingInfo.push(userShippingAddress);

    console.log(shippingInfo);
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout_form" onSubmit={submitHandler}>
                <div className="form_group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) => setEnterName(e.target.value)}
                    required
                  />
                </div>
                <div className="form_group">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    onChange={(e) => setEnterEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form_group">
                  <input
                    type="text"
                    placeholder="City..."
                    onChange={(e) => setEnterCity(e.target.value)}
                    required
                  />
                </div>
                <div className="form_group">
                  <input
                    type="number"
                    placeholder="+01124..."
                    onChange={(e) => setEnterNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="form_group">
                  <input
                    type="number"
                    placeholder="Postal code"
                    onChange={(e) => setEnterPostalCode(e.target.value)}
                    required
                  />
                </div>
                <button className="addToCart_btn mt-3" type="submit">
                  Payment
                </button>
              </form>
            </Col>
            <Col lg="4" md="6">
              <div className="checkout_bill p-4">
                <h6 className="d-flex align-items-center py-2  justify-content-between ">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center py-2 justify-content-between">
                  Shipping: <span>${shippingcost}</span>
                </h6>

                <div className="checkout_total">
                  <h5 className="d-flex align-items-center py-2 justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
