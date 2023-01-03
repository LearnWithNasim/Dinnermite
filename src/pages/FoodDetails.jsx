import React from "react";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import products from "../assets/fake-data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import "../styles/product-details.css";
import ProductCart from "../components/UI/product-card/productCard";
import { useEffect } from "react";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { useDispatch } from "react-redux";

const FoodDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [tab, setTab] = useState("desc");

  const [enteredName, setEnterName] = useState("");
  const [enteredEmail, setEnterEmail] = useState("");
  const [reviewMsg, setReveiwMsg] = useState("");

  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);

  const { image01, image02, image03, title, desc, price, category } = product;

  const relatedProducts = products.filter((item) => category === item.category);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
        category,
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(enteredName, enteredEmail, reviewMsg);
  };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <Helmet title="Product-details">
      <CommonSection title={product.title} />
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product_images">
                <div
                  className="img_item pb-2"
                  onClick={() => setPreviewImg(image01)}
                >
                  <img src={image01} alt="" className="w-50" />
                </div>
                <div
                  className="img_item"
                  onClick={() => setPreviewImg(image02)}
                >
                  <img src={image02} alt="" className="w-50" />
                </div>
                <div
                  className="img_item "
                  onClick={() => setPreviewImg(image03)}
                >
                  <img src={image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>
            <Col lg="4" md="4">
              <div className="product_main_img ">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="single_product-content">
                <h2 className="product_title mb-3 pt-5">{title}</h2>
                <span className="product_price">price: ${price}</span>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>
                <button onClick={addItem} className="addToCart_btn ">
                  Add to Cart
                </button>
              </div>
            </Col>

            <Col lg="12" className="py-5">
              <div className="tabs d-flex align-items-center gap-5 pt-2 ">
                <h6
                  className={`${tab === "desc" ? "tab_active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  onClick={() => setTab("rev")}
                  className={`${tab === "rev" ? "tab_active" : ""}`}
                >
                  Review
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab_content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab_form mb-3">
                  <div className="review pt-4">
                    <p className="user_name mb-0">Jhon Doe</p>
                    <p className="user_email">jhon1@gmail.com</p>
                    <p className="feedback_text">Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="review">
                    <p className="user_name mb-0">Jhon Doe</p>
                    <p className="user_email">jhon1@gmail.com</p>
                    <p className="feedback_text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Minus esse voluptatibus blanditiis!
                    </p>
                  </div>
                  <div className="review pb-3">
                    <p className="user_name mb-0">Jhon Doe</p>
                    <p className="user_email">jhon1@gmail.com</p>
                    <p className="feedback_text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Commodi adipisci excepturi cum sed facilis consequatur
                      aut. Porro.
                    </p>
                  </div>
                  <form className="form" onSubmit={submitHandler}>
                    <div className="form_group">
                      <input
                        onChange={(e) => setEnterName(e.target.value)}
                        type="text"
                        placeholder="Jhone Doe..."
                        required
                      />
                    </div>

                    <div className="form_group">
                      <input
                        onChange={(e) => setEnterEmail(e.target.value)}
                        type="text"
                        placeholder="Example@gmail.com"
                        required
                      />
                    </div>

                    <div className="form_group">
                      <textarea
                        onChange={(e) => setReveiwMsg(e.target.value)}
                        rows={4}
                        type="text"
                        placeholder="Leave Your Experience..."
                        required
                      />
                    </div>
                    <button className="addToCart_btn" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Col>

            <Col lg="12" className="mt-0">
              <h2 className="mb-4 releated_product-title">
                You might also like..
              </h2>
            </Col>
            {relatedProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xm="6" key={item.id}>
                <ProductCart item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
